import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';

const Navibar = () => {
	const navigate = useNavigate();

	return (
		<Navbar bg='light' expand='lg'>
			<Container>
				<Link to='/' className='nav-link'>
					<Navbar.Brand>MedTrain</Navbar.Brand>
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
						<Link to='/settings' className='nav-link'>
							Settings
						</Link>
						<NavDropdown title='Legalise' id='basic-nav-dropdown'>
							<Nav.Link>Terms and Conditions</Nav.Link>
							<Nav.Link>Privacy</Nav.Link>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Navibar;
