import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { GetDataService } from './components/shared/get-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { BasketComponent } from './components/basket/basket.component';
import { Page404Component } from './components/page404/page404.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactsComponent } from './components/contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    BasketComponent,
    ContactsComponent,
    Page404Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
