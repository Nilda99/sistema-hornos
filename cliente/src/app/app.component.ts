import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario/shared/usuario.model';
import { Empleado } from './models/empleado.model';
import { Persona } from './models/persona.model';
import { ArtistaService } from './services/artista.service';

@Component({
  selector: 'app-ximena',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ArtistaService]
})
export class AppComponent implements OnInit {
    empleado: Empleado;
    // titulo : string = "hola mundo";
  // title = 'clientApp2';
  // listaPersona: any[];
  // Nombre: string;
  // Correo: string;
  // listaUsuario: Usuario[];
      persona: Persona;
      listaEmpleados: Empleado[];
  constructor(private artistaService: ArtistaService) {

    this.empleado = new Empleado();
    this.persona = new Persona();
    this.listaEmpleados=[];
    // this.listaUsuario=[];
    // // tslint:disable-next-line:whitespace
    // this.listaPersona = ['Ana','JC','Raul','Raul','Brian'];
    // console.log(this.listaPersona);
    // this.Nombre = '';
    // this.Correo = '';
  }
  ngOnInit(){

    this.artistaService.get().subscribe(data => {console.log(data)});
  }
  guardar() {
//     console.log(this.persona);
//     console.log(this.empleado);
//     let e = new Empleado();
//     e.nombre = this.persona.nombre;
//     e.apellido = this.persona.apellido;
//     e.salario = this.empleado.salario;
//     this.listaEmpleados.push(e);
//     console.log("es una prueba", this.empleado);
//     console.log("esta funcionando el boton");
//     console.log(this.listaEmpleados);
// alert("ya paso el limite, sol se permite 10 datos");
    // let  usuario = new Usuario();
    // usuario.Nombre = this.Nombre;
    // usuario.Correo = this.Correo;
    // console.log(this.Nombre +" "+this.Correo);
    // console.log(usuario);
    // this.listaUsuario.push(usuario);
    // console.log(this.listaUsuario);
  }
}
