import React from 'react';

import { LoginForm } from 'features/authentication/components';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export function LoginPage() {
	const auth = useSelector((state) => state.authentication);

	const navigate = useNavigate();

	if (auth.isAuth) {
		navigate('/');
		return null;
	}

	return <LoginForm />;
}
