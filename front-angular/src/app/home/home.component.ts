import { Component } from '@angular/core';
type UserSesion = {
  failedLoginAttempts:{
    date:number,
    time:number
  }[],
  lastSession:string,

}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  userInfo!:UserSesion
  error:boolean = false

}
