module.exports = (sequelize, DataTypes) => {
    let forma_pagamento = sequelize.define(
      'Forma_Pagamento',
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        tipo: {
          type: DataTypes.STRING(20),
          allowNull: false
        }
      },
      {
        tableName: 'formas_pagamento',
        timestamps: false,
        freezeTableName: true
      }
    ) 
  
    return forma_pagamento
    
  }