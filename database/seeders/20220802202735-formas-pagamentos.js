'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('formas_pagamento', [{
       tipo: 'Boleto'
     }, 
     {
      tipo: 'Cartão de Crédito'
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('formas_pagamento', null, {});
  }
};
