import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card-old',
  templateUrl: './card.component.html',
  encapsulation: ViewEncapsulation.Emulated,


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
