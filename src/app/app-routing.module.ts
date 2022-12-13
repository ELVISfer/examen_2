import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { panta_1Component } from './panta_1/panta_1.component';
import { panta_2Component } from './panta_2/panta_2.component';
import { panta_3Component } from './panta_3/panta_3component';


const routes: Routes = [

  { path: 'panta_1', component: panta_1Component },
  { path: 'panta_2', component: panta_2Component },
  { path: 'panta_3', component: panta_3Component }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
