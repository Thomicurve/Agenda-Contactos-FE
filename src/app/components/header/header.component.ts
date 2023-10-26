import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  userLogged: boolean = false;
  
  constructor(private authService: AuthService) {
    this.authService.token$.subscribe((token) => {
      this.userLogged = token ? true : false;
    });
  }

  logout() {
    this.authService.logout();
  }
}
