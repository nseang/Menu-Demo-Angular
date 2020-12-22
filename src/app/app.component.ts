import { Component } from '@angular/core';
import { Menu } from './modals/menu.modal';
import { appMenu} from '../assets/menu-sections/appetizers'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'menu';
  appMenu: Menu = appMenu

  appetizerMenu: Menu = {
    section: {
      sectionName: 'Appetizer',
      menuItems: [
        {
          title: 'Beef Stew',
          description: 'Carrots, potato, beef stew on white rice',
          imagePath: 'assets/pics/riceBeefStew.jpg',
          price: 0
        },
        {
          title: 'Curry Fish',
          description: 'Carrots, potato, beef broth with Fried Tempura Fish on Rice',
          imagePath: 'assets/pics/curryFish.jpg',
          price: 0,
          subTitle: 'Subtitle'
        },
        {
          title: 'Jasmine Rice Special',
          description: 'Jasmine rice with steam meatloaf, grilled pork, fried eggs, shredded pork',
          imagePath: 'assets/pics/comTham.jpg',
          price: 0
        },

        {
          title:'testing',
          description: 'testing',
          imagePath: null,
          price: 0
        }
      ]
    }
  }

  constructor() {}

}
