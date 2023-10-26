import { Injectable } from '@angular/core';
import { LoginInput } from '../models/inputs/login-input.model';
import { RegisterInput } from '../models/inputs/register-input.model';
import { API } from '../constants/constants';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {
    private token = new BehaviorSubject<string | null>(null);
    token$ = this.token.asObservable();

    constructor(private router: Router) { 
        this.token.next(localStorage.getItem('token'));
    }

    isLoggedIn(): boolean {
        return this.token.value !== null;
    }
    
    async login(loginForm: LoginInput): Promise<boolean> {

        const res = await fetch(API + 'authentication/authenticate',
        {
            method: 'POST',
            body: JSON.stringify(loginForm),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if(!res.ok) return false;
        
        const token = await res.text();
        localStorage.setItem('token', token);
        this.token.next(token);
        return true;
    }

    async register(registerInput: RegisterInput) {
        try {
            const res = await fetch(API + 'User', {
                method: 'POST',
                body: JSON.stringify(registerInput),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            await res.json();
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    logout() {
        this.token.next(null);
        localStorage.removeItem('token');
        this.router.navigate(['login']);
    }
}