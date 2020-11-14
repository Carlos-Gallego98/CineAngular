import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CineservicioService } from '../cineservicio/cineservicio.service';
import { Cine } from '../cine';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {

  miformulario: FormGroup;
  constructor(private fb: FormBuilder, 
    private miservicio: CineservicioService,
  private ruta: Router) { 

  }

  ngOnInit(): void {
    this.crearFormulario();
  }

  crearFormulario(){
    this.miformulario = this.fb.group({
      titulo: ['',Validators.compose([
        Validators.required, Validators.minLength(10)
      ])],
      productora: ['',Validators.compose([
        Validators.required, Validators.pattern('^[A-Z]{4}-[0-9]{3}$')
      ])],
      ano: ['',Validators.compose([
        Validators.required, Validators.pattern('^[0-9]{4}$'), 
        Validators.min(1900), Validators.max(2020)
      ])],
      genero: ['',Validators.required]
    })
  }

  anadir(){
    this.miservicio.listapeliculas.push(this.miformulario.value as Cine);
    // console.log(this.miservicio.listapeliculas);
    this.ruta.navigateByUrl("listado");
  }

}
