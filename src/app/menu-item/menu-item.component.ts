import { Component, Input } from '@angular/core';
import { MenuItem } from '../modals/menu-item.modal';

@Component({
    selector: 'menu-item',
    templateUrl: './menu-item.component.html',
    styleUrls: ['./menu-item.component.scss']
})
export class AppMenuItem {
  @Input() menuItem: MenuItem;

}