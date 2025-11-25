import { v4 as uuid } from "uuid";

export const BestSellingCoursesData = [
  // {
  // 	id: uuid(),
  // 	image: '/images/course/course-gatsby.jpg',
  // 	title: 'Revolutionize how you build the web',
  // 	sales: 34,
  // 	amount: 3145.23
  // },
  {
    id: uuid(),
    image: "/images/course/course-react.jpg",
    title: "Building Static Websites with React",
    sales: 30,
    amount: 2611.82,
  },
  {
    id: uuid(),
    image: "/images/course/course-html.jpg",
    title: "The Modern HTML Courses",
    sales: 26,
    amount: 2372.19,
  },
  {
    id: uuid(),
    image: "/images/course/course-javascript.jpg",
    title: "Courses JavaScript Heading Title",
    sales: 20,
    amount: 1145.23,
  },
];

export default BestSellingCoursesData;
