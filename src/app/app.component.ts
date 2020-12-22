import { Component } from '@angular/core';
import { Menu } from './modals/menu.modal';
import { appMenu } from '../assets/menu-sections/appetizers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'menu';
  appMenu: Menu = appMenu;

  constructor() {}

}