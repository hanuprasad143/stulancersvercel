// import { v4 as uuid } from "uuid";

export const DashboardMenu = [
  {
    id: 1,
    title: "My Dashboard",
    link: "/marketing/client/ClientDashboard",
    icon: "home",
  },
];

export const PostAProject = [
  {
    id: 1,
    title: "Create Project",
    link: "/marketing/client/createProject",
    icon: "plus",
  },
  {
    id: 2,
    title: "My Projects ",
    link: "/marketing/client/ActiveProjects",
    icon: "list",
  },
  {
    id: 3,
    title: "Hire Stulancer",
    link: "/marketing/client/HireStulancer",
    icon: "user-plus",
  },
  {
    id: 4,
    title: "Notifications",
    link: "/marketing/client/ClientNotifications",
    icon: "bell",
  },
];
export const MyProjects = [];
export const ProfileCard = [
  {
    id: 1,
    title: "Profile",
    link: "/marketing/client/ProfileDetails",
    icon: "user",
  },
  {
    id: 2,
    title: "Client Verification",
    link: "/marketing/client/ClientVerification",
    icon: "shield",
  },
  {
    id: 3,
    title: "Payment",
    link: "/marketing/client/ClientPayment",
    icon: "credit-card",
  },
  {
    id: 4,
    title: "Invoice",
    link: "/marketing/client/ClientInvoice",
    icon: "file-text",
  },
];

export const AccountSettingsMenu = [
  // {
  //   id: 1,
  //   title: "Edit Profile",
  //   link: "/marketing/instructor/edit-profile",
  //   icon: "settings",
  // },

  // {
  // 	id: 2,
  // 	title: 'Security',
  // 	link: '/marketing/instructor/security',
  // 	icon: 'user'
  // },
  // {
  // 	id: 3,
  // 	title: 'Social Profiles',
  // 	link: '/marketing/instructor/social-profiles',
  // 	icon: 'refresh-cw'
  // },
  // {
  // 	id: 4,
  // 	title: 'Notifications',
  // 	link: '/marketing/instructor/notifications',
  // 	icon: 'bell'
  // },
  // {
  // 	id: 5,
  // 	title: 'Profile Privacy',
  // 	link: '/marketing/instructor/profile-privacy',
  // 	icon: 'lock'
  // },
  {
    id: 1,
    title: "Delete Profile",
    link: "/marketing/client/delete",
    icon: "trash",
  },
  {
    id: 2,
    title: "Sign Out",
    link: "/",
    icon: "power",
  },
];

export const ClientDashboardMenu = [
  DashboardMenu,
  AccountSettingsMenu,
  PostAProject,
  // MyProjects,
  ProfileCard,
];

export default ClientDashboardMenu;
