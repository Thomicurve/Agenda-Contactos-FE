import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const userToken = localStorage.getItem('token');

    req.headers.set('Content-Type', 'application/json');
    if(userToken) {
        const authReq = req.clone({headers: req.headers.set('Authorization', `Bearer ${userToken}`)});
        // send the newly created request
        return next.handle(authReq);
    }

    return next.handle(req);
  }
}