import { TABLE_ENUM } from "../../app/constans/table_enum.js"
import Store from "../../app/gateway/store.js"
import TokenService from "../../app/middlewares/token_service.js";
import Session from "../User/model_session.js";
import User from "./../User/model_user.js";

export default class AuthService{
    constructor(){
        this.store = new Store()
        this.tableName = TABLE_ENUM.USER;
        this.tokenService = new TokenService()
    }

    async logout(id){
      try {
        const currentTime = Math.floor(Date.now() / 1000);
        await this.store.update(User,id,{loged:false}) 
        const session = await this.store.read_only(Session,{user_id:id})
        console.log("sessionsnsn",session[0].id)
        await this.store.update(Session,session[0].id,{end:currentTime})
        console.log("result",session[0].user_id)
        return session
      } catch (error) {
        
      }
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
        
          await this.store.update(User, user.id,user_active)
          const currentTime = Math.floor(Date.now() / 1000);
          const token = this.tokenService.generateToken(user);
          const data_session = {
            begin: currentTime,
            end: 0,
            token,
            state: 'success',
            user_id:user.id
          }
          
          const session = await this.store.save(TABLE_ENUM.SESSION, data_session)
          //console.log("sessionincia", session)
         
          const dtouser =  {
            token,
            username:user.username,
            id:user.id,
            attempts:user.attempts,
            date_sesion:{
              begin:session.begin,
              end:session.end
            }
          }
          return dtouser
        } catch (error) {
          console.log("indsadad",error)
          throw new Error(error.message)
        }
      }
     
}