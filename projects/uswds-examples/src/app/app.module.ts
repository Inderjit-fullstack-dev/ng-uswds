import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordianModule, AlertModule } from 'ng-uswds';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AccordianModule, AlertModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
