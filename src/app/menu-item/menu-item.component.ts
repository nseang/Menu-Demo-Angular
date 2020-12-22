import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../modals/menu.modal';


@Component({
    selector: 'menu-item',
    templateUrl: './menu-item.component.html',
    styleUrls: ['./menu-item.component.scss']
})
export class AppMenuItem implements OnInit {
  @Input() menuItem: MenuItem;

  imgFound: boolean = false;
  multiPrice: boolean = true;

  constructor() {}

  ngOnInit() {
    if (this.menuItem.imagePath) {
      this.imgFound = true;
    }
    if (this.menuItem.price) {
      this.multiPrice = false;
    }
  }

}