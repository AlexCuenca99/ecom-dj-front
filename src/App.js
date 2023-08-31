import React from 'react';

import { Provider } from 'react-redux';
import store from 'app/store';

function App() {
	return (
		<Provider store={store}>
			<div className="text-amber-800 underline decoration-dotted">
				<p>Hola desde App</p>
			</div>
		</Provider>
	);
}

export default App;
