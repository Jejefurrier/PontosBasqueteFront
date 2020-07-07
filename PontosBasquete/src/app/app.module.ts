import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LancarPontosComponent } from './lancar-pontos/lancar-pontos.component';
import { VerResultadosComponent } from './ver-resultados/ver-resultados.component';

@NgModule({
  declarations: [
    AppComponent,
    LancarPontosComponent,
    VerResultadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
