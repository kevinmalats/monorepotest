import  AuthService  from "./auth_service.js";

export default class AuthController {
    constructor(){
     this.service = new AuthService()
    }

    async login(data){
      return await this.service.login(data)
    }
   
}