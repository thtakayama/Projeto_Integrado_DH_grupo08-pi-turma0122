const path = require('path');
const { check } = require('express-validator');

module.exports = [
    check('nome')
        .notEmpty().withMessage('Preencher o campo nome').bail()
        .trim(),
    check('email')
        .notEmpty().withMessage('Preencher o campo e-mail').bail()
        .trim().bail()
        .normalizeEmail().bail()
        .isEmail().withMessage('Preencha com um e-mail válido.').bail(),
    check('senha')
        .notEmpty().withMessage('Preencher o campo senha').bail()
        .isLength({ min: 5 }).withMessage('Precisar ter mais de 5 caracteres.').bail()
        .trim(),
];