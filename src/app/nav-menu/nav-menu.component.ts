import { Component } from "@angular/core";

@Component ({
  selector: 'nav-menu',
  templateUrl: 'nav-menu.component.html',
  styleUrls: ['nav-menu.component.scss']
})
export class AppMenuNav {
  isCollapsed = true;
}