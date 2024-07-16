import { Sequelize } from 'sequelize';
import sequelize from '../config/database';
import User from './model_user';
import Session from './model_session';

// Definir las asociaciones
User.hasMany(Session, { as: 'Sessions', foreignKey: 'user_id' });
Session.belongsTo(User, { as: 'User', foreignKey: 'user_id' });

const db = {
  Sequelize,
  sequelize,
  User,
  Session,
};

export default db;
