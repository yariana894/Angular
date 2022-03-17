import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ejemplo5',
  templateUrl: './ejemplo5.component.html',
  styleUrls: ['./ejemplo5.component.scss']
})
export class Ejemplo5Component implements OnInit {

  numero: number = 0

  constructor() {
  }

  ngOnInit(): void {
  }

  random() {
    return this.numero = Math.round(Math.random() * 10)
  }

  cero() {
    return this.numero = 0
  }

}
