'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('produtos', 'tipo_id', {
      type: Sequelize.INTEGER,
      allowNull: false
  });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('produtos', 'tipo_id');
  }
};
