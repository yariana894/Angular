import {Component, OnInit} from '@angular/core';
import {DataserviceService} from "./dataservice.service";

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.scss']
})
export class ExamenComponent implements OnInit {

  users: any;

  constructor(private dataserviceService: DataserviceService) {

  }


  ngOnInit() {
    this.dataserviceService.getUsers()
      .subscribe(data => {
        console.log(data)
      });
  }

}
