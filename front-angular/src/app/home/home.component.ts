import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage_service';
import moment from 'moment'
type UserSesion = {
  lastSessions:{
    begin:number,
    end:number
  }[],
  failedLoginAttempts:number,

}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  userInfo:UserSesion = {
     failedLoginAttempts:0,
     lastSessions: [{
      begin: 0,
      end: 0,
    }]
  }
  error:boolean = false
  constructor(private storageService: StorageService){

  }
  formatDate(unixtimevalue:number){
    return moment.unix(unixtimevalue).format('DD/MM/YYYY HH:mm');
  }
  ngOnInit(): void {
    
    const data_storage = this.storageService.getSession()
    this.userInfo.lastSessions = data_storage.sessions.map((item:any)=>{
      console.log(item);
      
      return {
        begin:this.formatDate(item.begin),
        end:this.formatDate(item.end)
      }
    })
    this.userInfo.failedLoginAttempts = data_storage.attempts
    console.log(this.userInfo)
  
  }

}
