import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact';
import { HttpClient } from '@angular/common/http';
import { API } from '../constants/constants';
import { Observable } from 'rxjs';
import { ContactInput } from '../models/inputs/contact-input.model';

@Injectable({providedIn: 'root'})
export class ContactService {
    contacts: Contact[] = [];
    get LastId(): number {
      return this.contacts[this.contacts.length - 1].id;
    }

    constructor(private http: HttpClient) { }

    getAll(): Observable<Contact[]> {
        return this.http.get<Contact[]>(API + 'Contact');
    }

    getOne(id: number): Observable<Contact[]> {
      return this.http.get<Contact[]>(API + 'Contact/' + id);
    }

    create(contact: ContactInput): Observable<any> {
      return this.http.post(API + 'Contact', contact);
    }
    update(contactToUpdate: ContactInput): boolean {
      const contactExistente = this.contacts.find(contact => contact.id === contactToUpdate.id);
      if (contactExistente) {
        // contactExistente.firstName = contactToUpdate.firstName;
        // contactExistente.lastName = contactToUpdate.lastName;
        // contactExistente.address = contactToUpdate.address;
        // contactExistente.email = contactToUpdate.email;
        // contactExistente.image = contactToUpdate.image;
        // contactExistente.phoneNumber = contactToUpdate.phoneNumber;
        // contactExistente.company = contactToUpdate.company;
        return true;
      } else {
        return false;
      }
      
    }
    
    delete(id: number) {
      return this.contacts = this.contacts.filter(contact => contact.id !== id);
    }
}