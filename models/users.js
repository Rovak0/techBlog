const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {
    checkPassword(loginPw) { //gives the user class a function called checkpassword
        return bcrypt.compareSync(loginPw, this.password);
      }
}

User.init({
    id : {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    password : {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name : {
        type: DataTypes.STRING,
        allowNull: false,
    }
},    
{
    hooks: {
        async beforeCreate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
        },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
    hooks : true
}

);

module.exports = User;