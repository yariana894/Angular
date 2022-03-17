import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Ejemplo4Component} from "./ejemplo4/ejemplo4.component";
import {Ejemplo2Component} from "./ejemplo2/ejemplo2.component";
import {Ejemplo1Component} from "./ejemplo1/ejemplo1.component";
import {Ejemplo3Component} from "./ejemplo3/ejemplo3.component";
import {Ejemplo6Component} from "./ejemplo6/ejemplo6.component";
import {Ejemplo5Component} from "./ejemplo5/ejemplo5.component";
import {Ejemplo7Component} from "./ejemplo7/ejemplo7.component";
import {Ejemplo8Component} from "./ejemplo8/ejemplo8.component";
import {Ejemplo9Component} from "./ejemplo9/ejemplo9.component";
import {Ejemplo10Component} from "./ejemplo10/ejemplo10.component";
import {Ejemplo11Component} from "./ejemplo11/ejemplo11.component";
import {Ejemplo12Component} from "./ejemplo12/ejemplo12.component";
import {ListadoNombresComponent} from "./listado-nombres/listado-nombres.component";
import {AnhadirprofesComponent} from "./anhadirprofes/anhadirprofes.component";
import {MultiplicarnumeroComponent} from "./multiplicarnumero/multiplicarnumero.component";
import {Ejemplo13Component} from "./ejemplo13/ejemplo13.component";
import {Ejemplo14PadreComponent} from "./ejemplo14-padre/ejemplo14-padre.component";
import {Ejemplo15padreComponent} from "./ejemplo15padre/ejemplo15padre.component";
import {Ejemplo17Component} from "./ejemplo17/ejemplo17.component";
import {Ejemplo16Component} from "./ejemplo16/ejemplo16.component";
import {Ejemplo18Component} from "./ejemplo18/ejemplo18.component";
import {ExamenComponent} from "./examen/examen.component";


const routes: Routes = [
  {path: 'ejemplo1', component: Ejemplo1Component},
  {path: 'ejemplo2', component: Ejemplo2Component},
  {path: 'ejemplo3', component: Ejemplo3Component},
  {path: 'ejemplo4', component: Ejemplo4Component},
  {path: 'ejemplo5', component: Ejemplo5Component},
  {path: 'ejemplo6', component: Ejemplo6Component},
  {path: 'ejemplo7', component: Ejemplo7Component},
  {path: 'ejemplo8', component: Ejemplo8Component},
  {path: 'ejemplo9', component: Ejemplo9Component},
  {path: 'ejemplo10', component: Ejemplo10Component},
  {path: 'ejemplo11', component: Ejemplo11Component},
  {path: 'ejemplo12', component: Ejemplo12Component},
  {path: 'ejemplo13', component: Ejemplo13Component},
  {path: 'ejemplo17', component: Ejemplo17Component},
  {path: 'ejemplo16', component: Ejemplo16Component},
  {path: 'ejemplo14Padre', component: Ejemplo14PadreComponent},
  {path: 'ejemplo15Padre', component: Ejemplo15padreComponent},
  {path: 'ejemplo18', component: Ejemplo18Component},
  {path: 'listado-nombres', component: ListadoNombresComponent},
  {path: 'anhadirprofes', component: AnhadirprofesComponent},
  {path: 'multiplicarnumeros', component: MultiplicarnumeroComponent},
  {path: 'examen', component: ExamenComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
