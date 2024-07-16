import express from 'express';
import  AuthController  from './auth_controller.js';
 class AuthRouter{
    constructor(){
        this.controller = new AuthController()
        this.router = express.Router();
        this.initRoutes()
    }

    initRoutes() {
        this.router.post('/login', this.login.bind(this));
        this.router.post('/recovery', this.recovery.bind(this));
    }
    async login(req, res) {
        console.log("creando")
        const userData = req.body;
        try {
            const user = await this.controller.login(userData)
            res.status(201).json(user);
        } catch (error) {
            console.log(error.message)
            res.status(500).json({ error:error.message});
        }
    }
    async recovery(req, res) {
        console.log("recoverydata")
        const data = req.body;
        console.log("recoverydata", data)
        try {
            const user = await this.controller.recovery(data)
            res.status(201).json(user);
        } catch (error) {
            console.log(error.message)
            res.status(500).json({ error:error.message});
        }
    }



}
export default AuthRouter