import { Component, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-barras-doble',
  templateUrl: './barras-doble.component.html',
  styles: [
  ]
})
export class BarrasDobleComponent {

  public anyos: string[] = ['2021', '2022', '2023', '2024', '2025'];

  public proveedorestData: ChartData<'bar'> = {
    labels: this.anyos,
    datasets: [
      { data: [100, 200, 300, 400, 500], label: 'Vendedor A', backgroundColor: '#F805E4', hoverBackgroundColor: '#0510F8' },
      { data: [50, 250, 30, 450, 200], label: 'Vendedor B', backgroundColor: '#A804D9', hoverBackgroundColor: '#0510F8' },
    ]
  }

  public productotData: ChartData<'bar'> = {
    labels: this.anyos,
    datasets: [
      { data: [200, 300, 400, 300, 100], label: 'Carros', backgroundColor: 'blue' }
    ]
  }

}
