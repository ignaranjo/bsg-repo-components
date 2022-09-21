import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/* import { BsgTestModule } from 'projects/bsg-test/src/public-api'; */
import { BsgTestModule } from 'bsg-test';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsgTestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
