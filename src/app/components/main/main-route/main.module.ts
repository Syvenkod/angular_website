import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { GetDataService } from '../../shared/get-data.service';

import { CatalogComponent } from '../catalog/catalog.component';
import { BasketComponent } from '../basket/basket.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
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
import { CardComponent } from '../catalog/card/card.component';
import { MatSelectModule} from '@angular/material/select';
import { SearchFilterPipe } from '../../shared/search-filter.pipe';

@NgModule({
  declarations: [
    CatalogComponent,
    BasketComponent,
    ContactsComponent,
    AboutUsComponent,
    MainComponent,
    CardComponent,
    SearchFilterPipe
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    HttpClientModule,
    CarouselModule,
    MatCardModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
  ],

  providers: [GetDataService],

})
export class MainModule { }