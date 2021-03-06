import { BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
  imports: [
    AppRoutingModule,
    AppModule,
    BrowserTransferStateModule
  ],
  bootstrap: [AppComponent]
})
export class AppBrowserModule { }
