import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  //Variable para comprobar si las barras son horizontales o verticales
  @Input() horizontal: boolean = false;

  public barChartOptions: ChartConfiguration['options'] = {

    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 0
      }
    },
    indexAxis: 'x'
  };
  public barChartType: ChartType = 'bar';

  @Input() barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: []
  }

  ngOnInit(): void {

    if (this.horizontal) {
      this.barChartOptions = {
        responsive: true,
        // We use these empty structures as placeholders for dynamic theming.
        scales: {
          x: {},
          y: {
            min: 0
          }
        },
        indexAxis: 'y'
      }
    }

  }

}
