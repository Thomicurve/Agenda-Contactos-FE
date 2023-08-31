import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ContactService {
    constructor() { }
    
    getAll() {}
    getOne(id: number) {}
    create(contact: any) {}
    update(contact: any) {}
    delete(id: number) {}
}