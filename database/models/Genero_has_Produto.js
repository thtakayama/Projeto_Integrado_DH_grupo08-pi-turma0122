module.exports = (sequelize, DataTypes) => {
    let genero_has_produto = sequelize.define(
        'Genero_has_Produto',
        {
            generos_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            produtos_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false
            }
        },
        {
            tableName: 'generos_has_produtos',
            timestamps: false,
            freezeTableName: true
        }
    )  

    return genero_has_produto;
    
}