import { DataTypes } from 'sequelize';
import sequelize from '../../app/db/db_connection.js';
import User from './model_user.js';

const Session = sequelize.define('Session', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    token: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    begin: {
        type: DataTypes.INTEGER,
        allowNull:true
    },
    end: {
        type: DataTypes.INTEGER,
        allowNull:true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },

}, {
    tableName: 'session',
    timestamps: false,
});



export default Session;