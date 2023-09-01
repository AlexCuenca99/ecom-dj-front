import React from 'react';

import { Provider } from 'react-redux';
import store from 'app/store';
import { Navigation } from 'routes';

function App() {
	return (
		<Provider store={store}>
			<Navigation />
		</Provider>
	);
}

export default App;
