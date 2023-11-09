import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { Contact } from 'src/app/interfaces/contact';
import { AuthService } from 'src/app/services/auth.service';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  contacts: Contact[] = [];
  showAddContact: boolean = false;
  showDialog: boolean = false;
  loading: boolean = true;

  constructor(
    private contactService: ContactService, 
    private router: Router,
    private authService: AuthService) {}

  ngOnInit(): void {
    this.getContacts();
  }

  toggleDialog() {
    this.showDialog = !this.showDialog;
    if(!this.showDialog) {
      this.getContacts();
    }
  }

  onShowContact() {
    this.showAddContact = !this.showAddContact;
  }

  private getContacts() {
    this.contactService.getAll()
    .pipe(delay(1000))
    .subscribe({
      next: (contacts) => {
        this.contacts = contacts;
      },
      error: (error: HttpErrorResponse) => {
        if(error.status === 401) {
          this.authService.logout();
          this.router.navigate(['/login']);
        }
      },
      complete: () => this.loading = false
    });
  }
}
