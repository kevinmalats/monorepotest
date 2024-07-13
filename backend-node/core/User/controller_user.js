import  UserService  from "./service_user.js";
import PersonService from "../Person/service_person.js";
import {CONSTANS_RULES} from "../../app/constans/constans.js" 
export default class UserController {
    constructor(){
     this.service = new UserService()
     this.servicePerson = new PersonService()
    }


    async create(data){
      this._validateData(data)
      const data_person = {
        firstname:data.firstname,
        lastname:data.lastname,
        age:data.age
      }
      const data_user = {
        username:data.username,
        password:data.password,
        email:this._buildEmail(data.firstname, data.lastname),
        role_id:data.role_id
      }
      const person = await this.servicePerson.create(data_person)
      data_user.person_id = person.id
      return await this.service.create(data_user)
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
        return await this.service.delete(id)
      }
      _buildEmail(name, lastname){
          const firstLetter = name.toLowerCase().slice(0,1)
          return `${firstLetter}${lastname.toLowerCase()}${CONSTANS_RULES.MAIL}`
      }
      _validateData(data){
        const signes = /[!@#$%^&*(),.?":{}|<>]/;
        if(signes.test(data.username))
           throw new Error("El username no debe contener signos")
        const has_number = /[0-9]/.test(data.username);
        if (!has_number) {
          throw new Error("El username debe de tener al menos un numero")
        }
        if (data.username.length < 8 || data.username.length > 20) {
          throw new Error("El username debe de tener minimo 8 caracteres hasta 20 maximo")
       }
        if (data.password.length < 8) {
          throw new Error("El password debe de tener minimo 8 caracteres")
        }

        
        const has_capitalika = /[A-Z]/.test(data.password);
        if (!has_capitalika) {
          throw new Error("El password debe de tener al menos una mayuscula")
        }

        if (/\s/.test(data.password)) {
          throw new Error("El password no debe de tener espacios")
        }

        const has_signe = /[!@#$%^&*(),.?":{}|<>]/.test(data.password);
        if (!has_signe) {
          throw new Error("El password debe de tener al menos un signo")
        }

        }
}