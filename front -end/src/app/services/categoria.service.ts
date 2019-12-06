import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Categoria} from "../models/categoria.model";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  baseUrl:string;

  constructor(protected  httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3030/categoria';
  }
//   getAll(); Observable<Categoria[] > {
//     return this.httpClient.post(this.baseUrl + '/guardar', categoria);
// }
// delete(id:string):Observable<Categoria>{
//     return this.httpClient._delete<Categoria>(this.baseUrl + '/elimina') + id );
//




}
}
