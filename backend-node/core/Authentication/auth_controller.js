import generateAlphanumericCode from "../../app/util/utili.js";
import EmailService from "../../app/middlewares/email.js";
import UserService from "../User/service_user.js";
import  AuthService  from "./auth_service.js";

export default class AuthController {
    constructor(){
     this.service = new AuthService()
     this.userService = new UserService()
    }

    async login(data){
      return await this.service.login(data)
    }
    async logout(id){
      return await this.service.logout(id)
    }

    async recovery(data){
      const { email, password } = data
      const isExistEmail =   await this.userService.verifyEmail(email)
      console.log("emaildata", isExistEmail)
      if(!isExistEmail)
        throw new Error("Este correo no se encuentra en nuestros registros")

      const response_user= await this.userService.find({email})
      console.log("founduser", response_user)
      const id = response_user[0].id
      const result = await this.userService.update(id, {password})
      const dto = {id:result.id}
      return dto

      
    }
   
}