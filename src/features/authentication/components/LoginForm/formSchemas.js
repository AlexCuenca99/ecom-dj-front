import * as Yup from 'yup';

export function initialValues() {
	return {
		email: '',
		password: '',
	};
}
export function validationSchema() {
	return {
		email: Yup.string().email().required('Email is a required field'),
		password: Yup.string()
			.required('Password is a required field')
			.min(
				8,
				'This password is too short. It must contain at least 8 characters.'
			),
	};
}
