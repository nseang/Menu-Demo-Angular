import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CollapseModule } from 'ngx-bootstrap/collapse'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMenuItem } from './menu-item/menu-item.component'
import { AppMenuSection } from './menu-section/menu-section.component'
import { AppContactInfo } from './info/contact-info.component'
import { AppMenuNav } from './nav-menu/nav-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    AppMenuItem,
    AppMenuSection,
    AppContactInfo,
    AppMenuNav
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CollapseModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
