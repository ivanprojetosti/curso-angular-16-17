import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrl: './input-output.component.scss'
})
export class InputOutputComponent {
  _informacaoEntrada: string = "pão";

  @Input() set informacaoEntrada(valor: string){
    const pao = "pao";
    this._informacaoEntrada = pao.toUpperCase();
  }
  get informacaoEntrada(){
    return this._informacaoEntrada;
  }

  @Output() entradaSaida = new EventEmitter<string>();


  constructor(){

  }

  ngOnInit(){
    console.log("alterado", this.informacaoEntrada);
  }

  saida(){
    this.entradaSaida.emit();
  }
}
