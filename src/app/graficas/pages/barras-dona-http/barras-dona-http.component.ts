import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-barras-dona-http',
  templateUrl: './barras-dona-http.component.html',
  styles: [
  ]
})
export class BarrasDonaHttpComponent implements OnInit {

  constructor(private gs: GraficasService) { }

  ngOnInit(): void {

    this.gs.getUsuariosredesSociales()
      .subscribe({
        next: data => {
          console.log(data);
        }
      })
  }
}
