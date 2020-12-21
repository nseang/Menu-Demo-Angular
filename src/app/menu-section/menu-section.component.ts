import { Component, Input } from '@angular/core';

@Component({
    selector: 'menu-section',
    templateUrl: './menu-section.component.html',
    styleUrls: ['./menu-section.component.scss']
})
export class AppMenuSection {
  @Input() sectionTitle: String;

}