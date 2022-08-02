module.exports = (sequelize, DataTypes) => {
    let genero = sequelize.define(
      'Genero',
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
        tableName: 'generos',
        timestamps: false,
        freezeTableName: true
      }
    )

    genero.associate = function(modelos) {
      genero.belongsToMany(modelos.Produto, {
        as: "produtos",
        through: "generos_has_produtos",
        foreignKey: "produtos_id",
        otherKey: "generos_id"
      });
    }
  
    return genero;
  }