import React from 'react';

import { BannerPromo } from 'components';
import { ProductsCards, BestSellingCards } from 'features/products/components';

import { useListProductsQuery } from 'features/products/redux/productsApiSlice';

export function HomePage() {
	// const [limit, setLimit] = useState(4);
	// const [offset, setOffset] = useState('');
	// const [search, setSearch] = useState('');
	// const [priceGte, setPriceGte] = useState('');
	// const [priceGt, setPriceGt] = useState('');
	// const [priceLte, setPriceLte] = useState('');
	// const [priceLt, setPriceLt] = useState('');
	// const [category, setCategory] = useState('');
	// const [ordering, setOrdering] = useState('created');

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
				btnAction={'/'}
				images={[]}
			/>
			<ProductsCards products={arrivalsProducts?.results} />
			<BestSellingCards products={bestSellingProducts?.results} />
		</>
	);
}
