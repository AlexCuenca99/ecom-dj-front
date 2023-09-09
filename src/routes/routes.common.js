import { AuthLayout } from 'layouts';
import { ShopPage, ProductDetailsPage } from 'pages/Common';

const routesCommon = [
	{
		path: '/shop',
		layout: AuthLayout,
		component: ShopPage,
	},
	{
		path: '/products/:id',
		layout: AuthLayout,
		component: ProductDetailsPage,
	},
];

export default routesCommon;
