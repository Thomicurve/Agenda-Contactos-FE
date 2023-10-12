import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Contact } from 'src/app/interfaces/contact';
import { ContactService } from 'src/app/services/contact.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'form-modal-modal',
  templateUrl: './form-modal.component.html',
  imports: [FormsModule, CommonModule],
  styleUrls: ['./form-modal.component.scss'],
  standalone: true
})
export class FormModalComponent {
  @Output() cerrar = new EventEmitter();
  @Input() contact: Contact = {
    id: 0,
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    imageUrl: '',
    phoneNumber: '',
    company: ''
  };

  constructor(private contactService: ContactService) {}
  

  enviarFormulario() {
    if(this.contact.id){
      this.editarContacto();
    } else {
      this.agregarContacto();
    }
  }

  private async editarContacto() {
    const res = await this.contactService.update(this.contact);
    if(res){
      this.cerrar.emit();
      Swal.fire({
        title: 'Contacto actualizado',
        timer: 2000,
        showConfirmButton: false,
        icon: "success",
        toast: true,
        position: 'bottom'
      })
    } else {
      this.cerrar.emit();
      Swal.fire({
        title: 'Error actualizando contacto',
        icon: "error",
      })
    }
  }

  private async agregarContacto(){
    this.contact.id = this.contactService.LastId + 1;
    const res = await this.contactService.create(this.contact);
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
