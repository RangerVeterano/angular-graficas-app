import { Component } from '@angular/core';

interface MenuItem {
  ruta: string;
  text: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [`
    li {
      cursor:pointer;
    }
  `]
})
export class MenuComponent {

  menu: MenuItem[] = [
    {
      ruta: '/graficas/barras',
      text: 'Barras'
    },
    {
      ruta: '/graficas/barras-doble',
      text: 'Barras Dobles'
    },
    {
      ruta: '/graficas/dona',
      text: 'Dona'
    },
    {
      ruta: '/graficas/dona-http',
      text: 'Dona Http'
    }
  ]

}
