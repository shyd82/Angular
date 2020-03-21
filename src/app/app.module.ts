import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { Server } from 'http';
import {ServerComponent} from './server/server.component';
import { User007Component } from './components/user007/user007.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    User007Component
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
