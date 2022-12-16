import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './card.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

const routes: Routes = [
  {path: '', component: CardComponent}
];

@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    RouterModule.forChild(routes),
    SweetAlert2Module
  ]
})
export class CardModule { }
