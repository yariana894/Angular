import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ejemplo12',
  templateUrl: './ejemplo12.component.html',
  styleUrls: ['./ejemplo12.component.scss']
})
export class Ejemplo12Component implements OnInit {

  laFecha = new Date()
  nombre = 'Angel'

  constructor() {
  }

  ngOnInit(): void {
  }

}
