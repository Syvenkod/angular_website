import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular_website';

  LogoImage: string = 'assets/image/spilo-logo.png';
  basket: string = 'assets/icon/basket.png'

}

