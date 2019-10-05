import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { NgForm } from '@angular/forms';
import { ProductoModel } from 'src/app/models/producto.model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creaproducto',
  templateUrl: './creaproducto.component.html',
  styleUrls: ['./creaproducto.component.css']
})
export class CreaproductoComponent implements OnInit {

  producto = new ProductoModel;

  constructor(private _productoservice:ProductosService, private router:Router) { 
    
  }

  guardar(form: NgForm){
    this._productoservice.crearProducto(this.producto)
    .subscribe(res=> {
      console.log(res);            
    });
    
    Swal.fire({
      title: "Correcto!",
      text: "Producto creado Correctamente!",
      type: "success"
    })
      setTimeout(() => {
        this.router.navigateByUrl('/listaclientes');
      }, 1500);
  }

  ngOnInit() {
  }

}
