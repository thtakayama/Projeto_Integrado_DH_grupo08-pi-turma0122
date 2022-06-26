module.exports = (sequelize, DataTypes) => {
    let Produto = sequelize.define(
        'Produto',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            titulo: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            preco: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            avaliacao: {
                type: DataTypes.FLOAT,
                allowNull: false
            },
            descricao: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            img: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            autores_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            tableName: 'produtos',
            timestamps: false,
            freezeTableName: true
        })

        Produto.associate = function(modelos) {
            Produto.belongsTo(modelos.Autor, {
              as: "autor",
              foreignKey: "autores_id"
            });

            Produto.associate = function(modelos) {
                Produto.belongsToMany(modelos.Genero, {
                  as: "generos",
                  through: "generos_produtos",
                  foreignKey: "produtos_id",
                  otherKey: "generos_id",
                  timestamps: false
                });
              }
          }

    return Produto
}