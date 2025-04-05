import { Routes } from '@angular/router';
import { VistaprincipalComponent } from './vistaprincipal/vistaprincipal.component';
import { LibreriaComponent } from './libreria/libreria.component';

export const routes: Routes = [
    {path:'', component:VistaprincipalComponent, title: "vista principal"},
    {path:'libreria', component:LibreriaComponent, title: "pedir libro"}
];
