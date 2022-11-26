import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CatalogComponent } from './components/main/catalog/catalog.component';
import { ContactsComponent } from './components/main/contacts/contacts.component';
import { MainComponent } from './components/main/main.component';
import { Page404Component } from './components/page404/page404.component';
import { AboutUsComponent } from './components/main/about-us/about-us.component';

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: MainComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: 'cart',
        loadChildren: () => import("../app/components/cart/cart.module").then(cart => cart.CartModule)},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'admin',
        loadChildren: () => import("./components/admin/admin.module").then(admin => admin.AdminModule)},
  {path: 'contacts', component: ContactsComponent},
  {path: '**', component: Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
