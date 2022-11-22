import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { GetDataService } from '../../service/get-data.service';

import { CatalogComponent } from '../catalog/catalog.component';
import { CartComponent } from '../cart/cart.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AboutUsComponent } from '../about-us/about-us.component';
import { MatButtonModule } from '@angular/material/button';
import { MainComponent } from '../main.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CarouselComponent } from '../carousel/carousel.component';
import { MatSelectModule} from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { SearchFilterPipe } from '../../shared/search-filter.pipe';
import { MatDividerModule } from '@angular/material/divider'
import { BannerComponent } from '../carousel/banner/banner.component';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [
    CatalogComponent,
    CartComponent,
    ContactsComponent,
    AboutUsComponent,
    MainComponent,
    CarouselComponent,
    BannerComponent,
    SearchFilterPipe
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatDividerModule,
    GoogleMapsModule
  ],

  providers: [GetDataService],

})
export class MainModule { }