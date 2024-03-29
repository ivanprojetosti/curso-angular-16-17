import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',


  //Pegando Css de dois componentes
  styleUrls: ['./card.component.scss', '../card-button/card-button.component.scss'],

  template: `
    <div class="area-plano">
      <p>{{informacoesCard?.texto}}</p>
      <p>{{informacoesCard?.preco}}/Mensal - Template</p>
      <app-card-button></app-card-button>
    </div>
  `
})
export class CardComponent {

  preco: number = 500;
  texto: string = "Plano";

  informacoesCard: any = {
    preco: "R$550,00",
    texto: "Plano"
  } 

}
