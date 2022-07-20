import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Navibar from '../Components/Navibar';

const Main_page = () => {
	return (
		<>
			<Navibar />
			<Outlet />
		</>
	);
};

export default Main_page;
