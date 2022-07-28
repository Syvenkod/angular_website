import { Component, OnInit, AfterContentChecked} from '@angular/core';
import { GetDataService } from '../shared/get-data.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Card } from '../shared/card';
import { DatePipe } from '@angular/common';
import {FormGroup, FormControl} from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-admin',
  styleUrls: ['./admin.component.scss'],
  templateUrl: './admin.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})


export class AdminComponent implements OnInit, AfterContentChecked{



  constructor(private getDataService: GetDataService,) {
    // this.pipe = new DatePipe('en');
    // this.dataSource.filterPredicate = (data, filter) =>{
    //   if (this.fromDate && this.toDate) {
    //     return data.created >= this.fromDate && data.created <= this.toDate;
    //   }
    //   return true;
    // }
  }
  cardsSource: any;
  columnsToDisplay: string[] = ['id', 'userId', 'date', 'products'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: Card | null;
  dataSource: any;


   filterForm = new FormGroup({
    fromDate: new FormControl <Date | null>(null),
    toDate: new FormControl <Date | null>(null),
    });

  get fromDate() { return this.filterForm.get('fromDate').value; }
  get toDate() { return this.filterForm.get('toDate').value; }

  ngOnInit(): void {
    this.getDataService.getCardData().subscribe(res => {
      this.cardsSource = Object.values(res);
      this.dataSource = new MatTableDataSource(this.cardsSource);
      console.log(this.dataSource);
     this.dataSource.filterPredicate = (data, filter) =>{
      if (this.fromDate && this.toDate) {
      return data.date >= this.fromDate && data.date <= this.toDate;
      }
      return true;
    }
    })
  }

  ngAfterContentChecked(): void {

  }
  applyFilter() {
    console.log(this.fromDate, this.toDate);
    this.dataSource.filter = ''+Math.random();
  }
}