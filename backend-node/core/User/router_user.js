import express from 'express';
import  UserController  from './controller_user.js';
 class UserRouter{
    constructor(){
        this.controller = new UserController()
        this.router = express.Router();
        this.initRoutes()
    }

    initRoutes() {
        this.router.post('/', this.createUser.bind(this));
        this.router.get('/', this.getUsers.bind(this));
        this.router.get('/:id', this.getUserById.bind(this));
        this.router.put('/:id', this.updateUser.bind(this));
        this.router.delete('/:id', this.deleteUser.bind(this));
    }
    async createUser(req, res) {
        console.log("creando")
        const userData = req.body;
        try {
            const user = await this.controller.create(userData)
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({ error: 'Error al crear el usuario' });
        }
    }

    async getUsers(req, res) {
        console.log("req")
        try {
            const users = await this.controller.get();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener los usuarios' });
        }
    }

    async getUserById(req, res) {
        const { id } = req.params;
        try {
            const user = await this.controller.getById( id );
            if (user.length) {
                res.status(200).json(user[0]);
            } else {
                res.status(404).json({ error: 'Usuario no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener el usuario' });
        }
    }

    async updateUser(req, res) {
        const { id } = req.params;
        const userData = req.body;
        try {
            const result = await this.controller.update( id, userData);
            return res.status(500).json({result });
        } catch (error) {
            res.status(500).json({ error: 'Error al actualizar el usuario' });
        }
    }

    async deleteUser(req, res) {
        const { id } = req.params;
        try {
            const result = await this.controller.delete( id);
            if (result) {
                res.status(200).json({ message: 'Usuario eliminado correctamente' });
            } else {
                res.status(404).json({ error: 'Usuario no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Error al eliminar el usuario' });
        }
    }

}
export default UserRouter