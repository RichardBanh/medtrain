import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Sign_in from './Pages/Sign_in';
import Sign_up from './Pages/Sign_up';
import Main_page from './Pages/Main_page';
import Landing_page from './Pages/Landing_page';
import Clinic_section from './Pages/Clinic_section';

import Privacy from './Pages/Privacy';
import Terms from './Pages/Terms';

import Settings from './Pages/Settings';
import Change_password from './Pages/Change_password';
import Delete_account from './Pages/Delete_account';

const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Main_page />}>
						<Route index element={<Landing_page />} />
						<Route path='signin' element={<Sign_in />} />
						<Route path='signup' element={<Sign_up />} />
						<Route path='search' element={<Clinic_section />} />
						<Route path='privacy' element={<Privacy />} />
						<Route path='terms' element={<Terms />} />
						<Route path='settings' element={<Settings />} />
						<Route path='password' element={<Change_password />} />
						<Route path='delete' element={<Delete_account />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
