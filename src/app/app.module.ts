import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page404Component } from './components/page404/page404.component';
import { MainModule } from './components/main/main-route/main.module';
import { FooterComponent } from './components/footer/footer.component';
import { DatePipe } from '@angular/common';




@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
