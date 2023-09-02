import React from 'react';

import { ActivateAccountModal } from 'features/authentication/components';
import { useParams } from 'react-router-dom';

export function ActivateAccountPage() {
	const { uid, token } = useParams();

	return <ActivateAccountModal uid={uid} token={token} />;
}
