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
    async get(endpoint: string, params = null) {
        try {
            // Construir la URL con los parámetros de consulta si existen
            const url = new URL(`${this.url}/${endpoint}/${params}`);
    
            const response = await fetch(url.toString());
            console.log(response)
            return await response.json();
        } catch (error) {
            return { error: error };
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

    async postBulk(endpoint: string, dataArray: any[]) {
        try {
          const requests = dataArray.map(data => {
            const options = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            };
      
            return fetch(`${this.url}/${endpoint}`, options)
              .then(response => response.json())
              .catch(error => ({ error }));
          });
      
          const responses = await Promise.all(requests);
          return responses;
        } catch (error) {
          return error;
        }
      }
      
}