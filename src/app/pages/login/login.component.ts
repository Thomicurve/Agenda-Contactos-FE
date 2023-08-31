import { Component, ViewChild } from '@angular/core';
import { LoginInput } from 'src/app/models/inputs/login-input.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{
  @ViewChild('loginForm') loginForm: any;
  loginData: LoginInput = new LoginInput();

  constructor(
    private authService: AuthService
  ) {

  }

  submitLogin() {
    this.loginData = this.loginForm.value;
    this.authService.login(this.loginData);    
  }
}
