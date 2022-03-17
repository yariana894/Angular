import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ejemplo14-padre',
  templateUrl: './ejemplo14-padre.component.html',
  styleUrls: ['./ejemplo14-padre.component.scss']
})
export class Ejemplo14PadreComponent implements OnInit {
  color: string = 'orange'

  constructor() {
  }

  ngOnInit(): void {
  }

}
