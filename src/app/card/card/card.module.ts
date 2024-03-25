import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card.component';
import { CardButtonComponent } from '../../card-button/card-button.component';
import { CardRoxoComponent } from '../../card-roxo/card-roxo.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CardComponent,
    CardButtonComponent,
    CardRoxoComponent
  ],
  exports: [
    CardComponent,
    CardButtonComponent,
    CardRoxoComponent
  ] 
})
export class CardModule { }
