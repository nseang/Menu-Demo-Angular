export interface Menu {
  section: MenuSection;
}

export interface MenuSection {
  sectionName: string;
  sectionDescription?: string;
  menuItems: MenuItem[];
}

export interface MenuItem {
  title: string;
  subTitle?: string;
  description?: string;
  imagePath: string;
  price?: number;
  priceSM?: number;
  priceLG?: number;
}