import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-barras-dona-http',
  templateUrl: './barras-dona-http.component.html',
  styles: [
  ]
})
export class BarrasDonaHttpComponent implements OnInit {

  public doughnutChartLabels: string[] = [];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [],
        backgroundColor: ['#0CAFF8', '#0BCFD9', '#00F0B6', '#0BD96E'],
        hoverBackgroundColor: '#FF0000',
        hoverBorderColor: '#000000'
      },
    ]
  };

  public doughnutChartType: ChartType = 'doughnut';

  //inyeccion de la peticion de la
  constructor(private gs: GraficasService) { }

  ngOnInit(): void {

    // this.gs.getUsuariosredesSociales()
    //   .subscribe({
    //     next: data => {
    //       //Extraemos todas las keys del objeto recibido
    //       const labels = Object.keys(data);
    //       this.doughnutChartData.labels = labels; //asignamos los labels

    //       const values = Object.values(data);
    //       this.doughnutChartData.datasets[0].data = values;
    //     }
    //   })
    this.gs.getUsuariosredesSocialesDonaData()
      .subscribe({
        //desestructurando la información recibida
        next: ({ labels, values }) => {
          this.doughnutChartData.labels = labels
          this.doughnutChartData.datasets[0].data = values;
        }
      })
  }
}
