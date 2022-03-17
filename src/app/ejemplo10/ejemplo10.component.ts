import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ejemplo10',
  templateUrl: './ejemplo10.component.html',
  styleUrls: ['./ejemplo10.component.scss']
})
export class Ejemplo10Component implements OnInit {

  nombres: String [] = ['bea', 'pepe', 'isa', 'angel']
  nombre: String = ""

  constructor() {
  }

  esProfesor() {
    if (this.nombres.includes(this.nombre.trim().toLowerCase())) {
      return true
    } else {
      return false
    }
  }

  ngOnInit(): void {
  }

}
