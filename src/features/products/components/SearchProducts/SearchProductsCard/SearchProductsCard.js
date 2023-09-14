import React from 'react';

export function SearchProductsCard(props) {
	const { product } = props;
	return (
		<li className="flex py-6">
			<div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
				<img
					src={product.photo}
					alt={product.name}
					className="h-full w-full object-cover object-center"
				/>
			</div>

			<div className="ml-4 flex flex-1 flex-col">
				<div>
					<div className="flex justify-between text-base font-medium text-gray-900">
						<h3>
							<a href={product.href}>{product.name}</a>
						</h3>
						<p className="ml-4">{product.price}</p>
					</div>
					<p className="mt-1 text-sm text-gray-500">
						{product.description}
					</p>
				</div>
			</div>
		</li>
	);
}
