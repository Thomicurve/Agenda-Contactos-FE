import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginInput } from 'src/app/models/inputs/login-input.model';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent{
  @ViewChild('loginForm') loginForm: any;
  loginData: LoginInput = new LoginInput();

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  submitLogin() {
    this.loginData = this.loginForm.value;
    const loginRes = this.authService.login();    
    if(loginRes) {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Login successful',
      })
      this.router.navigate(['/contacts']);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Email or password incorrect',
      })
    }
  }
}
