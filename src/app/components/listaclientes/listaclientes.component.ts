import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-listaclientes',
  templateUrl: './listaclientes.component.html',
  styleUrls: ['./listaclientes.component.css']
})
export class ListaclientesComponent implements OnInit {

  clientes:any[] = [];
  loader:any = true;

  constructor(private _clientesservice:ClientesService) { 
    this.getClientes();
  }

  getClientes(){
    this.loader = true;
    setTimeout(() => {
    this._clientesservice.getClientes().subscribe((data:any) => {
      this.clientes = data;
      this.loader = false;
    })
    }, 1000);
    
  }

  ngOnInit() {
  }

}
