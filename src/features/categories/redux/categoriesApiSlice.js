import { flatMap } from 'lodash';
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
			query() {
				return {
					url: 'categories/parents/',
					method: 'GET',
				};
			},
			transformErrorResponse: (response, meta, arg) => {
				return flatMap(response.data, (error) => error);
			},
		}),
	}),
});

export const { useAddCategoryMutation, useListParentCategoriesMutation } =
	categoryApiSlice;