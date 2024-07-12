import { TABLE_ENUM } from "../../app/constans/table_enum.js"
import Store from "../../app/gateway/store.js"
import User from "./model_user.js";
export default class UserService{
    constructor(){
        this.store = new Store()
        this.tableName = TABLE_ENUM.USER;
    }
    async create(data){
      try {
        console.log("tablename",this.tableName)
        const result = await this.store.save(this.tableName, data)
        return result
      } catch (error) {
        console.log(error)
      }
    }
    async get(){
        try {
          const result = await this.store.read(User)
          console.log("result",result)
          return result
        } catch (error) {
          console.log(error)
        }
      }
      async find(query){
        try {
          const result = await this.store.read(User, query)
          console.log("result",result)
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