export interface Navbar {
  title: string;
  to?: string;
  href?: string;
  disable?: boolean;
  children?: Navbar[];
  action?: string;
  subject?: string;
  public?: boolean;
}
