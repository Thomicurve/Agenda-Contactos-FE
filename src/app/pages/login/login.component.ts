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

  async submitLogin() {
    const loginRes = await this.authService.login(this.loginForm.value);    

    if(loginRes) {
      this.router.navigate(['/contacts']);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error al iniciar sesión',
      })
    }
  }
}
