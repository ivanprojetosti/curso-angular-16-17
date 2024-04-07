import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardModule } from './card/card/card.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BindingComponent } from './binding/binding.component';
import { BindingCssComponent } from './binding-css/binding-css.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    BindingCssComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
