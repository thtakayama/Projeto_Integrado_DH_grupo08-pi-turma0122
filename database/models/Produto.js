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
        }
    )

    return produto
}