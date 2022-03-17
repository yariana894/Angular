import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ejemplo2',
  templateUrl: './ejemplo2.component.html',
  styleUrls: ['./ejemplo2.component.scss']
})
export class Ejemplo2Component implements OnInit {

  /*defino que el contador va a ser de tipo numero para siempre*/
  contador: number = 0

  constructor() {
  }

  ngOnInit(): void {
  }

  incrementar() {
    this.contador++
  }

  decrementar() {
    this.contador--
  }

}
