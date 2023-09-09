import React, { useState } from 'react';

import { HomeBanner, BannerPromo } from 'components';
import { ProductsCards } from 'features/products/components';

import { useListProductsQuery } from 'features/products/redux/productsApiSlice';

const preProducts = [
	{
		id: 1,
		name: 'Earthen Bottle',
		href: '#',
		price: '$48',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
		imageAlt:
			'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
	},
	{
		id: 2,
		name: 'Nomad Tumbler',
		href: '#',
		price: '$35',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
		imageAlt:
			'Olive drab green insulated bottle with flared screw lid and flat top.',
	},
	{
		id: 3,
		name: 'Focus Paper Refill',
		href: '#',
		price: '$89',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
		imageAlt:
			'Person using a pen to cross a task off a productivity paper card.',
	},
	{
		id: 4,
		name: 'Machined Mechanical Pencil',
		href: '#',
		price: '$35',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
		imageAlt:
			'Hand holding black machined steel mechanical pencil with brass tip and top.',
	},
	// More products...
];

export function HomePage() {
	const [limit, setLimit] = useState(4);
	const [offset, setOffset] = useState('');
	const [search, setSearch] = useState('');
	const [priceGte, setPriceGte] = useState('');
	const [priceGt, setPriceGt] = useState('');
	const [priceLte, setPriceLte] = useState('');
	const [priceLt, setPriceLt] = useState('');
	const [category, setCategory] = useState('');
	const [ordering, setOrdering] = useState('created');

	const {
		data: products,
		isLoading,
		isError,
		isFetching,
		currentData,
	} = useListProductsQuery({
		limit,
		offset,
		search,
		priceGte,
		priceGt,
		priceLte,
		priceLt,
		category,
		ordering,
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
			<ProductsCards products={products?.results} />
		</>
	);
}
