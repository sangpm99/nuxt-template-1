export interface Navbar {
  title: string;
  to?: {
    name: string;
  };
  href?: string;
  disable?: boolean;
  children?: Navbar[];
  action?: string;
  subject?: string;
  public?: boolean;
}
