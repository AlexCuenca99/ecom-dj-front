import { AuthLayout } from 'layouts';
import { LoginPage } from 'pages/AuthPages';
import {
	ActivateAccountPage,
	SignUpPage,
	ForgetPasswordPage,
	ResetPasswordConfirmPage,
} from 'pages/AnonymPage';

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
	{
		path: '/email/reset/confirm/:uid/:token',
		layout: AuthLayout,
		component: ResetPasswordConfirmPage,
	},
];

export default routesAnonym;
