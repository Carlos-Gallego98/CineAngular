import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AltaComponent } from './alta/alta.component';
import { ListadoComponent } from './listado/listado.component';


const routes: Routes = [
  {
    path: '', component: AltaComponent
  },
  {
    path: 'alta', component: AltaComponent
  },
  {
    path: 'listado', component: ListadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
