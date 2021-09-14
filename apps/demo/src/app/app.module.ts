import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent, SimpleModule } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
