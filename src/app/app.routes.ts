import { Routes } from '@angular/router';

import { LoginComponent } from './login';



export const routes: Routes = [
  { path: '', component: LoginComponent }, // page par défaut
  { path: 'login', component: LoginComponent }
];
