import { Injectable } from '@angular/core';
import { Cine } from '../cine';
@Injectable({
  providedIn: 'root'
})
export class CineservicioService {
  listapeliculas: Array<Cine>= new Array<Cine>();
  constructor() { }
}
