import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth_service';


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
    private passwordRecoveryService: AuthService
  ) {
    this.passwordRecoveryForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {}

  get f() {
    return this.passwordRecoveryForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.passwordRecoveryForm.invalid) {
      return;
    }

    const email = this.passwordRecoveryForm.value.email;
    this.passwordRecoveryService.sendPasswordRecoveryEmail(email).then((response)=>{
      console.log(response)
    })
  
  }
}
