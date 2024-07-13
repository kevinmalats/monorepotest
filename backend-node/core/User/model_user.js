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
User.belongsTo(Person, { foreignKey: 'person_id' });
Person.hasMany(User, { foreignKey: 'person_id' });

export default User;