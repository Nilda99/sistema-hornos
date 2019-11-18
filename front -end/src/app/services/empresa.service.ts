import {Injectable} from '@angular/core';
import {Empresa} from '../models/empresa.model';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  baseUrl: string;

  constructor(protected httpClient: HttpClient) {

    this.baseUrl = 'http://localhost:3030/empresa'; // esto es la url osea  donde basa apungar para hacer get
  }

  getAll(): Observable<Empresa[]> {
    return this.httpClient.get<Empresa[]>(this.baseUrl + '/get');
  }

  create(empresa: Empresa): Observable<any> { // este metodo crea un artista  y recive un  artista por parametro
    return this.httpClient.post(this.baseUrl + '/guardar', empresa);
  }

  delete(id: string): Observable<Empresa> { // elimina
    return this.httpClient.delete<Empresa>(this.baseUrl + '/eliminar/' + id);
  }

  update(idEmpresa: number, empresa: Empresa): Observable<any> {// este actualiza
    // return this.httpClient.put(`${this.baseUrl}/${idArtista}`, artista);
    return this.httpClient.post(this.baseUrl + '/actualizar/' + idEmpresa, empresa);
    // return this.httpClient.post<Artista>(this.baseUrl + '/actualizar/' + idArtista , artista);
  }

  // para obtener empresa falta los id
//   getId(id: string)  Observable < Empresa> {
// return this.httpClient.
//   }
}
