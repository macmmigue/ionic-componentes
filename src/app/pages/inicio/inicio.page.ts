import { Component, OnInit } from '@angular/core';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'football-outline',
      name: 'Action Sheet ;)',
      redirectTo: '/action-sheet'
    },
    {
      icon:'water-outline',
      name: 'alert :O',
      redirectTo: '/aler'
    },
    {
      icon: 'accessibility-outline',
      name: 'avatar ;V',
      redirectTo: '/avatar'
    },
    {
      icon: 'bonfire-outline',
      name: 'botones ;<',
      redirectTo: '/button'
    },
    {
      icon: 'bonfire',
      name: 'card *-*',
      redirectTo: '/card'
    },
    {
      icon: 'eyedrop-sharp',
      name: 'check-box X-X',
      redirectTo: '/check-box'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
