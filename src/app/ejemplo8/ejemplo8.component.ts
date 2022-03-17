import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ejemplo8',
  templateUrl: './ejemplo8.component.html',
  styleUrls: ['./ejemplo8.component.scss']
})
export class Ejemplo8Component implements OnInit {

  colorTexto = 'orange'

  constructor() {
  }

  getColor() {
    return 'blue'
  }

  hasErrors(){
    return true;
  }

  ngOnInit(): void {
  }

}
