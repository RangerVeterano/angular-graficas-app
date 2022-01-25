import { Component } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-barras-dona',
  templateUrl: './barras-dona.component.html',
  styles: [
  ]
})
export class BarrasDonaComponent {
  // Doughnut
  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Others'];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [350, 450, 100, 150],
        backgroundColor: ['#0CAFF8', '#0BCFD9', '#00F0B6','#0BD96E']
      },
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';
}
