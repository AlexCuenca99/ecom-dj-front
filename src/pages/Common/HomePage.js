import React from 'react';

import { BannerPromo } from 'components';
import { ProductsCards, BestSellingCards } from 'features/products/components';

import { useListProductsQuery } from 'features/products/redux/productsApiSlice';

export function HomePage() {
	const {
		data: arrivalsProducts,
		isLoading,
		isError,
		isFetching,
	} = useListProductsQuery({
		limit: 4,
		offset: '',
		search: '',
		priceGte: '',
		priceGt: '',
		priceLte: '',
		priceLt: '',
		category: '',
		ordering: 'created',
	});

	const { data: bestSellingProducts } = useListProductsQuery({
		limit: 3,
		offset: '',
		search: '',
		priceGte: '',
		priceGt: '',
		priceLte: '',
		priceLt: '',
		category: '',
		ordering: '-sold',
	});

	return (
		<>
			<BannerPromo
				mainText={'Take control of your team.'}
				subText={
					'Start building for free, then add a site plan to go live. Account plans unlock additional features.'
				}
				btnTitle={'Shop'}
				btnAction={'/shop'}
				images={[]}
			/>
			<ProductsCards products={arrivalsProducts?.results} />
			<BestSellingCards products={bestSellingProducts?.results} />
		</>
	);
}
