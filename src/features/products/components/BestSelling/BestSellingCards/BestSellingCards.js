import React from 'react';
import { map } from 'lodash';

import { BestSellingCard } from '../BestSellingCard';

export function BestSellingCards(props) {
	const { products } = props;

	return (
		<div className="bg-white">
			<div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
				<div className="sm:flex sm:items-baseline sm:justify-between">
					<h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
						Best Selling
					</h2>
					<a
						href="#"
						className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
					>
						Browse all favorites
						<span aria-hidden="true"> &rarr;</span>
					</a>
				</div>

				<div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:gap-x-8">
					{map(products, (product, index) => (
						<BestSellingCard key={index} product={product} />
					))}
				</div>

				<div className="mt-6 sm:hidden">
					<a
						href="#"
						className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
					>
						Browse all favorites
						<span aria-hidden="true"> &rarr;</span>
					</a>
				</div>
			</div>
		</div>
	);
}
