import { Component, OnInit } from '@angular/core';
import { OrdenescompraService } from 'src/app/services/ordenescompra.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-listaordenes',
  templateUrl: './listaordenes.component.html',
  styleUrls: ['./listaordenes.component.css']
})
export class ListaordenesComponent implements OnInit {

  ordenes:any[] = [];
  loader:any;
  total:any = 0;

  constructor(private _ordenesservice:OrdenescompraService) { 
    this.getOrdenes();
  }

    getOrdenes(){
      this.loader = true;
      setTimeout(() => {
      this._ordenesservice.getOrdenesCompra().subscribe((data:any) => {
        this.ordenes = data;
        let precioProducto;        

        data.map(element => {
            let index = 0;           
            precioProducto = element.productos[index].cantidad * element.productos[index].precio;
            this.total += precioProducto;
            index++;      
        });
      })
      this.loader = false;
      }, 1000);
    }

  ngOnInit() {
  }

}
