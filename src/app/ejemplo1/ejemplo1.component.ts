import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ejemplo1',
  templateUrl: './ejemplo1.component.html',
  styleUrls: ['./ejemplo1.component.scss']
})
export class Ejemplo1Component implements OnInit {

  //nombre siempre será un string porque así está definido
  //nombre: string = "Yari"

  public nombre = "Yari"

  constructor() {
    this.nombre = "Yari"
  }

  ngOnInit(): void {
  }

}
