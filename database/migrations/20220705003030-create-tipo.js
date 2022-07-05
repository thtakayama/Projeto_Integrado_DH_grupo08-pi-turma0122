'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('tipo', 
     {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nome: {
        type: DataTypes.STRING(100),
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('tipo');
  }
};
