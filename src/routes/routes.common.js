import { AuthLayout } from 'layouts';
import { ShopPage } from 'pages/Common';

const routesCommon = [
	{
		path: '/shop',
		layout: AuthLayout,
		component: ShopPage,
	},
];

export default routesCommon;
