import { flatMap, isEmpty } from 'lodash';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const categoryApiSlice = createApi({
	reducerPath: 'categoryApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `${process.env.REACT_APP_BASE_API_URL}/api/v1/`,
		prepareHeaders: (headers) => {
			headers.set('Content-Type', 'application/json');
			headers.set('Accept', 'application/json');
			return headers;
		},
	}),
	tagTypes: ['Category'],
	endpoints: (builder) => ({
		addCategory: builder.mutation({
			query(body) {
				return {
					url: 'category/',
					method: 'POST',
					body: JSON.stringify(body),
				};
			},
			transformErrorResponse: (response, meta, arg) => {
				return flatMap(response.data, (error) => error);
			},
		}),

		listParentCategories: builder.mutation({
			query(idCategories) {
				const filterByIdParam = !idCategories
					? ''
					: isEmpty(idCategories)
					? ''
					: `id=${idCategories.join(',')}`;

				return {
					url: `categories/parents/?${filterByIdParam}`,
					method: 'GET',
				};
			},
			transformErrorResponse: (response, meta, arg) => {
				return flatMap(response.data, (error) => error);
			},
		}),
		readParentCategory: builder.mutation({
			query(id) {
				return {
					url: `categories/${id}/parents/`,
					method: 'GET',
				};
			},
			transformErrorResponse: (response, meta, arg) => {
				return flatMap(response.data, (error) => error);
			},
		}),
	}),
});

export const {
	useAddCategoryMutation,
	useListParentCategoriesMutation,
	useReadParentCategoryMutation,
} = categoryApiSlice;
