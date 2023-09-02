import * as Yup from 'yup';

export function initialValues() {
	return {
		email: '',
		first_name: '',
		last_name: '',
		password: '',
		re_password: '',
		gender: '',
		birth: '',
		username: '',
	};
}
export function validationSchema() {
	return {
		email: Yup.string().email().required('Email is a required field'),
		first_name: Yup.string().required('First name is a required field'),
		last_name: Yup.string().required('Last name is a required field'),
		username: Yup.string().required('Username is a required field'),
		password: Yup.string()
			.required('Password is a required field')
			.min(
				8,
				'This password is too short. It must contain at least 8 characters.'
			),
		re_password: Yup.string()
			.required('Passwords must match')
			.oneOf([Yup.ref('password'), null], 'Passwords must match'),
		gender: Yup.string()
			.oneOf(['MAL', 'FEM'], null)
			.required('Gender is a required field'),
		birth: Yup.date().required('Birth is a required field'),
	};
}
