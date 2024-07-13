import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
  })
export class StorageService{
    constructor(){

    }
    setSession(data:any){
        return sessionStorage.setItem("user",JSON.stringify(data))
    }
    getSession(){
        return JSON.parse(sessionStorage.getItem("user")!)
    }
}