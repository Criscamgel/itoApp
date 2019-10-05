import { RouterModule, Routes } from '@angular/router';
import { ListaclientesComponent } from './components/listaclientes/listaclientes.component';
import { ListaproductosComponent } from './components/listaproductos/listaproductos.component';
import { ListaordenesComponent } from './components/listaordenes/listaordenes.component';
import { CreaclienteComponent } from './components/creacliente/creacliente.component';
import { CreaproductoComponent } from './components/creaproducto/creaproducto.component';
import { CreaordenComponent } from './components/creaorden/creaorden.component';

const ROUTES: Routes = [
    {path: 'listaclientes', component: ListaclientesComponent},
    {path: 'listaproductos', component: ListaproductosComponent},
    {path: 'listaordenes', component: ListaordenesComponent},
    {path: 'creacliente', component: CreaclienteComponent},
    {path: 'creaproducto', component: CreaproductoComponent},
    {path: 'creaorden', component: CreaordenComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'listaclientes'}
];

export const app_routing = RouterModule.forRoot(ROUTES);