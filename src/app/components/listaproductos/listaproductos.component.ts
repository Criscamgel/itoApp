import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-listaproductos',
  templateUrl: './listaproductos.component.html',
  styleUrls: ['./listaproductos.component.css']
})
export class ListaproductosComponent implements OnInit {

  productos:any[] = [];
  loader:boolean;

  constructor(private _productosservice:ProductosService) {
    this.getProductos();
  }

  getProductos(){
    this.loader = true;
    setTimeout(() => {
      this._productosservice.getProductos().subscribe((data:any) => {
        this.productos = data;
        this.loader = false;
      })  
    }, 1000);
        
    
  }

  ngOnInit() {
  }

}
