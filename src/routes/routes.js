import routesAuth from 'routes/routes.auth';
import routesAnonym from 'routes/routes.anonym';
import routesCommon from 'routes/routes.common';

import { Error404Page } from 'pages/Errors';
import { Error404Layout } from 'layouts';

const routes = [
	...routesAuth,
	...routesAnonym,
	...routesCommon,
	{ path: '*', layout: Error404Layout, component: Error404Page },
];

export default routes;
