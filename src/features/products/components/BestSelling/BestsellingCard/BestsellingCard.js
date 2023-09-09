import React from 'react';

export function BestSellingCard(props) {
	const { product } = props;

	return (
		<div key={product.id} className="group relative">
			<div className="w-full h-96 rounded-lg overflow-hidden group-hover:opacity-75 sm:h-auto sm:aspect-w-2 sm:aspect-h-3">
				<img
					src={product.imageSrc}
					alt={product.imageAlt}
					className="w-full h-full object-center object-cover"
				/>
			</div>
			<h3 className="mt-4 text-base font-semibold text-gray-900">
				<a href={product.href}>
					<span className="absolute inset-0" />
					{product.name}
				</a>
			</h3>
			<p className="mt-1 text-sm text-gray-500">{product.price}</p>
		</div>
	);
}
