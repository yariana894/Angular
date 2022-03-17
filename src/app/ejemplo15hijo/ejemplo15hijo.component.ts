import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-ejemplo15hijo',
  templateUrl: './ejemplo15hijo.component.html',
  styleUrls: ['./ejemplo15hijo.component.scss']
})
export class Ejemplo15hijoComponent implements OnInit {
  @Output() edadCambia = new EventEmitter<number>()
  _edad = 9
  set edad(valor: number) {
    this._edad = valor
    this.edadCambia.emit(this._edad)
  }

  get edad(): number {
    return this._edad
  }

  ngOnInit(): void {
    this.edadCambia.emit(this._edad)
  }

  constructor() {
  }
}
