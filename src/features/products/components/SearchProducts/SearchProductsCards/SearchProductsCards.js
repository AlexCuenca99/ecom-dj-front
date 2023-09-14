import React from 'react';
import { SearchProductsCard } from '../index';

export function SearchProductsCards(props) {
	const { products } = props;
	return (
		<div className="px-4">
			<ul className="px-4 -my-6 divide-y divide-gray-200">
				{products &&
					products.results.map((product) => (
						<SearchProductsCard
							key={product.id}
							product={product}
						/>
					))}
			</ul>
		</div>
	);
}
