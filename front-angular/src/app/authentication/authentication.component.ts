import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth_service';
import { StorageService } from '../services/storage_service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css'
})
export class AuthenticationComponent {
    
  constructor(private fb: FormBuilder, 
    private authService:AuthService,
    private storageService:StorageService, private router: Router ){
    this.createForm()
  }
  loginForm!: FormGroup;
  createForm() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(8)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  login() {
    if (this.loginForm.valid) {
      console.log('Datos de inicio de sesión:', this.loginForm.value);
      this.authService.login(this.loginForm.value).then((response)=>{
        console.log(response)
        if(response.token){
          this.storageService.setSession(response)
          this.goToHome()
        }else{
          alert(response.error)
        }
      })
      
    }

  }
  goToHome(){
    this.router.navigate(["home"])
  }
}