import { Routes, Route } from 'react-router-dom';

import { Contacts } from './pages/Contacts/Contacts';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Contacts />}>
				<Route path='cities' element={<Contacts />} />
				<Route path='properties' element={<Contacts />} />
				<Route path='blog' element={<Contacts />} />
				<Route path='video' element={<Contacts />} />
				<Route path='contacts' element={<Contacts />} />
				<Route path='log-in' element={<Contacts />} />
				<Route path='sign-up' element={<Contacts />} />
				<Route path='privacy' element={<Contacts />} />
			</Route>
		</Routes>
	);
};

export default App;
