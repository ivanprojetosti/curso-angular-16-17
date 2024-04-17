import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardButtonComponent } from './card-button/card-button.component';
import { CardPlanoComponent } from './card-plano/card-plano.component';



@NgModule({
  declarations: [
    CardButtonComponent,
    CardPlanoComponent
  ],
  imports: [
    CommonModule,

  ],
  exports:[
    CardButtonComponent,
    CardPlanoComponent
  ]
})
export class CardModuleModule { }
