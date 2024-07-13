import express from 'express';
import  PersonController  from './controller_person.js';
 class PersonRouter{
    constructor(){
        this.controller = new PersonController()
        this.router = express.Router();
        this.initRoutes()
    }

    initRoutes() {
        this.router.post('/', this.create.bind(this));
        this.router.get('/', this.get.bind(this));
        this.router.get('/:id', this.getById.bind(this));
        this.router.put('/:id', this.update.bind(this));
        this.router.delete('/:id', this.delete.bind(this));
    }
    async create(req, res) {
        console.log("creando")
        const userData = req.body;
        try {
            const user = await this.controller.create(userData)
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({ error: 'Error al crear el Persona' });
        }
    }

    async get(req, res) {
        console.log("req")
        try {
            const users = await this.controller.get();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener los Personas' });
        }
    }

    async getById(req, res) {
        const { id } = req.params;
        try {
            const user = await this.controller.getById( id );
            if (user.length) {
                res.status(200).json(user[0]);
            } else {
                res.status(404).json({ error: 'Persona no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener el Persona' });
        }
    }

    async update(req, res) {
        const { id } = req.params;
        const userData = req.body;
        try {
            const result = await this.controller.update( id, userData);
            return res.status(500).json({result });
        } catch (error) {
            res.status(500).json({ error: 'Error al actualizar el Persona' });
        }
    }

    async delete(req, res) {
        const { id } = req.params;
        try {
            const result = await this.controller.delete( id);
            if (result) {
                res.status(200).json({ message: 'Persona eliminado correctamente' });
            } else {
                res.status(404).json({ error: 'Persona no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Error al eliminar el Persona' });
        }
    }

}
export default PersonRouter