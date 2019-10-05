import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClienteModelo } from '../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private url = "http://localhost:3001/clientes"

  constructor(private http: HttpClient) { }

  getClientes(){
    return this.http.get(`${this.url}`);
  }

  crearCliente(cliente:ClienteModelo){
    return this.http.post(`${this.url}`, cliente);
  }
}
