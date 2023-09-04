import React, { useEffect } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { NavBar, Footer } from 'components';

import { ACCESS_TOKEN } from 'utils/constanst';
import { useVerifyMutation } from 'features/authentication/authenticationApiSlice';
import { useGetMeMutation } from 'features/authentication/usersApiSlice';
import { login } from 'features/authentication/authenticationSlice';
import { useDispatch } from 'react-redux';

export function AuthLayout(props) {
	const { children } = props;

	const [verify] = useVerifyMutation();

	const dispatch = useDispatch();

	const [getMe] = useGetMeMutation();

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

	return (
		<>
			<NavBar />
			<ToastContainer autoClose={3000} />
			{children}
			<Footer />
		</>
	);
}
