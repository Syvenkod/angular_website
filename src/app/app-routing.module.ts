import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from './components/main/cart/cart.component';
import { CatalogComponent } from './components/main/catalog/catalog.component';
import { ContactsComponent } from './components/main/contacts/contacts.component';
import { MainComponent } from './components/main/main.component';
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  {path: '', component: MainComponent, pathMatch: 'full'},
  {path: 'main', component: MainComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: 'cart', component: CartComponent},
  {path: 'admin', loadChildren: () => import("./components/admin/admin.module").then(contacts => contacts.AdminModule)},
  {path: 'contacts', component: ContactsComponent},
  {path: '**', component: Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
