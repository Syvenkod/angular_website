import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentChecked {
  constructor(public router: Router,
              private activatedRoute: ActivatedRoute,
              ) {}

  title = 'angular_website';
  LogoImage: string = 'assets/image/spilo-logo.png';
  headerDesktop


  ngOnInit(): void {
    this.headerDesktop = document.querySelector<HTMLElement>('.menu-desktop');
  }

  ngAfterContentChecked(): void {
    let url = this.activatedRoute.snapshot['_routerState'].url;
    if (window.pageYOffset > 0 || url !== "/main")
      {this.headerDesktop.classList.add('fix-menu-desktop')}
      else
         {this.headerDesktop.classList.remove('fix-menu-desktop')}
  }
}


