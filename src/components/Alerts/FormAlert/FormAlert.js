import React, { Fragment } from 'react';
import { Transition } from '@headlessui/react';

import { transitionClasses } from 'utils/transitions';
import { map } from 'lodash';

export function FormAlert(props) {
	const { title, message, type, showAlert } = props;

	return (
		<Transition show={showAlert} as={Fragment} {...transitionClasses}>
			<div
				role="alert"
				className={`rounded border-s-4 ${
					type === 'error'
						? 'border-red-500 bg-red-50 p-4'
						: type === 'success'
						? 'border-green-500 bg-green-50 p-4'
						: ''
				}`}
			>
				<strong
					className={`block font-medium ${
						type === 'error'
							? ' text-red-800'
							: type === 'success'
							? 'text-green-800'
							: ''
					}`}
				>
					{title}
				</strong>
				<ul className="space-y-3">
					{map(message, (item, index) => (
						<li
							key={index}
							className={`mt-2 flex gap-2 text-sm ${
								type === 'error'
									? 'text-red-700'
									: type === 'success'
									? 'text-green-700'
									: ''
							}`}
						>
							{type === 'error' ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-5 h-5"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
									/>
								</svg>
							) : type === 'success' ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-5 h-5"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							) : null}
							{item}
						</li>
					))}
				</ul>
			</div>
		</Transition>
	);
}
