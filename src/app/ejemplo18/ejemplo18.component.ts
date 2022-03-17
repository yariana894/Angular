import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-ejemplo18',
  templateUrl: './ejemplo18.component.html',
  styleUrls: ['./ejemplo18.component.scss']
})
export class Ejemplo18Component implements OnInit {

  public form: FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      nombre: ['Angel', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  ngOnInit(): void {

  }

  //cuando no sabes bien l tipo de dato ponemos any
  onSubmit(formValue: any) {
    alert('Me envian el formulario: ' + formValue.email)
  }

}
