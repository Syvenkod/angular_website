import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasketComponent } from './components/basket/basket.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  {path: '', component: CatalogComponent, pathMatch: 'full'},
  {path: 'catalog', component: CatalogComponent},
  {path: 'basket', component: BasketComponent},
  {path: 'admin', loadChildren: () => import("./components/admin/admin.module").then(contacts => contacts.AdminModule)},
  {path: 'contacts', component: ContactsComponent},
  {path: '**', component: Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
