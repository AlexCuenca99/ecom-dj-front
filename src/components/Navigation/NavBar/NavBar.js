import { Fragment, useEffect, useState } from 'react';
import { map } from 'lodash';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import {
	ArrowPathIcon,
	Bars3Icon,
	ChartPieIcon,
	CursorArrowRaysIcon,
	FingerPrintIcon,
	SquaresPlusIcon,
	XMarkIcon,
	MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import {
	ChevronDownIcon,
	PhoneIcon,
	PlayCircleIcon,
} from '@heroicons/react/20/solid';

import { AuthNavMenu } from 'features/authentication/components';
import { useListParentCategoriesMutation } from 'features/categories/redux/categoriesApiSlice';
import { useListProductsQuery } from 'features/products/redux/productsApiSlice';

const products = [
	{
		name: 'Analytics',
		description: 'Get a better understanding of your traffic',
		href: '#',
		icon: ChartPieIcon,
	},
	{
		name: 'Engagement',
		description: 'Speak directly to your customers',
		href: '#',
		icon: CursorArrowRaysIcon,
	},
	{
		name: 'Security',
		description: 'Your customers’ data will be safe and secure',
		href: '#',
		icon: FingerPrintIcon,
	},
	{
		name: 'Integrations',
		description: 'Connect with third-party tools',
		href: '#',
		icon: SquaresPlusIcon,
	},
	{
		name: 'Automations',
		description: 'Build strategic funnels that will convert',
		href: '#',
		icon: ArrowPathIcon,
	},
];
const callsToAction = [
	{ name: 'Watch demo', href: '#', icon: PlayCircleIcon },
	{ name: 'Contact sales', href: '#', icon: PhoneIcon },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export function NavBar() {
	const auth = useSelector((state) => state.authentication);
	const [parentCategories, setParentCategories] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
	const [category, setCategory] = useState('');
	const [fetch, setFetch] = useState(false);

	const [listParentCategories] = useListParentCategoriesMutation();
	const { data: productsData } = useListProductsQuery({
		limit: 4,
		search: searchTerm,
		category: category,
	});

	useEffect(() => {
		listParentCategories()
			.unwrap()
			.then((fullfilled) => {
				setParentCategories(fullfilled);
			})
			.catch((rejected) => {
				console.log(rejected);
			});
	}, []);

	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const handleSearch = () => {
		setFetch((prev) => !prev);
	};

	const handleSearchChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const handleCategoryChange = (e) => {
		setCategory(e.target.value);
	};

	return (
		<header className="bg-white">
			<nav
				className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
				aria-label="Global"
			>
				<div className="flex lg:flex-1">
					<Link to="/" className="-m-1.5 p-1.5">
						<span className="sr-only">Your Company</span>
						<img
							className="h-8 w-auto"
							src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
							alt=""
						/>
					</Link>
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon className="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
				<Popover.Group className="hidden lg:flex lg:gap-x-12">
					<Popover className="relative">
						<Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
							Product
							<ChevronDownIcon
								className="h-5 w-5 flex-none text-gray-400"
								aria-hidden="true"
							/>
						</Popover.Button>

						<Transition
							as={Fragment}
							enter="transition ease-out duration-200"
							enterFrom="opacity-0 translate-y-1"
							enterTo="opacity-100 translate-y-0"
							leave="transition ease-in duration-150"
							leaveFrom="opacity-100 translate-y-0"
							leaveTo="opacity-0 translate-y-1"
						>
							<Popover.Panel className="absolute -left-8 top-full z-20 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
								<div className="p-4">
									{products.map((item) => (
										<div
											key={item.name}
											className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
										>
											<div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
												<item.icon
													className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
													aria-hidden="true"
												/>
											</div>
											<div className="flex-auto">
												<a
													href={item.href}
													className="block font-semibold text-gray-900"
												>
													{item.name}
													<span className="absolute inset-0" />
												</a>
												<p className="mt-1 text-gray-600">
													{item.description}
												</p>
											</div>
										</div>
									))}
								</div>
								<div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
									{callsToAction.map((item) => (
										<a
											key={item.name}
											href={item.href}
											className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
										>
											<item.icon
												className="h-5 w-5 flex-none text-gray-400"
												aria-hidden="true"
											/>
											{item.name}
										</a>
									))}
								</div>
							</Popover.Panel>
						</Transition>
					</Popover>

					<Popover className="relative">
						<Popover.Button
							className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
							onClick={() => {
								setSearchTerm('');
								setCategory('');
							}}
						>
							Search
							<ChevronDownIcon
								className="h-5 w-5 flex-none text-gray-400"
								aria-hidden="true"
							/>
						</Popover.Button>

						<Transition
							as={Fragment}
							enter="transition ease-out duration-200"
							enterFrom="opacity-0 translate-y-1"
							enterTo="opacity-100 translate-y-0"
							leave="transition ease-in duration-150"
							leaveFrom="opacity-100 translate-y-0"
							leaveTo="opacity-0 translate-y-1"
						>
							<Popover.Panel className="absolute -left-8 top-full z-20 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
								<div className="p-4">
									<div className="p-4 space-y-5 w-full">
										<div>
											<label
												htmlFor="example10"
												className="mb-1 block text-sm font-medium text-gray-700"
											>
												Your search
											</label>
											<div className="relative">
												<div className="absolute inset-y-0 left-0 flex items-center text-gray-500">
													<label
														htmlFor="currency"
														className="sr-only"
													>
														Currency
													</label>
													<select
														id="currency"
														className="h-full rounded-md border-transparent bg-transparent py-0 pl-3 pr-7 text-gray-500 focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
														onChange={
															handleCategoryChange
														}
													>
														{map(
															parentCategories,
															(category) => (
																<option
																	key={
																		category.id
																	}
																	value={
																		category.id
																	}
																>
																	{
																		category.name
																	}
																</option>
															)
														)}
													</select>
												</div>
												<div
													className={classNames(
														searchTerm !== ''
															? 'cursor-pointer'
															: 'cursor-not-allowed',
														'absolute inset-y-0 right-0 flex items-center px-2.5'
													)}
													onClick={handleSearch}
												>
													<MagnifyingGlassIcon className="h-5 w-5 text-gray-700" />
												</div>
												<input
													onChange={
														handleSearchChange
													}
													type="text"
													id="example10"
													className="block w-full rounded-md border-gray-300 pl-32 pr-10 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
													placeholder="Search something..."
												/>
											</div>
										</div>
									</div>
								</div>
								{/* PRODUCT PREVIEW */}

								<div className="px-4">
									<ul className="px-4 -my-6 divide-y divide-gray-200">
										{productsData &&
											productsData.results.map(
												(product) => (
													<li
														key={product.id}
														className="flex py-6"
													>
														<div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
															<img
																src={
																	product.photo
																}
																alt={
																	product.name
																}
																className="h-full w-full object-cover object-center"
															/>
														</div>

														<div className="ml-4 flex flex-1 flex-col">
															<div>
																<div className="flex justify-between text-base font-medium text-gray-900">
																	<h3>
																		<a
																			href={
																				product.href
																			}
																		>
																			{
																				product.name
																			}
																		</a>
																	</h3>
																	<p className="ml-4">
																		{
																			product.price
																		}
																	</p>
																</div>
																<p className="mt-1 text-sm text-gray-500">
																	{
																		product.description
																	}
																</p>
															</div>
														</div>
													</li>
												)
											)}
									</ul>
								</div>

								{/* END PRODUCT PREVIEW */}
								<div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
									{callsToAction.map((item) => (
										<a
											key={item.name}
											href={item.href}
											className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
										>
											<item.icon
												className="h-5 w-5 flex-none text-gray-400"
												aria-hidden="true"
											/>
											{item.name}
										</a>
									))}
								</div>
							</Popover.Panel>
						</Transition>
					</Popover>

					<a
						href="#"
						className="text-sm font-semibold leading-6 text-gray-900"
					>
						Features
					</a>
					<a
						href="#"
						className="text-sm font-semibold leading-6 text-gray-900"
					>
						Marketplace
					</a>
				</Popover.Group>
				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					{auth.isAuth ? (
						<AuthNavMenu auth={auth} />
					) : (
						<Link
							to="/login"
							className="text-sm font-semibold leading-6 text-gray-900"
						>
							Login
							<span aria-hidden="true">&rarr;</span>
						</Link>
					)}
				</div>
			</nav>
			<Dialog
				as="div"
				className="lg:hidden"
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
			>
				<div className="fixed inset-0 z-10" />
				<Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between">
						<a href="#" className="-m-1.5 p-1.5">
							<span className="sr-only">Your Company</span>
							<img
								className="h-8 w-auto"
								src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
								alt=""
							/>
						</a>
						<button
							type="button"
							className="-m-2.5 rounded-md p-2.5 text-gray-700"
							onClick={() => setMobileMenuOpen(false)}
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-6">
								<Disclosure as="div" className="-mx-3">
									{({ open }) => (
										<>
											<Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
												Product
												<ChevronDownIcon
													className={classNames(
														open
															? 'rotate-180'
															: '',
														'h-5 w-5 flex-none'
													)}
													aria-hidden="true"
												/>
											</Disclosure.Button>
											<Disclosure.Panel className="mt-2 space-y-2">
												{[
													...products,
													...callsToAction,
												].map((item) => (
													<Disclosure.Button
														key={item.name}
														as="a"
														href={item.href}
														className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
													>
														{item.name}
													</Disclosure.Button>
												))}
											</Disclosure.Panel>
										</>
									)}
								</Disclosure>
								<a
									href="#"
									className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>
									Features
								</a>
								<a
									href="#"
									className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>
									Marketplace
								</a>
								<a
									href="#"
									className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>
									Company
								</a>
							</div>
							<div className="py-6">
								<Link
									to="/login"
									className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>
									{auth.isAuth ? (
										<AuthNavMenu auth={auth} />
									) : (
										'Login'
									)}
								</Link>
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	);
}
