import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraficasRoutingModule } from './graficas-routing.module';
import { BarrasComponent } from './pages/barras/barras.component';
import { BarrasDobleComponent } from './pages/barras-doble/barras-doble.component';
import { BarrasDonaComponent } from './pages/barras-dona/barras-dona.component';
import { BarrasDonaHttpComponent } from './pages/barras-dona-http/barras-dona-http.component';
import { GraficaBarraComponent } from './components/grafica-barra/grafica-barra.component';



@NgModule({
  declarations: [
  
    BarrasComponent,
       BarrasDobleComponent,
       BarrasDonaComponent,
       BarrasDonaHttpComponent,
       GraficaBarraComponent,
  ],
  imports: [
    CommonModule,
    GraficasRoutingModule
  ]
})
export class GraficasModule { }
