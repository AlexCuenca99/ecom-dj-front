import { Fragment, useEffect, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { logout } from 'features/authentication/authenticationSlice';
import { useDispatch } from 'react-redux';
import {
	Cog8ToothIcon,
	ArrowLeftOnRectangleIcon,
	CubeIcon,
} from '@heroicons/react/24/outline';
import { map } from 'lodash';
import { useNavigate } from 'react-router-dom';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export function AuthNavMenu(props) {
	const { auth } = props;
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [menuOptions, setMenuOptions] = useState([]);

	useEffect(() => {
		setMenuOptions([
			{
				name: 'Dashboard',
				icon: CubeIcon,
				action: () => navigate('/dashboard'),
			},
			{
				name: 'Account settings',
				icon: Cog8ToothIcon,
				action: () => navigate('/account-settings'),
			},
			{
				name: 'Sign Out',
				icon: ArrowLeftOnRectangleIcon,
				action: () => dispatch(logout()),
			},
		]);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Menu as="div" className="relative inline-block text-left">
			<div>
				<Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
					<div className="flex flex-wrap justify-center gap-3">
						<div className="h-6 w-6">
							<img
								className="h-full w-full rounded-full object-cover object-center"
								src={auth.user.photo}
								alt={`${auth.user.first_name} ${auth.user.last_name}`}
							/>
						</div>
					</div>
					{auth.user.first_name}
					<ChevronDownIcon
						className="-mr-1 h-5 w-5 text-gray-400"
						aria-hidden="true"
					/>
				</Menu.Button>
			</div>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-3xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none cursor-pointer overflow-hidden">
					<div className="py-1">
						{map(menuOptions, (option, index) => (
							<Menu.Item key={index}>
								{({ active }) => (
									<div
										onClick={option.action}
										className={classNames(
											active
												? 'bg-gray-100 text-gray-900'
												: 'text-gray-700',
											'px-4 py-2 text-sm inline-flex items-center w-full'
										)}
									>
										<option.icon
											aria-hidden="true"
											className="mr-3 h-5 w-5"
										/>
										{option.name}
									</div>
								)}
							</Menu.Item>
						))}
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
}
