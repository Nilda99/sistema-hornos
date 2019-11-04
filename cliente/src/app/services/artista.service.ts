import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
// import { map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Persona } from '../models/persona.model';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class ArtistaService {
  url:string;
  constructor(private _http:HttpClient) {
    this.url="http://localhost:3030/";
  }
  public get(){
    // var usuario= ['esteban','elias'];

    // return usuario;
    return this._http.get(this.url+"artista/get");
  }
  public guardar(artista: any): Observable<any> {
    return this._http.post<any>(this.url+"artista/guardar", artista, httpOptions)
    .pipe(
      catchError(err => {
            console.log('error', err);
            return throwError(err);
        })
    );
  }
}
