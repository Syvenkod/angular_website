import { AfterContentChecked, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentChecked {

  title = 'angular_website';
  LogoImage: string = 'assets/image/spilo-logo.png';
  headerDesktop


  ngOnInit(): void {
    this.headerDesktop = document.querySelector<HTMLElement>('.menu-desktop')
  }

  ngAfterContentChecked(): void {
    if (window.pageYOffset > 0)
      {this.headerDesktop.classList.add('fix-menu-desktop')}
      else
         {this.headerDesktop.classList.remove('fix-menu-desktop')}
  }
}


