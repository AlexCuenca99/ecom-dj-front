import React from 'react';

export function ImageGallery(props) {
	const { product } = props;

	return (
		<div className="flex flex-col-reverse">
			<div className="w-full aspect-w-1 aspect-h-1">
				<img
					src={product.photo}
					alt={product.name}
					className="w-full h-full object-center object-cover sm:rounded-lg"
				/>
			</div>
		</div>
	);
}
