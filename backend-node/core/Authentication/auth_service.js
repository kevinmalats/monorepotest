import { TABLE_ENUM } from "../../app/constans/table_enum.js"
import Store from "../../app/gateway/store.js"
import TokenService from "../../app/middlewares/token_service.js";
import User from "./../User/model_user.js";
export default class AuthService{
    constructor(){
        this.store = new Store()
        this.tableName = TABLE_ENUM.USER;
        this.tokenService = new TokenService()
    }
      async login(data){
        try {
          const login = data.email || data.username
          const password = data.password
          const user = await this.store.auth(User, login, password)
          const user_active = {
            loged:true
          }
          delete user.password
          console.log("useroiposa",user)
          await this.store.update(User, user.id,user_active)
          const token = this.tokenService.generateToken(user);
          const dtouser =  {token,
            username:user.username,
            id:user.id
          }
          return dtouser
        } catch (error) {
          console.log("indsadad")
          throw new Error(error.message)
        }
      }
     
}