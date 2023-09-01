import { AuthLayout } from 'layouts';
import { LoginPage } from 'pages/AuthPages';

const routesAuth = [
	{
		path: '/',
		layout: AuthLayout,
		component: LoginPage,
	},
];

export default routesAuth;
