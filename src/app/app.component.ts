import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'projeto-curso';

    // Aulas
    exibirAulasBinding: boolean = false;
    exibirAulasStyles: boolean = false;
    exibirAulasBindingCss: boolean = false;
    exibirAulasInputOutput: boolean = true;

  constructor(){

  }
  mostrarAulasBinding(){
    this.exibirAulasBinding = this.exibirAulasBinding === true ? false : true;
  }

  mostrarAulasStyles(){
    this.exibirAulasStyles = this.exibirAulasStyles === true ? false : true;

  }
  mostrarAulasBindingCss(){
    this.exibirAulasBindingCss = this.exibirAulasBindingCss === true ? false : true;
  }
  mostrarAulasInputOutput(){
    this.exibirAulasInputOutput = this.exibirAulasInputOutput === true ? false : true;
  }

  receberInformacao(){
    console.log("Recebido");
  }
}
