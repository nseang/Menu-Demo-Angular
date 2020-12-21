import { Component } from '@angular/core';
import { Menu } from './modals/menu.modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'menu';

  menu: Menu = {
    section: {
      sectionName: 'Appetizer',
      menuItems: [
        {
          name: 'Beef Stew',
          description: 'Carrots, potato, beef stew on white rice',
          imagePath: 'assets/pics/riceBeefStew.jpg'
        },
        {
          name: 'Curry Fish',
          description: 'Carrots, potato, beef broth with Fried Tempura Fish on Rice',
          imagePath: 'assets/pics/curryFish.jpg'
        },
        {
          name: 'Jasmine Rice Special',
          description: 'Jasmine rice with steam meatloaf, grilled pork, fried eggs, shredded pork',
          imagePath: 'assets/pics/comTham.jpg'
        },

        {
          name:'testing',
          description: 'testing',
          imagePath: null
        }
      ]
    }
  }

}
