import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Contact } from 'src/app/interfaces/contact';
import { ContactService } from 'src/app/services/contact.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-contact-modal',
  templateUrl: './add-contact-modal.component.html',
  imports: [FormsModule, CommonModule],
  styleUrls: ['./add-contact-modal.component.scss'],
  standalone: true
})
export class AddContactModalComponent {
  @Output() cerrar = new EventEmitter();

  nuevoContacto:Contact = {
    id: 0,
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    imageUrl: '',
    phoneNumber: '',
    company: ''
  }

  constructor(private contactService: ContactService) {}

  async agregarContacto(){
    const res = await this.contactService.create(this.nuevoContacto);
    if(res){
      this.cerrar.emit();
      Swal.fire({
        title: 'Contacto agregado',
        timer: 2000,
        showConfirmButton: false,
        icon: "success",
        toast: true,
        position: 'bottom'
      })
    } else {
      this.cerrar.emit();
      Swal.fire({
        title: 'Error agregando contacto',
        icon: "error",
      })
    }
  }
  
}
