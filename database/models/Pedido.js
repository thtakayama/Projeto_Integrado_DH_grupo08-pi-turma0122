module.exports = (sequelize, DataTypes) => {
    let pedido = sequelize.define(
      'Pedido',
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        data_pedido: {
          type: DataTypes.DATE,
          allowNull: false
        },
        data_entrega: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        valor: {
          type: DataTypes.FLOAT,
          allowNull: false
        },
        formas_pagamento_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        clientes_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
      },
      {
        tableName: 'pedidos',
        timestamps: false,
        freezeTableName: true
      }
    )

    pedido.associate = function (modelos) {
      pedido.belongsTo(modelos.Cliente, {
          as: "cliente",
          foreignKey: "clientes_id"
      }
      )

      pedido.belongsTo(modelos.Forma_Pagamento, {
        as: "pagamentos",
        foreignKey: "formas_pagamento_id"
    }
    )

      pedido.belongsToMany(modelos.Produto, {
          as: "produtos",
          through: "pedido_has_produto",
          foreignKey: "produtos_id"
      }
      ); 
    }
  
    return pedido
  }