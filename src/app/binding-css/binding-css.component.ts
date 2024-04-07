import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-css',
  templateUrl: './binding-css.component.html',
  styleUrl: './binding-css.component.scss'
})
export class BindingCssComponent {
  aulaClass: boolean = true;
  aulaStyle: boolean = false;
  cssList1: string = 'height: 50px; width: 170px; background-color: red;'
  buttonCss: object = {
    'height': '50px', 
    'width': '180px',
    'background-color': 'violet',
  }

}
