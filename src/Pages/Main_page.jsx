import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Navibar from '../Components/Navibar';
import Footer from './Footer';
const Main_page = () => {
	const logged_in_bool = false;
	return (
		<>
			<Navibar />
			<Outlet />
			{logged_in_bool ? <></> : <Footer />}
		</>
	);
};

export default Main_page;
