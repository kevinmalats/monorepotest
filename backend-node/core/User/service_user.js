import { TABLE_ENUM } from "../../app/constans/table_enum.js"
import Store from "../../app/gateway/store.js"
import User from "./model_user.js";
import Person from "../Person/model_person.js";
import Session from "./model_session.js";
export default class UserService{
    constructor(){
        this.store = new Store()
        this.tableName = TABLE_ENUM.USER;
    }
    async verifyEmail(email){
      try {
        const query = {email}
        const result = await this.store.read_only(User, query)
        console.log("verify", result)
        console.log("verifyresult", result.length !== 0)
        return result.length !== 0
        
      } catch (error) {
        
      }
    }
    
    async create(data){
      
      console.log("datausuaroi", data)
      try {
        const verify = await this.verifyEmail(data.email)
        if(verify){
          const [email, domain] = data.email.split("@")
          console.log("email",email)
          const randomNumber = Math.floor(Math.random() * (100 - 0+ 1)) + 0;
          data.email = `${email}${randomNumber}@${domain}`
          return await this.create(data)
        }
        else{       
        const result = await this.store.save(this.tableName, data)
        return result
      }
      } catch (error) {
        console.log(error)
      }
    }
    async get(){
        try {
          const query = {
            include: [
              { model: Person, as:'Person' }
           ]
          }
          const result = await this.store.read_all(User, query)
          console.log("resultado",result)
          return result
        } catch (error) {
          console.log(error)
        }
      }
      async find(query){
        try {
          const result = await this.store.read_only(User, query)
          console.log("result",result)
          return result
        } catch (error) {
          console.log(error)
        }
      }
      async consult(id){
        try {
          console.log("idddd",id)
          const query = {
            where: { userId: id },
            include: [
              { model: User, as:'User' }
           ]
          }
          const result = await this.store.read_all(Session, query)
          console.log("resuktadors",result)
          return result
        } catch (error) {
          console.log(error)
        }
      }
      async update(id, data){
        try {
            console.log("data actualizar",id)
          const result = await this.store.update(User, id, data)
          console.log("result",result)
          return result
        } catch (error) {
          console.log(error)
        }
      }
      async delete(id){
        try {
          const result = await this.store.delete(User, id)
          console.log("result",result)
          return result
        } catch (error) {
          console.log(error)
        }
      }
}