import { DataTypes } from 'sequelize';
import sequelize from './../../app/db/db_connection.js';
import Person from '../Person/model_person.js';
const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    loged: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    attempts: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    person_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Person,
            key: 'id'
        }
    },
}, {
    tableName: 'user',
    timestamps: false,
});
const Session = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date_begin: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    date_end: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },

}, {
    tableName: 'sessions',
    timestamps: false,
});
User.belongsTo(Person, { foreignKey: 'person_id' });
Person.hasMany(User, { foreignKey: 'person_id' });

Session.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(Session, { foreignKey: 'user_id' });

export default User;