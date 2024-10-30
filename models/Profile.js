const {DataTypes} = require("sequelize");
const sequelize = require('../database/db');

const Profile = sequelize.define('Profile',{
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    url: {
        type: DataTypes.STRING,
        allowNull:false
    },
    about: DataTypes.TEXT,
    bio: DataTypes.TEXT,
    location: DataTypes.STRING,
    followerCount: DataTypes.INTEGER,
    connectionCount: DataTypes.INTEGER
});

module.exports = Profile;