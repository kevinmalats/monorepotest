import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth_service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {

  passwordRecoveryForm: FormGroup;
  submitted = false;
  message: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private passwordRecoveryService: AuthService,
    private router: Router 
  ) {
    this.passwordRecoveryForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmpassword: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit(): void {}

  get f() {
    return this.passwordRecoveryForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
console.log( this.passwordRecoveryForm.value.password !== this.passwordRecoveryForm.value.confirmpassword)
    if (this.passwordRecoveryForm.invalid || 
      this.passwordRecoveryForm.value.password !== this.passwordRecoveryForm.value.confirmpassword) {
      return;
    }

    const data = this.passwordRecoveryForm.value;
    this.passwordRecoveryService.sendPasswordRecoveryEmail(data).then((response)=>{
      console.log(response)
      if(response.error){
        alert(response.error)
      }else
      this.router.navigate(["auth"])
    })
  
  }
}
