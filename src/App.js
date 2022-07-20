import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Sign_in from './Pages/Sign_in';
import Sign_up from './Pages/Sign_up';
import Main_page from './Pages/Main_page';
import Landing_page from './Pages/Landing_page';

const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Main_page />}>
						<Route index element={<Landing_page />} />
						<Route path='signin' element={<Sign_in />} />
						<Route path='signup' element={<Sign_up />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
