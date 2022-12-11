import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page404Component } from './components/page404/page404.component';
import { MainModule } from './components/main/main-route/main.module';
import { FooterComponent } from './components/footer/footer.component';
import { DatePipe } from '@angular/common';
import { MatCommonModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    MatIconModule,
    MatCommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MatMenuModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
