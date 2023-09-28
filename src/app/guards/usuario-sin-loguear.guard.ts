import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const UsuarioSinLoguearGuard: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ) => {
        const authService = inject(AuthService);
        const logueado = authService.isLoggedIn();
        
        if(logueado) {
          const router = inject(Router)
          router.navigate(['contacts']);
          return false;
        } 
        return true;
}