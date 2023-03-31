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
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { CartService } from './components/service/cart.service';


@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    MainModule,
    AppRoutingModule,
    MatIconModule,
    MatCommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MatMenuModule,
    SweetAlert2Module.forRoot(),
    MatBadgeModule,
    MatSidenavModule,
    MatCardModule,
  ],
  providers: [
    DatePipe,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
