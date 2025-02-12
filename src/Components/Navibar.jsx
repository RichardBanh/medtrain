import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { current_user } from '../Amplify_Account_FUNCTIONS/current_account';
const Navibar = () => {
	const navigate = useNavigate();
	const [is_authenticated, set_authenticated] = useState(false);

	const user_loggedin = async () => {
		const user = await current_user();
		if (user.success) {
			set_authenticated(true);
		}
	};

	useEffect(() => {
		user_loggedin();
	}, []);

	return (
		<Navbar bg='light' expand='lg'>
			<Container>
				<Link to='/' className='nav-link'>
					<Navbar.Brand style={{ fontWeight: 'bold' }}>MedTrain</Navbar.Brand>
				</Link>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='me-auto'>
						<div
							className='nav-link nav-link-custom-hover'
							onClick={() => {
								navigate('/search', {
									replace: false,
									state: { dedicated_page: true },
								});
							}}
						>
							Search for Clinic
						</div>
						<Link to='/signup' className='nav-link'>
							Sign up
						</Link>
						<Link to='/signin' className='nav-link'>
							Sign in
						</Link>
						{is_authenticated ? (
							<Link to='/settings' className='nav-link'>
								Settings
							</Link>
						) : (
							<></>
						)}
						<NavDropdown title='Legalise' id='basic-nav-dropdown'>
							<Link to='/terms' className='nav-link'>
								Terms and Conditions
							</Link>
							<Link to='/privacy' className='nav-link'>
								Privacy Policy
							</Link>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Navibar;
