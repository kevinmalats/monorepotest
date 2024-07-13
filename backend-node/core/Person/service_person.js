import { TABLE_ENUM } from "../../app/constans/table_enum.js"
import Store from "../../app/gateway/store.js"
import Person from "./model_person.js";
export default class PersonService{
    constructor(){
        this.store = new Store()
        this.tableName = TABLE_ENUM.PERSON;
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
          const result = await this.store.read_only(Person)
          console.log("result",result)
          return result
        } catch (error) {
          console.log(error)
        }
      }
      async find(query){
        try {
          const result = await this.store.read_only(Person, query)
          console.log("result",result)
          return result
        } catch (error) {
          console.log(error)
        }
      }
      async update(id, data){
        try {
            console.log("data actualizar",id)
          const result = await this.store.update(Person, id, data)
          console.log("result",result)
          return result
        } catch (error) {
          console.log(error)
        }
      }
      async delete(id){
        try {
          const result = await this.store.delete(Person, id)
          console.log("result",result)
          return result
        } catch (error) {
          console.log(error)
        }
      }
}