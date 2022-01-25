import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(private http: HttpClient) { }

  getUsuariosredesSociales() {
    return this.http.get('http://localhost:3000/grafica')
  }

  getUsuariosredesSocialesDonaData() {
    return this.getUsuariosredesSociales()
      .pipe(
        delay(5000), //añadimos un retraso de 5 segundos
        map(data => {
          const labels = Object.keys(data); //indices 
          const values = Object.values(data); //valores

          return { labels, values }
        })
      )
  }
}

