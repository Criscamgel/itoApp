import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Componentes
import { AppComponent } from './app.component';
import { ListaclientesComponent } from './components/listaclientes/listaclientes.component';
import { ListaproductosComponent } from './components/listaproductos/listaproductos.component';
import { ListaordenesComponent } from './components/listaordenes/listaordenes.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoaderComponent } from './components/shared/loader/loader.component';
import { CreaproductoComponent } from './components/creaproducto/creaproducto.component';
import { CreaclienteComponent } from './components/creacliente/creacliente.component';
import { CreaordenComponent } from './components/creaorden/creaorden.component';

//Rutas y Http
import { app_routing } from './app.routes';
import { HttpClientModule } from '@angular/common/http';

//Servicios
import { ClientesService } from './services/clientes.service';
import { ProductosService } from './services/productos.service';
import { OrdenescompraService } from './services/ordenescompra.service';

//Forms Module
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    ListaclientesComponent,
    ListaproductosComponent,
    ListaordenesComponent,
    NavbarComponent,
    LoaderComponent,
    CreaproductoComponent,
    CreaclienteComponent,
    CreaordenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    app_routing
  ],
  providers: [
    ClientesService,
    ProductosService,
    OrdenescompraService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
