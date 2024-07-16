import { Injectable } from "@angular/core";
import { HttpCustomer } from "../../gateway/httpCustomer";
@Injectable({
    providedIn: 'root',
  })
export class AuthService{
    private httpCustomer:HttpCustomer
    private endPoint:string = "/auth"
    constructor(httpCustomer:HttpCustomer){
        this.httpCustomer =  httpCustomer
    }

    async login(data:any){
        return await this.httpCustomer.post(`${this.endPoint}/login`,data)
    }

    async  sendPasswordRecoveryEmail(data: any){
        return await this.httpCustomer.post(`${this.endPoint}/recovery`,data);
      }
}