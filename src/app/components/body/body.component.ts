import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
})
export class BodyComponet {
  frase: any = {
    mensaje:
      'Un hombre sabio se buscará más oportunidades de las que se le presentan',
    autor: 'Francis Bacon',
  };

  mostrar: boolean = true;

  jugadores: string[] = [
    'Cristiano Ronaldo',
    'Zinedin Zidane',
    'Ronaldinho',
    'Kaka',
    'Ronaldo',
  ];
}
