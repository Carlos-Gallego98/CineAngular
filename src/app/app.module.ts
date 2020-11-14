import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AltaComponent } from './alta/alta.component';
import { ListadoComponent } from './listado/listado.component';
import { HeaderComponent } from './header/header.component';
import { CineservicioService } from './cineservicio/cineservicio.service';

@NgModule({
  declarations: [
    AppComponent,
    AltaComponent,
    ListadoComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    CineservicioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
