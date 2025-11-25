export const DashboardMenu = [
  {
    id: 1,
    title: "My Dashboard",
    link: "/marketing/instructor/dashboard",
    icon: "home",
  },
  {
    id: 2,
    title: "Profile",
    link: "/marketing/instructor/profile",
    icon: "user",
  },
  {
    id: 3,
    title: "Instructor Verification",
    link: "/marketing/instructor/InstructorVerification",
    icon: "shield",
  },
  {
    id: 4,
    title: "Skills",
    link: "/marketing/instructor/Skillsform",
    icon: "award",
  },
  {
    id: 5,
    title: "My Courses",
    link: "/marketing/instructor/my-courses",
    icon: "book",
  },
  {
    id: 6,
    title: "Reviews",
    link: "/marketing/instructor/reviews",
    icon: "star",
  },
  {
    id: 7,
    title: "Earnings",
    link: "/marketing/instructor/earnings",
    icon: "dollar-sign",
  },
  // {
  //   id: 5,
  //   title: "Payment",
  //   link: "/marketing/instructor/InstructorPayment",
  //   icon: "credit-card",
  // },
  {
    id: 8,
    title: "Invoice",
    link: "/marketing/instructor/InstructorInvoice",
    icon: "file-text",
  },
  // {
  //   id: 4,
  //   title: "Orders",
  //   link: "/marketing/instructor/orders",
  //   icon: "shopping-bag",
  // },
  {
    id: 9,
    title: "Stulancers",
    link: "/marketing/instructor/students",
    icon: "users",
  },
  // {
  // 	id: 6,
  // 	title: 'Payouts',
  // 	link: '/marketing/instructor/payouts',
  // 	icon: 'dollar-sign'
  // },
  // {
  //   id: 7,
  //   title: "Quiz",
  //   link: "/marketing/instructor/quiz",
  //   icon: "clipboard",
  // },
  // {
  //   id: 8,
  //   title: "Quiz Result",
  //   link: "/marketing/instructor/quiz-result",
  //   icon: "check-circle",
  // },
  {
    id: 10,
    title: "Notifications",
    link: "/marketing/instructor/InstructorNotifications",
    icon: "bell",
  },
];

export const AccountSettingsMenu = [
  {
    id: 1,
    title: "Edit Profile",
    link: "/marketing/instructor/edit-profile",
    icon: "settings",
  },
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
    id: 6,
    title: "Delete Profile",
    link: "/marketing/instructor/delete-profile",
    icon: "trash",
  },
  {
    id: 6,
    title: "Sign Out",
    link: "/",
    icon: "power",
  },
];

export const InstructorDashboardMenu = [DashboardMenu, AccountSettingsMenu];

export default InstructorDashboardMenu;
