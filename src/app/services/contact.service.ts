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
    update(contactToUpdate: ContactInput): Observable<any> {
      return this.http
        .put(`${API}Contact/${contactToUpdate.id}?contactId=${contactToUpdate.id}`, contactToUpdate)
    }
    
    delete(id: number) {
      return this.http.delete(API + 'Contact/' + id);
    }
}