import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrdenModelo } from '../models/orden.model';

@Injectable({
  providedIn: 'root'
})
export class OrdenescompraService {

  private url = "http://localhost:3003/ordenescompra"

  constructor(private http: HttpClient) { }

  getOrdenesCompra(){
    return this.http.get(`${this.url}`);
  }

  crearOrdenCompra(orden:OrdenModelo){
    return this.http.post(`${this.url}`, orden);
  }
}
