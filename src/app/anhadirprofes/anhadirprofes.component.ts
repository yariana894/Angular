import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-anhadirprofes',
  templateUrl: './anhadirprofes.component.html',
  styleUrls: ['./anhadirprofes.component.scss']
})
export class AnhadirprofesComponent implements OnInit {

  profes: String[] = []
  profe: String = ""

  constructor() {
  }

  anhadirProfe() {
    this.profes.push(this.profe)
    console.log(this.profes)
  }

  quitarProfe(p: String) {
    console.log("elim")

  }

  ngOnInit(): void {
  }

}
