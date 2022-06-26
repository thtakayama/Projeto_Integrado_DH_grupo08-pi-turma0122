module.exports = (sequelize, DataTypes) => {
    let Genero = sequelize.define(
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

    Genero.associate = function(modelos) {
      Genero.belongsToMany(modelos.Produto, {
        as: "produtos",
        through: "generos_produtos",
        foreignKey: "generos_id",
        otherKey: "produtos_id",
        timestamps: false
      });
    }
  
    return Genero
  }