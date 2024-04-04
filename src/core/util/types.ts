type SidebarItem = {
  label: string;
  link: string;
};

type SidebarGroup = {
  label: string;
  items: SidebarItem[];
};

type SidebarPanelLateral = {
  label: string;
  items: (SidebarItem | SidebarGroup)[];
};
