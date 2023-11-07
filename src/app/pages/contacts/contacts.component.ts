import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/interfaces/contact';
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

  constructor(private contactService: ContactService) {}

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
    this.contactService.getAll().subscribe((contacts) => {
      this.contacts = contacts;
    });
  }
}
