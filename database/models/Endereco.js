module.exports = (sequelize, DataTypes) => {
    let endereco = sequelize.define(
        'Endereco',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            logradouro: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            complemento: {
                type: DataTypes.STRING(100),
                allowNull: false,
                unique: true
            },
            cep: {
                type: DataTypes.STRING(10),
                allowNull: false
            },
            cliente_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            bairro: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            cidade: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            estado: {
                type: DataTypes.STRING(100),
                allowNull: false
            }
        },
        {
            tableName: 'enderecos',
            timestamps: false,
            freezeTableName: true
        }
    )

    endereco.associate = function (modelos) {
        endereco.belongsTo(modelos.Cliente, {
            as: "clientes",
            foreignKey: "clientes_id"
        }
        );  
    }

    return endereco
}