
interface MenuItem {
  title: string;
  path: string;
  has_submenu?: boolean;
  sub_menus?: {
    title: string;
    path: string;
    has_inner_submenu?: boolean;
    noBorder?: boolean;
    sub_menus?: { title: string; path: string; }[];
  }[];
  noBorder?: boolean;
}[];

const menu_data: MenuItem[] = [
  { title: "Home", has_submenu: false, path: "#home" },
  { title: "Features", has_submenu: false, path: "#features" },
  { title: "About", has_submenu: false, path: "#about" },
  { title: "Integrations", has_submenu: false, path: "#integrations" },
  { title: "Testimonials", has_submenu: false, path: "#testimonials" },
  { title: "FAQ", has_submenu: false, path: "#faq" },
];


export default menu_data;