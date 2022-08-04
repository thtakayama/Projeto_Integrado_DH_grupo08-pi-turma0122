const path = require('path');
const { check, validationResult, body } = require('express-validator');
const CPF = require('cpf');
const { Cliente } = require('../database/models')

module.exports = [
    check('nome')
        .notEmpty().withMessage('Preencher o campo nome').bail()
        .trim(),
    check('cpf')
        .isLength({min: 14}).withMessage('Digite o CPF no formato xxx.xxx.xxx-xx').bail()
        .custom(cpf => {
        return CPF.isValid(cpf);
        }).withMessage('O CPF informado é inválido').bail()
        .custom(async cpf => {
        const cliente = await Cliente.findAll({where: {cpf: cpf}});
        if(cliente.length > 0){
            throw new Error('O CPF informado já está cadastrado');
        };
    }),
    check('email')
        .custom(async email => {
        const cliente = await Cliente.findAll({where: {email: email}});
        if(cliente.length > 0){
        throw new Error('O e-mail informado já está cadastrado');
        }}).bail()
        .notEmpty().withMessage('Preencher o campo e-mail').bail()
        .trim().bail()
        .normalizeEmail().bail()
        .isEmail().withMessage('Preencha com um e-mail válido.').bail(),
    check('senha')
        .notEmpty().withMessage('Preencher o campo senha').bail()
        .isLength({ min: 5 }).withMessage('Precisar ter mais de 5 caracteres.').bail()
        .trim(),
];