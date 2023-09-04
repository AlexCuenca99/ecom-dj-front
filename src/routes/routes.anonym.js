import { AuthLayout } from 'layouts';
import { LoginPage } from 'pages/AuthPages';
import { ForgetPasswordPage } from 'pages/AnonymPage';
import { ActivateAccountPage, SignUpPage } from 'pages/AnonymPage';

const routesAnonym = [
	{
		path: '/login',
		layout: AuthLayout,
		component: LoginPage,
	},
	{
		path: '/signup',
		layout: AuthLayout,
		component: SignUpPage,
	},
	{
		path: '/activate/:uid/:token',
		layout: AuthLayout,
		component: ActivateAccountPage,
	},
	{
		path: '/forget-password',
		layout: AuthLayout,
		component: ForgetPasswordPage,
	},
];

export default routesAnonym;
