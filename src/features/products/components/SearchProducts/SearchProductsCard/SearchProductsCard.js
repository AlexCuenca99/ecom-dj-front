import React from 'react';
import { Link } from 'react-router-dom';

export function SearchProductsCard(props) {
	const { product } = props;
	return (
		<Link to={`/products/${product.id}/`}>
			<li className="flex py-6 gap-x-6 rounded-lg p-4 hover:bg-gray-100">
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
							<h3>{product.name}</h3>
							<p className="ml-4">{product.price}</p>
						</div>
						<p className="mt-1 text-sm text-gray-500">
							{product.description}
						</p>
					</div>
				</div>
			</li>
		</Link>
	);
}
