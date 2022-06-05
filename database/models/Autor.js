module.exports = (sequelize, DataTypes) => {
    let autor = sequelize.define(
        'Autor',
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
            biografia: {
                type: DataTypes.TEXT,
                allowNull: false,
            }
        },
        {
            tableName: 'autores',
            timestamps: false,
            freezeTableName: true
        }
    )

    return autor
}