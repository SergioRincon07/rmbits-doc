export const sidebarUser: SidebarPanelLateral[] = [
  {
    label: "Comienzo",
    items: [
      // Each item here is one entry in the navigation menu.
      { label: "Introducción", link: "/comienzo/introduccion/" },
      { label: "Ros2", link: "/comienzo/ros2/" },
    ],
  },
  {
    label: "Conceptos",
    items: [
      // Each item here is one entry in the navigation menu.
      { label: "Introducción", link: "/conceptos/introduccion/" },
      {
        label: "ROS",
        items: [
          { label: "Nodos", link: "/conceptos/ros2/nodos/" },
          { label: "Topicos", link: "/conceptos/ros2/topicos/" },
          { label: "ros2-control", link: "/conceptos/ros2/ros2control/" },
        ],
      },
    ],
  },
  {
    label: "Tutoriales",
    items: [
      // Each item here is one entry in the navigation menu.
      { label: "Introducción", link: "/tutoriales/introduccion/" },
      {
        label: "ROS",
        items: [
          { label: "Pendulo", link: "/tutoriales/ros2/pendulo/" },
          { label: "DiffBot", link: "/tutoriales/ros2/diffbot/" },
        ],
      },
    ],
  },
];
