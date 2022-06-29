module.exports = (sequelize, DataTypes) => {
    let cliente = sequelize.define(
        'Cliente',
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
            },
            email: {
                type: DataTypes.STRING(100),
                allowNull: false,
                unique: true
            },
            cpf: {
                type: DataTypes.CHAR(13),
                allowNull: false
            },
            senha: {
                type: DataTypes.STRING(240),
                allowNull: false
            }
        },
        {
            tableName: 'clientes',
            timestamps: false,
            freezeTableName: true
        })

        cliente.associate = function (modelos) {
            cliente.hasMany(modelos.Endereco, {
                as: "enderecos",
                foreignKey: "clientes_id"
            }
            );
            cliente.hasMany(modelos.Pedido, {
                as: "pedidos",
                foreignKey: "clientes_id"
            }
            );    
        }

    return cliente

}