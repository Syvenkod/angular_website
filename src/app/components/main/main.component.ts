import { AfterContentChecked, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, AfterContentChecked {

  constructor() { }


  ngOnInit(): void {
  }

  ngAfterContentChecked(): void {

    }
}
