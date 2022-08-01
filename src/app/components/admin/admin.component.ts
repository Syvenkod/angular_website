import { Component, OnInit, AfterContentChecked} from '@angular/core';
import { GetDataService } from '../shared/get-data.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Card } from '../shared/card';
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
  }

  columnsToDisplay: string[] = ['id', 'userId', 'date', 'products'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: Card | null;
  cardSource:any;
  dataSource: any;
  products:any;
  product:any;
  id:number;
  image: string;
  price: number;
  title: string;
  users: any;


   filterForm = new FormGroup({
    fromDate: new FormControl <Date | null>(null),
    toDate: new FormControl <Date | null>(null),
    });

  get fromDate() { return this.filterForm.get('fromDate').value; }
  get toDate() { return this.filterForm.get('toDate').value; }

  ngOnInit(): void {
    // for card
    this.getDataService.getCartData().subscribe(res => {
      this.cardSource = Object.values(res);
      this.dataSource = new MatTableDataSource(Object.values(res));
      console.log(this.cardSource);

     this.dataSource.filterPredicate = (data, filter) =>{
      if (this.fromDate && this.toDate) {
      return data.date >= this.fromDate && data.date <= this.toDate;
      }
      return true;
    }
    })

    // for products
    this.getDataService.getProductData().subscribe(pro => {
      this.product = Object.values(pro);
      console.log(this.product);
    })

    // for users
    this.getDataService.getUserData().subscribe(us=> {
      this.users = Object.values(us);
      console.log(this.users);

    })
  }

  ngAfterContentChecked(): void {

  }
  applyFilter() {
    this.dataSource.filter = ''+Math.random();
  }
}