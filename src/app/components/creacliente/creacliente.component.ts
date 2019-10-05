import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { ClienteModelo } from 'src/app/models/cliente.model';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creacliente',
  templateUrl: './creacliente.component.html',
  styleUrls: ['./creacliente.component.css']
})
export class CreaclienteComponent implements OnInit {

  cliente = new ClienteModelo;

  constructor(private _clienteservice:ClientesService, private router:Router) { }

  guardar(form: NgForm){
    this._clienteservice.crearCliente(this.cliente)
    .subscribe(res => {
      console.log(res);      
    })

    Swal.fire({
      title: "Correcto!",
      text: "Cliente creado Correctamente!",
      type: "success"
    })
      setTimeout(() => {
        this.router.navigateByUrl('/listaclientes');
      }, 1500);
      
    
  }

  ngOnInit() {
  }

}
