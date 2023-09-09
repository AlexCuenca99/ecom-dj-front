import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApiSlice = createApi({
	reducerPath: 'productApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `${process.env.REACT_APP_BASE_API_URL}/api/v1/`,
		prepareHeaders: (headers) => {
			headers.set('Content-Type', 'application/json');
			headers.set('Accept', 'application/json');
			return headers;
		},
	}),
	tagTypes: ['Product'],
	endpoints: (builder) => ({
		listProducts: builder.query({
			query({
				limit = '',
				offset = '',
				search = '',
				price__gte = '',
				price__gt = '',
				price__lte = '',
				price__lt = '',
				category = '',
				ordering = '',
			}) {
				return {
					url: `products/?limit=${limit}&offset=${offset}&search=${search}&price__gte=${price__gte}&price__gt=${price__gt}&price__lte=${price__lte}&price__lt=${price__lt}&category=${category}&ordering=${ordering}`,
					method: 'GET',
				};
			},
		}),
		readProduct: builder.query({
			query(id) {
				return {
					url: `products/${id}`,
					method: 'GET',
				};
			},
		}),

		listRelatedProducts: builder.query({
			query(id) {
				return {
					url: `products/${id}/related-products/`,
					method: 'GET',
				};
			},
		}),
	}),
});

export const {
	useListProductsQuery,
	useReadProductQuery,
	useListRelatedProductsQuery,
} = productApiSlice;
