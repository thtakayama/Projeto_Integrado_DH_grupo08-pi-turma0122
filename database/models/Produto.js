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
            },
            tipo_id: {
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
            as: "autores",
            foreignKey: "autores_id"
        }
        ),
        produto.belongsTo(modelos.Tipo, {
            as: "tipo",
            foreignKey: "tipo_id"
        }
        ),
        produto.belongsToMany(modelos.Genero, {
            as: "generos",
            through: "generos_has_produtos",
            foreignKey: "produtos_id",
            otherKey: "generos_id"
        }
        );    
        produto.belongsToMany(modelos.Pedido, {
            as: "pedidos",
            through: "pedidos_has_produtos",
            foreignKey: "pedidos_id"
        }
        );  
    }

    return produto;
}