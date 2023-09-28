import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const UsuarioLogueadoGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
  ) => {
    const authService = inject(AuthService);
    const logueado = authService.isLoggedIn();
    
    if(!logueado) {
      const router = inject(Router)
      router.navigate(['login'])
      return false;
    } 
    return true;
}