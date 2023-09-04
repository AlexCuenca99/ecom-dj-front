import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { NavBar, Footer } from 'components';
import { ACCESS_TOKEN } from 'utils/constanst';
import { LoginPage } from 'pages/AuthPages';
import { login } from 'features/authentication/authenticationSlice';
import { useGetMeMutation } from 'features/authentication/usersApiSlice';
import { useVerifyMutation } from 'features/authentication/authenticationApiSlice';

import 'react-toastify/dist/ReactToastify.css';

export function AuthLayout(props) {
	const { children } = props;
	const auth = useSelector((state) => state.authentication);

	const [getMe] = useGetMeMutation();
	const [verify] = useVerifyMutation();

	const dispatch = useDispatch();

	useEffect(() => {
		let token = localStorage.getItem(ACCESS_TOKEN);
		token = { token: token };

		verify(token)
			.unwrap()
			.then((_) => {
				getMe(token['token'])
					.unwrap()
					.then((fullfilled) => {
						const loginPayload = { ...fullfilled };
						dispatch(login(loginPayload));
					})
					.catch((rejected) => {
						console.log(rejected);
					});
			})
			.catch((rejected) => {
				console.log(rejected);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	//if (!auth.isAuth) return <LoginPage />;

	return (
		<>
			<NavBar />
			<ToastContainer autoClose={3000} />
			{children}
			<Footer />
		</>
	);
}
