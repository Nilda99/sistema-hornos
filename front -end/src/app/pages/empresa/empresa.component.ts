import {Component, OnInit} from '@angular/core';
import {EmpresaService} from '../../services/empresa.service';
import {Empresa} from "../../models/empresa.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import Swal from 'sweetalert2';


// import { MdbTableDirective, MdbTablePaginationComponent } from 'ng-uikit-pro-standard';
@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.sass']
})
export class EmpresaComponent implements OnInit {
  empresas: Empresa[];
  // signupForm:FormGroup
  empresasForm: FormGroup;


  constructor(private empresaService: EmpresaService, private formBuilder: FormBuilder) {
    this.empresasForm = this.formBuilder.group({
      Nombre: ['', [Validators.required]],
      Telefono: ['', [Validators.required]],
      Direccion: ['', [Validators.required]],
      // Logo: [] ,
    });
  }

  enviar(values) {
    console.log(values);
    const newEmpresa = new Empresa();
    newEmpresa.Nombre = values.Nombre;
    newEmpresa.Telefono = values.Telefono;
    newEmpresa.Direccion = values.Direccion;
    // newEmpresa.Logo = values.Logo;
    this.empresaService.create(newEmpresa).subscribe(
      data => {
        console.log(data);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: data.message,
          showConfirmButton: false,
          timer: 1500
        });
        this.empresasForm.reset();

        this.listEmpresa();
      },
      error => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!', // aqui
        });
      }
    );
  }

  ngOnInit() {
    this.listEmpresa();
  }

  listEmpresa() {
    this.empresaService.getAll().subscribe(
      data => {
        console.log(data);
        this.empresas = data;
      },
      error1 => {
        console.log(error1);
      }
    );
  }
  editEmpresa(id: string) {
    console.log(id);
    // this.empresaService. // crear un servicio
  }

  eliminarEmpresa(id: string) {
    console.log(id);
    this.empresaService.delete(id).subscribe(
      data => {
        console.log(data);
        this.listEmpresa();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          // title: data.message,
          showConfirmButton: false,
          timer: 1500
        });
      },
      error => {
        console.log(error);
      });
  }
}
