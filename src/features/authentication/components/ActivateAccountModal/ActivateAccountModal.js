import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useActivateAccountMutation } from 'features/authentication/usersApiSlice';

export function ActivateAccountModal(props) {
	const { uid, token } = props;

	const [activateAccount, { isError, isSuccess, error }] =
		useActivateAccountMutation();

	useEffect(() => {
		activateAccount({ uid, token });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="container px-6 py-16 mx-auto text-center">
			<div className="max-w-lg mx-auto">
				<h1 className="text-3xl font-semibold text-gray-800 lg:text-4xl">
					{isSuccess ? 'Your account has been activated' : null}
					{isError ? 'Your account could not be activated' : null}
				</h1>
				<p className="mt-6 text-gray-500 ">
					{isSuccess ? 'Now you can log in to your account.' : null}
				</p>
				{isError ? (
					<div
						role="alert"
						class="rounded border-s-4 border-red-500 bg-red-50 p-4"
					>
						<strong class="block font-medium text-red-800">
							Something went wrong
						</strong>

						<p class="mt-2 text-sm text-red-700">
							{JSON.stringify(error.data.detail)}
						</p>
					</div>
				) : null}
				<Link
					to={isSuccess ? '/login' : isError ? '/signup' : null}
					className="mt-6 text-indigo-500"
				>
					{isSuccess ? 'Log-in' : null}
					{isError ? 'Sign-up' : null}
				</Link>
			</div>
		</div>
	);
}
