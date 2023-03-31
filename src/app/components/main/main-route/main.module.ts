import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { GetDataService } from '../../service/get-data.service';

import { MainRoutingModule } from '../main-route/main-routing.module'
import { CatalogComponent } from '../catalog/catalog.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { AboutUsComponent } from '../about-us/about-us.component';
import { MainComponent } from '../main.component';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../carousel/carousel.component';
import { SearchFilterPipe } from '../../shared/search-filter.pipe';
import { BannerComponent } from '../carousel/banner/banner.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [
    CatalogComponent,
    ContactsComponent,
    AboutUsComponent,
    MainComponent,
    CarouselComponent,
    BannerComponent,
    SearchFilterPipe,
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleMapsModule,
    MainRoutingModule,
    SweetAlert2Module
  ],

  providers: [GetDataService],

})
export class MainModule { }