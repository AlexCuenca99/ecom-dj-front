import React from 'react';
import { useListParentCategoriesQuery } from 'features/categories/redux/categoriesApiSlice';

export function HomePage() {
	const { data } = useListParentCategoriesQuery();

	console.log(data);
	return (
		<div>
			<h1>HomePage</h1>
		</div>
	);
}
