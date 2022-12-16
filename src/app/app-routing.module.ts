import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: MainComponent},
  {path: 'cart',
        loadChildren: () => import("../app/components/cart/cart.module").then(cart => cart.CartModule)},
  {path: 'admin',
        loadChildren: () => import("./components/admin/admin.module").then(admin => admin.AdminModule)},
  {path: '**', component: Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
