import { AuthLayout } from 'layouts';
import { HomePage } from 'pages/Common';

const routesAuth = [
	{
		path: '/',
		layout: AuthLayout,
		component: HomePage,
	},
];

export default routesAuth;
