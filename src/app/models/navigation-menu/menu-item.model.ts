export interface MenuItem {
  title: string;
  routerLink?: Array<string>;
  subitems?: Array<MenuItem>;
}
