import { Component, OnInit } from '@angular/core';
import { OrdenModelo } from 'src/app/models/orden.model';
import { ClientesService } from 'src/app/services/clientes.service';
import { ProductosService } from 'src/app/services/productos.service';
import { NgForm } from '@angular/forms';
import { OrdenescompraService } from 'src/app/services/ordenescompra.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creaorden',
  templateUrl: './creaorden.component.html',
  styleUrls: ['./creaorden.component.css']
})
export class CreaordenComponent implements OnInit {
  
  clientes:any[] = [];
  productos:any[] = [];
  productosSel:any[] = [{id:'', cantidad:'', precio:''}];
  orden = new OrdenModelo;

  constructor(private _clienteservice:ClientesService, private _productoservice:ProductosService, private _ordenesservice:OrdenescompraService, private router:Router) { 
    this.inicioCargaData();
  }

  guardar(form: NgForm){
    this._ordenesservice.crearOrdenCompra(this.orden)
    .subscribe(res => {
      console.log(res);      
    })

    Swal.fire({
      title: "Correcto!",
      text: "Orden de compra creado Correctamente!",
      type: "success"
    })
      setTimeout(() => {
        this.router.navigateByUrl('/listaordenes');
      }, 1500);

  }

  inicioCargaData(){
    this._clienteservice.getClientes().subscribe((data:any)=>{
      this.clientes = data;
    })
    this._productoservice.getProductos().subscribe((data:any)=>{
      this.productos = data;
    })
  }

  ngOnInit() {
  }

}
