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
    this.contacts = this.contactService.getAll();
  }

  toggleDialog() {
    this.showDialog = !this.showDialog;
  }

  onShowContact() {
    this.showAddContact = !this.showAddContact;
  }
}
