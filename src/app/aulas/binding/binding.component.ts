import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.scss'
})
export class BindingComponent {

  inputType: string = "text";
  valueInput: string = "primeiro valor"
  isDisabled: boolean = true;
  constructor(){

  }

  ngOnInit(){
    this.alterarClass();
  }

  alterarClass(){
    let aula = document.getElementsByClassName('aula');

    
  }

}
