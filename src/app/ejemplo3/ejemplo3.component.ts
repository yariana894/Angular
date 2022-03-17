import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ejemplo3',
  templateUrl: './ejemplo3.component.html',
  styleUrls: ['./ejemplo3.component.scss']
})
export class Ejemplo3Component implements OnInit {

  nombres:string[] = ['Bea', 'Pepe', ' Angel']

  constructor() {
  }

  ngOnInit(): void {
  }

}
