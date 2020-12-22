import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMenuItem } from './menu-item/menu-item.component'
import { AppMenuSection } from './menu-section/menu-section.component'
import { AppContactInfo } from './info/contact-info.component'

@NgModule({
  declarations: [
    AppComponent,
    AppMenuItem,
    AppMenuSection,
    AppContactInfo
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
