import React from 'react';

import { HomeBanner } from 'components';

export function HomePage() {
	return (
		<>
			<HomeBanner
				mainText={'Take control of your team.'}
				subText={
					'Start building for free, then add a site plan to go live. Account plans unlock additional features.'
				}
				sectionTitle={'Pricing'}
			/>
			<h1>Home Page</h1>
		</>
	);
}
