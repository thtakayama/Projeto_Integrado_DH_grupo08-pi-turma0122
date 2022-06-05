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
  
    return genero
  }