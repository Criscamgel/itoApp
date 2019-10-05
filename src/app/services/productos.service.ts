import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoModel } from '../models/producto.model';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private url = "http://localhost:3002/productos"

  constructor(private http: HttpClient) { }

  getProductos(){
    return this.http.get(`${this.url}`);
  }

  crearProducto(producto:ProductoModel){
    return this.http.post(`${this.url}`, producto)
  }
}
