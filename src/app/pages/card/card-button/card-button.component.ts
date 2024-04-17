import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  styleUrl: './card-button.component.scss',
})
export class CardButtonComponent {

  @Input() isDisable: boolean = false;
  @Input({required: true}) styleButton: "default" | "green" | "purple" = "default";

  constructor(){

  }

  ngOnInit(){

  }
}
