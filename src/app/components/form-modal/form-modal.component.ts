import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Contact } from 'src/app/interfaces/contact';
import { ContactInput } from 'src/app/models/inputs/contact-input.model';
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
  @Input() contactToEdit: Contact;

  contact = new ContactInput();

  constructor(private contactService: ContactService) {
    if(this.contactToEdit) {
      this.mapContactToContactInput();
    }
  }
  

  enviarFormulario() {
    this.contact.number = this.contact.number.toString();
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
    this.contactService.create(this.contact).subscribe(res => {
      if(res) {
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
    })
  }

  private mapContactToContactInput() {
    this.contact.firstName = this.contactToEdit.name;
    this.contact.lastName = this.contactToEdit.lastName;
    this.contact.email = this.contactToEdit.email;
    this.contact.number = this.contactToEdit.number;
    this.contact.company = this.contactToEdit.company;
    this.contact.image = this.contactToEdit.image;
    this.contact.id = this.contactToEdit.id;
    this.contact.address = this.contactToEdit.address;
  }
}
