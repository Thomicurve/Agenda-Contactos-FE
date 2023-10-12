import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioLogueadoGuard } from './guards/usuario-logueado.guard';
import { UsuarioSinLoguearGuard } from './guards/usuario-sin-loguear.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'contacts',
    pathMatch:'full',
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
    canActivate: [UsuarioSinLoguearGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule),
    canActivate: [UsuarioSinLoguearGuard]
  },
  {
    path: 'contacts',
    canActivate: [UsuarioLogueadoGuard],
    loadChildren: () => import('./pages/contacts/contacts.module').then(m => m.ContactsModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/error/error-routing.module').then(m => m.ErrorRoutingModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
