import { Component, OnInit } from '@angular/core';
import { CineservicioService } from '../cineservicio/cineservicio.service';
import { Cine } from '../cine';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  lista: Array<Cine>;
  constructor(private miservicio: CineservicioService, private ruta: Router) { }

  ngOnInit(): void {
    this.lista=this.miservicio.listapeliculas;
  }

  volver(){
    this.ruta.navigateByUrl("alta");
  }


}
