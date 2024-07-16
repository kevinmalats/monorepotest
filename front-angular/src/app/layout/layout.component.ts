import { Component } from '@angular/core';
import { StorageService } from '../services/storage_service';
import { AuthService } from '../services/auth_service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  constructor(private route:Router, private storage:StorageService, private authService:AuthService){}
  logout(){
    const {id} = this.storage.getSession()

    console.log(id)
    this.authService.logout(id).then((response)=>{
      console.log(response)
    
        //this.storage.clearSession()
        this.route.navigateByUrl("auth")
    })   
  }

}
