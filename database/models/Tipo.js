module.exports = (sequelize, DataTypes) => {
    let tipo = sequelize.define(
      'Tipo',
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
      },
      {
        tableName: 'tipo',
        timestamps: false,
        freezeTableName: true
      }
    )

    tipo.associate = function(modelos) {
        tipo.hasMany(modelos.Produto, {
            as: "produtos",
            foreignKey: "tipo_id"
        });
      }
  
    return tipo;
  }