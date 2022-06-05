module.exports = (sequelize, DataTypes) => {
    let pedido_has_produto = sequelize.define(
      'Pedido_has_Produto',
      {
        pedidos_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false
        },
        produtos_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false
        }
      },
      {
        tableName: 'pedidos_has_produtos',
        timestamps: false,
        freezeTableName: true
      }
    )
  
    return pedido_has_produto;
  }