import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ejemplo15padre',
  templateUrl: './ejemplo15padre.component.html',
  styleUrls: ['./ejemplo15padre.component.scss']
})
export class Ejemplo15padreComponent implements OnInit {

  edadHijo = 0

  constructor() {
  }

  hijoCambiaSuEdad(edad: number) {
    this.edadHijo = edad
  }

  ngOnInit(): void {
  }

}
