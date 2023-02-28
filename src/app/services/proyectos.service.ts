import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proyecto } from '../models/proyect.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor(
    private http: HttpClient
  ) { }

  getAllProyects() {
    return this.http.get<Proyecto[]>('https://localhost:7019/Proyecto/lista')
  }
}
