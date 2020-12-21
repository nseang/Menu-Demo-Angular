export interface Menu {
  section: MenuSection;
}

export interface MenuSection {
  sectionName: string;
  menuItems: MenuItem[];
}

export interface MenuItem {
  name: string;
  description: string;
  imagePath: string;
}