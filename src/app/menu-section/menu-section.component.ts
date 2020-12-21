import { Component, Input, OnInit } from '@angular/core';
import { Menu, MenuItem } from '../modals/menu.modal';

@Component({
    selector: 'menu-section',
    templateUrl: './menu-section.component.html',
    styleUrls: ['./menu-section.component.scss']
})
export class AppMenuSection implements OnInit {
  @Input() menuSection: Menu;
  sectionTitle: string;
  menuItems: MenuItem[];

  constructor() {}

  ngOnInit() {
    this.sectionTitle = this.menuSection.section.sectionName;
    this.menuItems = this.menuSection.section.menuItems;
  }

  consoleLog(data) {
    console.log(data);
  }

}