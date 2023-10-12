import { Injectable } from '@angular/core';
import { LoginInput } from '../models/inputs/login-input.model';
import { RegisterInput } from '../models/inputs/register-input.model';

@Injectable({providedIn: 'root'})
export class AuthService {
    isLogged: boolean = false;
    constructor() { }

    isLoggedIn(): boolean {
        return this.isLogged;
    }
    
    login() {
        this.isLogged = true;
        return this.isLogged;
    }

    register(registerInput: RegisterInput) {
        console.log(registerInput);
        
    }

    logout() {
        this.isLogged = false;
        return this.isLogged;
    }
}