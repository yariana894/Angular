import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {Ejemplo1Component} from './ejemplo1/ejemplo1.component';
import {Ejemplo2Component} from './ejemplo2/ejemplo2.component';
import {Ejemplo3Component} from './ejemplo3/ejemplo3.component';
import {Ejemplo4Component} from './ejemplo4/ejemplo4.component';
import {Ejemplo5Component} from './ejemplo5/ejemplo5.component';
import {Ejemplo6Component} from './ejemplo6/ejemplo6.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Ejemplo7Component} from './ejemplo7/ejemplo7.component';
import {Ejemplo8Component} from './ejemplo8/ejemplo8.component';
import {Ejemplo9Component} from './ejemplo9/ejemplo9.component';
import {Ejemplo10Component} from './ejemplo10/ejemplo10.component';
import {ListadoNombresComponent} from './listado-nombres/listado-nombres.component';
import {AnhadirprofesComponent} from './anhadirprofes/anhadirprofes.component';
import {MultiplicarnumeroComponent} from './multiplicarnumero/multiplicarnumero.component';
import {Ejemplo11Component} from './ejemplo11/ejemplo11.component';
import {Ejemplo12Component} from './ejemplo12/ejemplo12.component';
import {MayusculasParesPipe} from './mayusculas-pares.pipe';
import {Ejemplo13Component} from './ejemplo13/ejemplo13.component';

import {Ejemplo14HijoComponent} from './ejemplo14-hijo/ejemplo14-hijo.component';
import {Ejemplo14PadreComponent} from './ejemplo14-padre/ejemplo14-padre.component';
import {Ejemplo15padreComponent} from './ejemplo15padre/ejemplo15padre.component';
import {Ejemplo15hijoComponent} from './ejemplo15hijo/ejemplo15hijo.component';
import {Ejemplo16Component} from './ejemplo16/ejemplo16.component';
import {Ejemplo17Component} from './ejemplo17/ejemplo17.component';
import {Ejemplo18Component} from './ejemplo18/ejemplo18.component';
import { ExamenComponent } from './examen/examen.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,

    Ejemplo1Component,
    Ejemplo2Component,
    Ejemplo3Component,
    Ejemplo4Component,
    Ejemplo5Component,
    Ejemplo6Component,
    Ejemplo7Component,
    Ejemplo8Component,
    Ejemplo9Component,
    Ejemplo10Component,
    ListadoNombresComponent,
    AnhadirprofesComponent,
    MultiplicarnumeroComponent,
    Ejemplo11Component,
    Ejemplo12Component,
    MayusculasParesPipe,
    Ejemplo13Component,
    Ejemplo14HijoComponent,
    Ejemplo14PadreComponent,
    Ejemplo15padreComponent,
    Ejemplo15hijoComponent,
    Ejemplo16Component,
    Ejemplo17Component,
    Ejemplo18Component,
    ExamenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
