import { Component } from '@angular/core';
import { Menu } from './modals/menu.modal';
import { appMenu } from '../assets/menu-sections/appetizers';
import { soupMenu } from '../assets/menu-sections/soup';
import { sushiMenu } from '../assets/menu-sections/sushi';
import { skinnySteamersMenu } from '../assets/menu-sections/skinny-steamers';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'menu';
  appMenu: Menu = appMenu;
  soupMenu: Menu = soupMenu;
  sushiMenu: Menu = sushiMenu;
  skinnySteamersMenu: Menu = skinnySteamersMenu;
  constructor() {}

}