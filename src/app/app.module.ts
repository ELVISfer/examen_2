import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { panta_1Component } from './panta_1/panta_1.component';
import { panta_2Component } from './panta_2/panta_2.component';
import { panta_3Component } from './panta_3/panta_3component';

@NgModule({
  declarations: [
    AppComponent,
    panta_1omponent,
    panta_2Component,
    panta_3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
