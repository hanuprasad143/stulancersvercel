import { v4 as uuid } from "uuid";

export const allpendingcourses = [
  {
    id: uuid(),
    title: "Web Application Design",
    category: "Web Design",
    projectbrief:
      "Web application design is an important stage when building a web application...",
    progress: "45",
     status: "Pending",
    duedate: "1 Jan, 2022",
    budget: 123000,
    icon: null,
    status:"Pending",
    coverimage: null,
    team: [1, 2, 3, 4, 5, 6, 7, 8], // it's team member's id taken from ProjectTeamMembersData.js
    groupgig: true,
  },
  {
    id: uuid(),
    title: "Task Application Development..",
    category: "Web Development",
    projectbrief:
      "Mauris quis nibh eu tortor blandit lacinia id sed ans dui turpis, semper ac turpis quis",
    progress: "12",
    status: "Pending",
    duedate: "-",
    budget: 0,
    icon: null,
    coverimage: null,
    team: [4, 5, 6, 7, 8, 9, 10, 11, 12],
    groupgig:false,
  },

  {
    id: uuid(),
    title: "CRM Dashjjboard",
    category: "Front End Development",
    projectbrief:
      "Quisque at augue convallis, tincidunt erat et, tristique ssa mollis dignissim eget",
    progress: "6",
    status: "Pending",
    duedate: "1 Sept, 2022",
    budget: 5200,
    icon: null,
    coverimage: null,
    team: [1, 2, 3, 4, 5, 6],
    groupgig:true
  },
  {
    id: uuid(),
    title: "Task Application Development..",
    category: "Web Development",
    projectbrief:
      "Mauris quis nibh eu tortor blandit lacinia id sed ans dui turpis, semper ac turpis quis",
    progress: "12",
    status: "Pending",
    duedate: "22 Sept, 2022",
    budget: 400,
    icon: null,
    coverimage: null,
    team: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    groupgig:false,
  },]

  export const allrejectedcourses = [

  {
    id: uuid(),
    title: "File Management App",
    category: "Web Design",
    projectbrief:
      "Quisque at augue convallis, tincidunt erat et, tristique ssa mollis dignissim eget",
    progress: "85",
     status: "In Progress",
    duedate: "25 Jan, 2022",
    budget: 2000,
    icon: "Rejected",
    coverimage: null,
    team: [1, 2, 3, 4, 5],
    groupgig:false,
  },]
  export const allapprovedcourses = [

  {
    id: uuid(),
    title: "Chat Application Design",
    category: "Web Design",
    projectbrief:
      "Nam gravida vestibulum justo, ac aliquet erat. Pellentesque vitae massa lacus.",
    progress: "95",
    status: "Live",
    duedate: "30 May, 2022",
    budget: 800,
    icon: "message-square",
    coverimage: null,
    team: [1, 2, 3, 4, 5, 6, 7],
    groupgig:false,
  },
  {
    id: uuid(),
    title: "E-Commerce Project",
    category: "Web Development",
    projectbrief:
      "Donec vel tellus nec purus mollis consequat sed at urna. In sit amet vehicula odio.",
    progress: "100",
    status: "Live",
    duedate: "31 June, 2022",
    budget: 253000,
    icon: "shopping-cart",
    coverimage: null,
    team: [10, 9, 3, 4, 5, 6, 7, 8],
    grpoupgig:true,
  },
  {
    id: uuid(),
    title: "Chat Application Design",
    category: "Web Design",
    projectbrief:
      "Nam gravida vestibulum justo, ac aliquet erat. Pellentesque vitae massa lacus.",
    progress: "95",
    status: "Live",
    duedate: "30 May, 2022",
    budget: 800,
    icon: "message-square",
    coverimage: null,
    team: [9, 1, 3, 4, 5, 6, 7],
    groupgig:true,
  },
  {
    id: uuid(),
    title: "CRM Dashboard",
    category: "Front End Development",
    projectbrief: "",
    progress: "100",
   status: "Finished",
    duedate: "1 Sept, 2022",
    budget: 5200,
    team: [10, 2, 3, 4, 5, 6, 7, 8, 9, 1, 11, 12],
    groupgig:false,
  },
]
  export const allcourses = [
  {
    id: uuid(),
    title: "Web Application Design",
    category: "Web Design",
    projectbrief:
      "Web application design is an important stage when building a web application...",
    progress: "45",
     status: "Live",
    duedate: "1 Jan, 2022",
    budget: 123000,
    icon: null,
    status:"Pending",
    coverimage: null,
    team: [1, 2, 3, 4, 5, 6, 7, 8], // it's team member's id taken from ProjectTeamMembersData.js
    groupgig:true,
  },
  {
    id: uuid(),
    title: "Task Application Development..",
    category: "Web Development",
    projectbrief:
      "Mauris quis nibh eu tortor blandit lacinia id sed ans dui turpis, semper ac turpis quis",
    progress: "12",
    status: "Pending",
    duedate: "-",
    budget: 0,
    icon: null,
    coverimage: null,
    team: [4, 5, 6, 7, 8, 9, 10, 11, 12],
    groupgig:false
  },

  {
    id: uuid(),
    title: "CRM Dashboard",
    category: "Front End Development",
    projectbrief:
      "Quisque at augue convallis, tincidunt erat et, tristique ssa mollis dignissim eget",
    progress: "6",
    status: "Pending",
    duedate: "1 Sept, 2022",
    budget: 5200,
    icon: null,
    coverimage: null,
    team: [1, 2, 3, 4, 5, 6],
    groupgig:true,
  },
  {
    id: uuid(),
    title: "Task Application Development..",
    category: "Web Development",
    projectbrief:
      "Mauris quis nibh eu tortor blandit lacinia id sed ans dui turpis, semper ac turpis quis",
    progress: "12",
    status: "Live",
    duedate: "22 Sept, 2022",
    budget: 400,
    icon: null,
    coverimage: null,
    team: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    groupgig:true,
  },    

  ];
  export const ProjectsGridData = [
    allcourses,
    allapprovedcourses,
    allpendingcourses,
    allrejectedcourses,
  ];

export default ProjectsGridData;
