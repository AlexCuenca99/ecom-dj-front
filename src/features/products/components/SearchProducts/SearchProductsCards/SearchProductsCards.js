import React from 'react';
import { SearchProductsCard } from '../index';

export function SearchProductsCards(props) {
	const { products } = props;
	return (
		<ul className="px-4 -my-4">
			{products &&
				products.results.map((product) => (
					<SearchProductsCard key={product.id} product={product} />
				))}
		</ul>
	);
}
