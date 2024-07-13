import { Injectable } from "@angular/core";
import { environment } from "../app/environment/environment";
@Injectable({
    providedIn: 'root',
  })
export class HttpCustomer{
    private url:string
    constructor(){
         this.url = environment.url
    }
    async get(endpoint:string, params = null){
        try {
            const response = await fetch(`${this.url}/${endpoint}`)
            return await response.json()
        } catch (error) {
            return error
        }
    }

    async post(endpoint:string, data:any){
        try {
            const options = { 
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            }
            const response = await fetch(`${this.url}/${endpoint}`,options)
            return await response.json()
        } catch (error) {
            return error
        }
    }
}