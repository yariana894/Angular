import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-ejemplo17',
  templateUrl: './ejemplo17.component.html',
  styleUrls: ['./ejemplo17.component.scss']
})
export class Ejemplo17Component implements OnInit {
  miParametro = ''

  constructor(public activateRoute: ActivatedRoute) {
    this.miParametro = activateRoute.snapshot.params['miparametro']
  }

  ngOnInit(): void {
  }

}
