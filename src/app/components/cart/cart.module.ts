import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { MaterialModule } from 'src/app/material.module';

const routes: Routes = [
  {path: '', component: CartComponent}
];

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class CartModule { }
