import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
    // Validators.required -> dato requerido
  });
  constructor(private formBuilder: FormBuilder, private router: Router) {

  }

  iniciarSesion() {
    if (this.loginForm.valid) {
      if (this.loginForm.controls["email"].value == "jk@gmail.com" && this.loginForm.controls["password"].value == "123AF@") {
        this.router.navigateByUrl("/dashboard-admin")
      } 
      else if (this.loginForm.controls["email"].value == "prueba@gmail.com" && this.loginForm.controls["password"].value == "1234a") {
        this.router.navigateByUrl("/dashboard-user")
      }
      else {

      }
    }
    else {
      this.loginForm.markAllAsTouched();
    }
  }

  get email() {
    return this.loginForm.controls["email"];
  }

  get password() {
    return this.loginForm.controls["password"];
  }
}

