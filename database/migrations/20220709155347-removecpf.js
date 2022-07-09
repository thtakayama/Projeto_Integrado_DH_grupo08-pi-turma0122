'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('clientes', 'cpf');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn('clientes', 'cpf', {
      type: Sequelize.CHAR(13),
      allowNull: false
  });
}
}