import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App2Component } from './app2.component';
import { SimpleService } from 'simple-ng-lib';

@NgModule({
  declarations: [App2Component],
  imports: [BrowserModule],
  providers: [SimpleService],
  bootstrap: [App2Component],
})
export class App2Module {}
