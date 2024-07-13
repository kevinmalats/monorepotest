import sequelize  from "../db/db_connection.js";
import { DataTypes } from 'sequelize';
import { Op } from 'sequelize';

export default class Store {
    constructor(){
        this.sequelize = sequelize
    }
    async save(tableName,data){
        try {
            const model = this.getModel(tableName, data);
            const result = await model.create(data);
            console.log(`Datos insertados en la tabla ${tableName}:`, result);
            return result;
        } catch (error) {
            console.error('Error al guardar los datos:', error);
        }
   
    }
    async read_all(model, query = {}) {
        try {
            const result = await model.findAll({ query });
            console.log(`Datos leídos de la consulta:`, result);
            return result;
        } catch (error) {
            console.error('Error al leer los datos:', error);
        }
    }

    async read_only(model, query = {}) {
        try {
            const result = await model.findAll({ where: query });
            console.log(`Datos leídos de la consulta:`, result);
            return result;
        } catch (error) {
            console.error('Error al leer los datos:', error);
        }
    }
    async auth(model, login,password) {
        try {
            const result = await model.findOne({
                where: {
                    [Op.or]: [
                        { username: login },
                        { email: login },
                    ],
                    
                },
            });
            console.log("residd", result)
            if(!result || result.password !== password || result.loged)       
                throw new Error('Credenciales invalidas')
            console.log("que pas",result)
            return result;
        } catch (error) {
            console.error('Error al leer los datos:', error);
            throw new Error(error.message)
        }
    }
    async update(model, id, data) {
        try {
            console.log("findByPk", id)
            const result = await model.findByPk(id);
            console.log("resultado",result)
            if (result){
                 await model.update(data, {where:{id}})
                return result;
            }else{
             return "usuario no encontrado"
            }
           
           
        } catch (error) {
            console.error('Error al leer los datos:', error);
            return error
        }
    }
    async delete(model, id) {
        try {
            const result = await model.findByPk(id);
            if(result){
                await model.destroy( {where:{id}});
                return "usuario eliminado correctamente"
            }else{
                return "usuario no ha sido encontrado"
            }
        } catch (error) {
            console.error('Error al leer los datos:', error);
        }
    }
    getModel(tableName, data) {
        const attributes = {};
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                attributes[key] = {
                    type: DataTypes.STRING, 
                    allowNull: true,
                };
            }
        }

        return this.sequelize.define(tableName, attributes, {
            freezeTableName: true,
            timestamps: false, 
        });
    }
}