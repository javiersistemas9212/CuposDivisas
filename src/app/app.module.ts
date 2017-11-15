import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routing }        from './app.routing';

import { ConsultarClienteComponent } from './consultar-cliente/consultar-cliente.component';
import { DetalleClienteComponent } from './detalle-cliente/detalle-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsultarClienteComponent,
    DetalleClienteComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
