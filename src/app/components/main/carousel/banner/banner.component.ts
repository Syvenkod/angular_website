import { GetDataService } from './../../../service/get-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/components/service/common.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor(
    private commonService: CommonService,
    private router: Router) { }

  ngOnInit(): void {
  }

  goToShop(category: string){
    this.router.navigateByUrl('catalog');
    this.commonService.clickedCategory(category);
  }
}
