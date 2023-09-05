import React from 'react';

export function FormAlert(props) {
	const { title, message, type } = props;

	return (
		<div
			role="alert"
			className={`rounded border-s-4 ${
				type === 'error'
					? 'border-red-500'
					: type === 'success'
					? 'border-green-500'
					: ''
			} bg-red-50 p-4`}
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
			<p
				className={`mt-2 text-sm ${
					type === 'error'
						? 'text-red-700'
						: type === 'sucess'
						? 'text-green-700'
						: ''
				}`}
			>
				{message}
			</p>
		</div>
	);
}
