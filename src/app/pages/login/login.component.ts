import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit{
  @ViewChild('loginForm') loginForm: any;
  
  ngAfterViewInit(): void {
    console.log(this.loginForm);
    
  }
}
