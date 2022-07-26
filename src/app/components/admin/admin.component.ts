import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../shared/get-data.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Card } from '../shared/card';


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


export class AdminComponent implements OnInit {

  constructor(private getDataService: GetDataService) { }

  cardsSource: any;
  columnsToDisplay = ['id', 'userId', 'date', 'products'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: Card | null;
  date = new Date();


  ngOnInit(): void {
    this.getDataService.getCardData().subscribe(res => {
      this.cardsSource = res;
    })

  }

}
