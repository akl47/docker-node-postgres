module.exports = (sequelize,DataTypes) => {
    var User = sequelize.define('User', {
        userID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        displayName:{
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        activeFlag: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }      
    })
    
    return User;
}