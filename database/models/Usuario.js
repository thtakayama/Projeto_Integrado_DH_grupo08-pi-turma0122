module.exports = (sequelize, DataTypes) => {
    let usuario = sequelize.define(
        'Usuario',
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
            senha: {
                type: DataTypes.STRING(256),
                allowNull: false
            }
        },
        {
            tableName: 'usuario',
            timestamps: false,
            freezeTableName: true
        }
    )

    return usuario
}