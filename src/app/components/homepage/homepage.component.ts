import { Component, OnInit } from '@angular/core';

import * as Aos from 'aos';
import { Proyecto } from 'src/app/models/proyect.model';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']

})

export class HomepageComponent implements OnInit {

  proyecto: Proyecto[] = [];

  constructor(
    private proyectoService: ProyectosService
  ) {}

  ngOnInit(): void {
    this.proyectoService.getAllProyects()
    .subscribe((data: any) => {
      this.proyecto = data[0];
      console.log(data[0]);
    })
  }
}


