import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ejemplo9',
  templateUrl: './ejemplo9.component.html',
  styleUrls: ['./ejemplo9.component.scss']
})
export class Ejemplo9Component implements OnInit {

  resultado: number = 0
  //num2: number = 0
  //num1: number = 0

  constructor() {
  }

  sumar(num1: string, num2: string) {
    this.resultado = Number(num1) + Number(num2)
  }

  ngOnInit(): void {
  }

}
