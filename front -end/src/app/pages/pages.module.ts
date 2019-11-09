import {NgModule} from '@angular/core';
// Modules
import {SharedModule} from '../shared/shared.module';
import {PagesComponent} from './pages.component';

// RUTAS HIJAS
import {PAGES_ROUTES} from './pages.routes';

import {DashboardComponent} from './dashboard/dashboard.component';
import {ProgressComponent} from './progress/progress.component';
import {Graficas1Component} from './graficas1/graficas1.component';
import {FormsModule} from '@angular/forms';
import { EmpresaComponent } from './empresa/empresa.component';
import { ProductoComponent } from './producto/producto.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CompraComponent } from './compra/compra.component';
import { VentaComponent } from './venta/venta.component';
import { UsuarioComponent } from './usuario/usuario.component';
import {MDBBootstrapModule} from "angular-bootstrap-md";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    EmpresaComponent,
    ProductoComponent,
    CategoriaComponent,
    CompraComponent,
    VentaComponent,
    UsuarioComponent,
  ],
  exports: [// para que de puedan acceder desde cualquier logar
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
  ], imports: [
    SharedModule,
    PAGES_ROUTES, // sus propias rutas
    FormsModule,
    MDBBootstrapModule.forRoot(),
    CommonModule,
  ]
})
export class PagesModule {
}
