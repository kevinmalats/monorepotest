import { Sequelize } from 'sequelize';
import { CONFIG } from '../constans/constans_db.js';

const sequelize = new Sequelize(CONFIG.connection, {
    dialect: 'postgres',
    logging: false,
});

const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('La conexión a la base de datos se ha establecido correctamente.');
    } catch (error) {
        console.error('No se pudo conectar a la base de datos:', error);
    }
};

testConnection();

export default sequelize;
