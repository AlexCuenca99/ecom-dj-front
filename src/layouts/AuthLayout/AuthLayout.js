import React from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { NavBar, Footer } from 'components';

export function AuthLayout(props) {
	const { children } = props;

	return (
		<>
			<NavBar />
			<ToastContainer autoClose={3000} />
			{children}
			<Footer />
		</>
	);
}
