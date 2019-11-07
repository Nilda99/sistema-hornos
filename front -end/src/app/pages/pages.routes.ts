import {Routes, RouterModule} from '@angular/router';

import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProgressComponent} from './progress/progress.component';
import {Graficas1Component} from './graficas1/graficas1.component';
import {EmpresaComponent} from './empresa/empresa.component';
import {ProductoComponent} from './producto/producto.component';
import {CategoriaComponent} from './categoria/categoria.component';
import {CompraComponent} from './compra/compra.component';
import {VentaComponent} from './venta/venta.component';
import {UsuarioComponent} from './usuario/usuario.component';


const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'progress', component: ProgressComponent},
      {path: 'graficas1', component: Graficas1Component},
      {path: 'empresa', component: EmpresaComponent},
      {path: 'producto', component: ProductoComponent},
      {path: 'categoria', component: CategoriaComponent},
      {path: 'compra', component: CompraComponent},
      {path: 'venta', component: VentaComponent},
      {path: 'usuario', component: UsuarioComponent},
      {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
    ]
  },
];
export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
