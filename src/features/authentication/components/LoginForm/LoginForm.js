import React, { useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { FormAlert } from 'components';
import { ERROR_ALERT_TITLE } from 'utils/constanst';
import { useGetMeMutation } from '../../usersApiSlice';
import { useSignInMutation } from '../../authenticationApiSlice';
import { login } from 'features/authentication/authenticationSlice';
import { initialValues, validationSchema } from './formSchemas';

export function LoginForm() {
	const [signIn, { isLoading, isError, error }] = useSignInMutation();
	const [getMe] = useGetMeMutation();

	const dispatch = useDispatch();

	const [showAlert, setShowAlert] = useState(false);

	const formik = useFormik({
		initialValues: initialValues(),
		validationSchema: Yup.object(validationSchema()),
		validateOnMount: true,
		validateOnBlur: true,
		validateOnChange: false,

		onSubmit: (formValues) => {
			signIn(formValues)
				.unwrap()
				.then((fullfilled) => {
					const { access, refresh } = fullfilled;

					const payload = { access, refresh };

					getMe(access)
						.unwrap()
						.then((fullfilled) => {
							const loginPayload = { ...fullfilled, ...payload };
							dispatch(login(loginPayload));
							setShowAlert(true);
							setTimeout(() => {
								setShowAlert(false);
							}, 4000);
							formik.resetForm();
						})
						.catch((_) => {
							setShowAlert(true);
							setTimeout(() => {
								setShowAlert(false);
							}, 4000);
						});

					dispatch(login(formValues));
				})
				.catch((_) => {
					setShowAlert(true);
					setTimeout(() => {
						setShowAlert(false);
					}, 4000);
				});
		},
	});

	return (
		<>
			<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<img
						className="mx-auto h-10 w-auto"
						src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
						alt="Your Company"
					/>
					<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
						Sign in to your account
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form className="space-y-6" onSubmit={formik.handleSubmit}>
						{/* EMAIL */}
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Email address
							</label>
							<div className="mt-2">
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									value={formik.values.email}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									required
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
							{formik.touched.email && formik.errors.email ? (
								<div className="mt-2 text-sm text-red-600">
									{formik.errors.email}
								</div>
							) : null}
						</div>
						{/* END EMAIL */}

						{/* PASSWORDS */}
						<div className="flex items-center justify-between">
							<label
								htmlFor="password"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Password
							</label>
							<div className="text-sm">
								<Link
									to="/forget-password"
									className="font-semibold text-indigo-600 hover:text-indigo-500"
								>
									Forgot password?
								</Link>
							</div>
						</div>
						<div className="mt-2">
							<input
								id="password"
								name="password"
								type="password"
								autoComplete="current-password"
								value={formik.values.password}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								required
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>
						{formik.touched.password && formik.errors.password ? (
							<div className="mt-2 text-sm text-red-600">
								{formik.errors.password}
							</div>
						) : null}

						{/* END PASSWORDS */}

						<div>
							<button
								disabled={isLoading}
								type="submit"
								className="flex w-full justify-center rounded-md capitalize bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								{isLoading ? (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										className="animate-spin w-6 h-6"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z"
										/>
									</svg>
								) : null}
								Sign-in
							</button>
						</div>
					</form>
					{isError ? (
						<FormAlert
							title={ERROR_ALERT_TITLE}
							message={error}
							type="error"
							showAlert={showAlert}
						/>
					) : null}

					<p className="mt-10 text-center text-sm text-gray-500">
						eComDJ Team
					</p>
				</div>
			</div>
		</>
	);
}
