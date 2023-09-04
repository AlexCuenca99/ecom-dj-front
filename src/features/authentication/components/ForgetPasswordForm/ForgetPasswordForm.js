import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';

export function ForgetPasswordForm() {
	const formik = useFormik({
		initialValues: initialValues(),
		validationSchema: Yup.object(validationSchema()),
		validateOnMount: true,
		validateOnBlur: true,
		validateOnChange: false,

		onSubmit: (formValues) => {
			console.log(formValues);
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
						<div
							role="alert"
							className="rounded border-s-4 border-red-500 bg-red-50 p-4"
						>
							<strong className="block font-medium text-red-800">
								Something went wrong
							</strong>

							<p className="mt-2 text-sm text-red-700">
								{JSON.stringify(error.data.detail)}
							</p>
						</div>
					) : null}

					<p className="mt-10 text-center text-sm text-gray-500">
						eComDJ Team
					</p>
				</div>
			</div>
		</>
	);
}

function initialValues() {
	return {
		email: '',
	};
}

function validationSchema() {
	return {
		email: Yup.string()
			.email('Invalid email address')
			.required('Email address is required'),
	};
}
