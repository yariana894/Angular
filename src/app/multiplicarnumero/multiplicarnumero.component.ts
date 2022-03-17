import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-multiplicarnumero',
  templateUrl: './multiplicarnumero.component.html',
  styleUrls: ['./multiplicarnumero.component.scss']
})
export class MultiplicarnumeroComponent implements OnInit {

  resultado: number = 0

  constructor() {
  }

  multiplicar(num1: string, num2: string) {
    this.resultado = Number(num1) * Number(num2)
  }

  ngOnInit(): void {
  }

}
