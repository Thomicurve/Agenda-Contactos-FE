import { Injectable } from '@angular/core';
import { LoginInput } from '../models/inputs/login-input.model';
import { RegisterInput } from '../models/inputs/register-input.model';

@Injectable({providedIn: 'root'})
export class AuthService {
    constructor() { }
    
    login(loginInput: LoginInput) {
        console.log('estoy login');
    }

    register(registerInput: RegisterInput) {
        console.log(registerInput);
        
    }

    logout() {
    }
}