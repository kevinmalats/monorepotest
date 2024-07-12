import  UserService  from "./service_user.js";
export default class UserController {
    constructor(){
     this.service = new UserService()
    }

    async create(data){
      return await this.service.create(data)
    }
    async get(){
        return await this.service.get()
      }
    async getById(id){
        return await this.service.find({id})
      }
      async update(id, data){
        return await this.service.update(id,data)
      }
      async delete(id){
        return await this.service.delete({id})
      }
}