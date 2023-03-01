import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Proyecto } from '../models/proyect.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor(
    private http: HttpClient
  ) { }

  getAllProyects() {
    return this.http.get<{[key: string]: Proyecto}>('https://localhost:7019/Proyecto/lista')
    .pipe(
      map((res) => {
        const Proyecto = [];
        for (const key in res) {
          if(res.hasOwnProperty(key)) {
            Proyecto.push({...res[key], id: key});
          }
        }
        return Proyecto;
      })
    );
  }


}
