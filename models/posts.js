const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {
    //nothing special required
}

Post.init({
        id : {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        text : {
            type: DataTypes.STRING,
            allowNull: false,
        },
        //connections 
        user_id : {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        title : {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },    
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'post',
        hooks : true
    }
);

module.exports = Post;