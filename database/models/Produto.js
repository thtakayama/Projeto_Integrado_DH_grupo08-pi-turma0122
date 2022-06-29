module.exports = (sequelize, DataTypes) => {
    let produto = sequelize.define(
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
                type: DataTypes.DECIMAL(19,2),
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

    produto.associate = function (modelos) {
        produto.belongsTo(modelos.Autor, {
            as: "autor",
            foreignKey: "autores_id"
        }
        ),
        produto.belongsToMany(modelos.Genero, {
            as: "generos",
            through: "genero_has_produto",
            foreignKey: "produtos_id",
            otherKey: "generos_id",
            timestamps: false
        }
        );    
    }

    return produto;
}