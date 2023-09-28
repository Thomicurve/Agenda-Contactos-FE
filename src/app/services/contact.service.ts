import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact';

@Injectable({providedIn: 'root'})
export class ContactService {
    contacts: Contact[] = [
        {
            id: 1,
            firstName: 'Juan',
            lastName: 'Perez',
            address: 'Calle 123',
            imageUrl: "https://portal.bilardo.gov.tr/assets/pages/media/profile/people19.png",
            company: 'Google',
            email: 'jperez@gmail.com',
            phoneNumber: '1234567890'
          },
          {
            id: 2,
            firstName: 'Maria',
            lastName: 'Gomez',
            address: 'Calle 456',
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ0OTAqC4xVoXNE8eLYie4DDjlLgZZrwj2cB64su1Z9f5YuarNKHYM8WoOrdFxTqoYjVE&usqp=CAU",
            company: 'Netflix',
            email: 'mgomze@gmail.com',
            phoneNumber: '1234567890'
          },
          {
            id: 3,
            firstName: 'Pedro',
            lastName: 'Garcia',
            address: 'Calle 789',
            imageUrl: "https://www.logiconme.com/assets/img-temp/400x450/img5.jpg",
            company: 'Mercado Libre',
            email: 'pgarcia@gmail.com',
            phoneNumber: '1234567890'
          },
          {
            id: 5,
            firstName: 'Julian',
            lastName: 'Alvarez',
            address: 'Calle 231',
            imageUrl: "",
            company: 'Mercado Libre',
            email: 'jalvarez@gmail.com',
            phoneNumber: '1234567890'
          },]

    getAll(): Contact[] {
        return this.contacts;
    }
    getOne(id: number): Contact {
        const contactFound = this.contacts.find(contact => contact.id === id);
        if (contactFound) {
            return contactFound;
        } else {
            throw new Error('Contact not found');
        }
    }
    create(contact: Contact): boolean {
        this.contacts.push(contact);
        return true;
    }
    update(contactToUpdate: Contact): boolean {
      const contactExistente = this.contacts.find(contact => contact.id === contactToUpdate.id);
      if (contactExistente) {
        contactExistente.firstName = contactToUpdate.firstName;
        contactExistente.lastName = contactToUpdate.lastName;
        contactExistente.address = contactToUpdate.address;
        contactExistente.email = contactToUpdate.email;
        contactExistente.imageUrl = contactToUpdate.imageUrl;
        contactExistente.phoneNumber = contactToUpdate.phoneNumber;
        contactExistente.company = contactToUpdate.company;
        return true;
      } else {
        return false;
      }
      
    }
    
    delete(id: number) {
      return this.contacts = this.contacts.filter(contact => contact.id !== id);
    }
}