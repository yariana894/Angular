import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-listado-nombres',
  templateUrl: './listado-nombres.component.html',
  styleUrls: ['./listado-nombres.component.scss']
})
export class ListadoNombresComponent implements OnInit {

  array: String [] = []
  texto: String = ""

  constructor() {
  }

  introducirArray() {
    this.array.push(this.texto)
    //console.log(this.array)
  }

  borrarElementoArray(index: Number) {
    let nuevoArray = this.array;
    return nuevoArray.filter((numero, i) => i !== index)
  }


  ngOnInit(): void {
  }

}
