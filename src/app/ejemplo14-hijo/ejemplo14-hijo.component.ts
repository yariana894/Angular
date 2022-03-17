import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ejemplo14-hijo',
  templateUrl: './ejemplo14-hijo.component.html',
  styleUrls: ['./ejemplo14-hijo.component.scss']
})
export class Ejemplo14HijoComponent implements OnInit {
  @Input() colorPadre = 'red'

  constructor() {
  }

  ngOnInit(): void {
  }

}
