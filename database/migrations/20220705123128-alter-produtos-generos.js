'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('produtos', 'generos_id', {
      type: DataTypes.INTEGER,
      allowNull: false
  });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('produtos', 'generos_id');
  }
};
