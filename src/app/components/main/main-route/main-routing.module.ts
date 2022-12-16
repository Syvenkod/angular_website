import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from '../catalog/catalog.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { AboutUsComponent } from '../about-us/about-us.component';

const routes: Routes = [
  {path: 'catalog', component: CatalogComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'card',
        loadChildren: () => import("../catalog/card/card.module").then(card => card.CardModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }