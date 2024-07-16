import { Injectable } from "@angular/core";
import { HttpCustomer } from "../../gateway/httpCustomer";
@Injectable({
    providedIn: 'root',
  })
export class UserService{
    private httpCustomer:HttpCustomer
    private endPoint:string = "/user"
    constructor(httpCustomer:HttpCustomer){
        this.httpCustomer =  httpCustomer
    }

    async saveUsers(data:any){
        return await this.httpCustomer.postBulk(`${this.endPoint}`,data)
    }

}