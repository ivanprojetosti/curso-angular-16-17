import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card.component';
import { CardButtonComponent } from '../../card-button/card-button.component';
import { CardRoxoComponent } from '../../card-roxo/card-roxo.component';
import { StylesNgDeepComponent } from '../../styles-ng-deep/styles-ng-deep.component';
import { StylesNgHostComponent } from '../../styles-ng-host/styles-ng-host.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CardComponent,
    CardButtonComponent,
    CardRoxoComponent,
    StylesNgDeepComponent,
    StylesNgHostComponent
  ],
  exports: [
    CardComponent,
    CardButtonComponent,
    CardRoxoComponent,
    StylesNgDeepComponent,
    StylesNgHostComponent
  ] 
})
export class CardModule { }
