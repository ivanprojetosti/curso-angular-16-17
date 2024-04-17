import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-plano',
  templateUrl: './card-plano.component.html',
  styleUrl: './card-plano.component.scss',
})
export class CardPlanoComponent {

  @Input({required: true}) typePlan: "simples"| "completo" | "padrão" = "padrão";
  @Input({required: true}) stylePlan: "purple" | "orange" | "white" = "white"
}
