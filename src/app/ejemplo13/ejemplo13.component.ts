import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ejemplo13',
  templateUrl: './ejemplo13.component.html',
  styleUrls: ['./ejemplo13.component.scss']
})
export class Ejemplo13Component implements OnInit {
  frasePeligrosa = 'hola <script>alert("hack")</script>'

  constructor() {
  }

  ngOnInit(): void {
  }

}
