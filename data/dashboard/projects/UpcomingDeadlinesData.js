import { v4 as uuid } from 'uuid';

export const UpcomingDeadlinesData = [
	{
		id: uuid(),
		member: 'Eleanor Pena',
		memberimage: '/images/avatar/avatar-2.jpg',
		task: `Design a Stulancer UI Figma`,
		deadline: '30 Aug, 2025',
		workload: '62'
	},
	{
		id: uuid(),
		member: 'Marvin McKinney',
		memberimage: '/images/avatar/avatar-3.jpg',
		task: `Stulancer UI Webpack Workflow`,
		deadline: '24 Sept, 2025',
		workload: '45'
	},
	{
		id: uuid(),
		member: 'Wade Warren',
		memberimage: '/images/avatar/avatar-4.jpg',
		task: `Stulancer UI React version`,
		deadline: '30 Sept, 2025',
		workload: '80'
	},
	{
		id: uuid(),
		member: 'Courtney Henry',
		memberimage: '/images/avatar/avatar-5.jpg',
		task: `Stulancer UI Documents Improve`,
		deadline: '20 Dec, 2025',
		workload: '10'
	},
	// {
	// 	id: uuid(),
	// 	member: 'Brooklyn Simmons',
	// 	memberimage: '/images/avatar/avatar-6.jpg',
	// 	task: `Ecommerce Design Geeks UI`,
	// 	deadline: '25 Jan, 2025',
	// 	workload: '8'
	// }
];

export default UpcomingDeadlinesData;
