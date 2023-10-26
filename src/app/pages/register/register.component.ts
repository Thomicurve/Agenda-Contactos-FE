import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {

  constructor(private authService: AuthService, private router: Router) {}
  @ViewChild('registerForm') registerForm!: NgForm;

  async registerUser() {
    let result = await this.authService.register(this.registerForm.value);
    if(result) {
      Swal.fire({
        title: 'Registro exitoso',
        timer: 2000,
        showConfirmButton: false,
        icon: "success",
        toast: true,
        position: 'bottom'
      })
      this.router.navigate(['login']);
    } else {
      Swal.fire({
        title: 'Error en el registro',
        icon: "error",
      })
    }
  }
}
