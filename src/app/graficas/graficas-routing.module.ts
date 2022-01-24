import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarrasComponent } from './pages/barras/barras.component';
import { BarrasDobleComponent } from './pages/barras-doble/barras-doble.component';
import { BarrasDonaComponent } from './pages/barras-dona/barras-dona.component';
import { BarrasDonaHttpComponent } from './pages/barras-dona-http/barras-dona-http.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
       path: 'barras',
       component: BarrasComponent
      },
      {
        path: 'barras-doble',
        component: BarrasDobleComponent
      },
      {
        path: 'dona',
        component: BarrasDonaComponent
      },
      {
        path: 'dona-http',
        component: BarrasDonaHttpComponent
      },
      {
        path: '**',
        redirectTo: 'barras'
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraficasRoutingModule { }
