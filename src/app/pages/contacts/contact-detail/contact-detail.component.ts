import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/interfaces/contact';
import { ContactService } from 'src/app/services/contact.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {
  
  contact!: Contact;
  constructor(
    private route: ActivatedRoute, 
    private contactService: ContactService,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(!id) return;

    this.contact = this.contactService.getOne(parseInt(id));
  }

  onDeleteUser() {
    Swal.fire({
      title: `Desea eliminar el contacto de ${this.contact.firstName} ${this.contact.lastName}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borrar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        const result = this.contactService.delete(this.contact.id);

        if(!result) console.error('Error al eliminar el contacto');
        else {
          Swal.fire(
            'Contacto Eliminado!',
            'Tu contacto ha sido eliminado',
            'success'
          );
          this.router.navigate(['/contacts']);
        }
        
      }
    })
  }

  onClickBack() {
    this.router.navigate(['/contacts']);
  }




}
