import React, { Fragment, useState } from 'react';
import * as Yup from 'yup';
import { map } from 'lodash';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

import { people } from 'utils/feeders';
import { FormAlert } from 'components';
import { validationSchema, initialValues } from './formSchemas';
import { ERROR_ALERT_TITLE, SUCCESS_ALERT_TITLE } from 'utils/constanst';
import { useAddUserMutation } from 'features/authentication/usersApiSlice';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export function SignUpForm() {
	const [addUser, { isLoading, isSuccess, isError, error }] =
		useAddUserMutation();

	const [showAlert, setShowAlert] = useState(false);

	const formik = useFormik({
		initialValues: initialValues(),
		validationSchema: Yup.object(validationSchema()),
		validateOnMount: true,
		validateOnBlur: true,
		validateOnChange: false,

		onSubmit: (formValues) => {
			console.log(formValues);
			addUser(formValues)
				.unwrap()
				.then((_) => {
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
						Sign up for an account
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

						{/* NAMES */}
						<div className="flex gap-x-5">
							<div>
								<label
									htmlFor="first_name"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									First name
								</label>
								<div className="mt-2">
									<input
										id="first_name"
										name="first_name"
										type="text"
										autoComplete="first_name"
										value={formik.values.first_name}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										required
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
								{formik.touched.first_name &&
								formik.errors.first_name ? (
									<div className="mt-2 text-sm text-red-600">
										{formik.errors.first_name}
									</div>
								) : null}
							</div>
							<div>
								<label
									htmlFor="last_name"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Last name
								</label>
								<div className="mt-2">
									<input
										id="last_name"
										name="last_name"
										type="text"
										autoComplete="last_name"
										value={formik.values.last_name}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										required
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
								{formik.touched.last_name &&
								formik.errors.last_name ? (
									<div className="mt-2 text-sm text-red-600">
										{formik.errors.last_name}
									</div>
								) : null}
							</div>
						</div>
						{/* END NAMES */}

						{/* USERNAME  */}
						<div>
							<label
								htmlFor="username"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Username
							</label>
							<div className="mt-2">
								<input
									id="username"
									name="username"
									type="text"
									autoComplete="username"
									value={formik.values.username}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									required
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
							{formik.touched.username &&
							formik.errors.username ? (
								<div className="mt-2 text-sm text-red-600">
									{formik.errors.username}
								</div>
							) : null}
						</div>
						{/* END USERNAME */}
						{/* BIRTH AND GENDER */}
						<div className="grid grid-flow-col justify-stretch gap-5">
							<div>
								<label
									htmlFor="birth"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Birth date
								</label>
								<div className="mt-2">
									<input
										id="birth"
										name="birth"
										type="date"
										autoComplete="birth"
										value={formik.values.birth}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										required
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
								{formik.touched.birth && formik.errors.birth ? (
									<div className="mt-2 text-sm text-red-600">
										{formik.errors.birth}
									</div>
								) : null}
							</div>
							<div>
								<Listbox
									required
									name="gender"
									value={formik.values.gender}
									onChange={(e) => {
										formik.setFieldValue('gender', e.value);
									}}
									onBlur={formik.handleBlur}
								>
									{({ open }) => (
										<>
											<Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">
												Gender
											</Listbox.Label>
											<div className="relative mt-2">
												<Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
													<span className="flex items-center">
														<span className="block truncate">
															{formik.values
																.gender ||
																'Select a option'}
														</span>
													</span>
													<span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
														<ChevronUpDownIcon
															className="h-5 w-5 text-gray-400"
															aria-hidden="true"
														/>
													</span>
												</Listbox.Button>

												<Transition
													show={open}
													as={Fragment}
													leave="transition ease-in duration-100"
													leaveFrom="opacity-100"
													leaveTo="opacity-0"
												>
													<Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
														{map(
															people,
															(person) => (
																<Listbox.Option
																	key={
																		person.id
																	}
																	className={({
																		active,
																	}) =>
																		classNames(
																			active
																				? 'bg-indigo-600 text-white'
																				: 'text-gray-900',
																			'relative cursor-default select-none py-2 pl-3 pr-9'
																		)
																	}
																	value={
																		person
																	}
																>
																	{({
																		selected,
																		active,
																	}) => (
																		<>
																			<div className="flex items-center">
																				<span
																					className={classNames(
																						selected
																							? 'font-semibold'
																							: 'font-normal',
																						'ml-3 block truncate'
																					)}
																				>
																					{
																						person.text
																					}
																				</span>
																			</div>

																			{selected ? (
																				<span
																					className={classNames(
																						active
																							? 'text-white'
																							: 'text-indigo-600',
																						'absolute inset-y-0 right-0 flex items-center pr-4'
																					)}
																				>
																					<CheckIcon
																						className="h-5 w-5"
																						aria-hidden="true"
																					/>
																				</span>
																			) : null}
																		</>
																	)}
																</Listbox.Option>
															)
														)}
													</Listbox.Options>
												</Transition>
											</div>
										</>
									)}
								</Listbox>
							</div>
							{formik.errors.gender ? (
								<div className="mt-2 text-sm text-red-600">
									{formik.errors.gender}
								</div>
							) : null}
						</div>

						{/* END BIRTH AND GENDER */}

						{/* PASSWORDS */}
						<div>
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
							{formik.touched.password &&
							formik.errors.password ? (
								<div className="mt-2 text-sm text-red-600">
									{formik.errors.password}
								</div>
							) : null}
						</div>
						<div>
							<div className="flex items-center justify-between">
								<label
									htmlFor="re_password"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Repeat password
								</label>
							</div>
							<div className="mt-2">
								<input
									id="re_password"
									name="re_password"
									type="password"
									autoComplete="current-password"
									value={formik.values.re_password}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									required
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
							{formik.touched.re_password &&
							formik.errors.re_password ? (
								<div className="mt-2 text-sm text-red-600">
									{formik.errors.re_password}
								</div>
							) : null}
						</div>
						{/* END PASSWORDS */}

						<div>
							<button
								disabled={isLoading}
								type="submit"
								className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								{isLoading ? (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="animate-spin w-6 h-6"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z"
										/>
									</svg>
								) : null}
								Sign up
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
					{isSuccess ? (
						<FormAlert
							title={SUCCESS_ALERT_TITLE}
							message={[
								'A confirmation email has been sent to your email',
							]}
							type="success"
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
