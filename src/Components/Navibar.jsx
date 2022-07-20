import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
const Navibar = () => {
	return (
		<Navbar bg='light' expand='lg'>
			<Container>
				<Link to='/' className='nav-link'>
					<Navbar.Brand>MedTrain</Navbar.Brand>
				</Link>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='me-auto'>
						<Link to='/search' className='nav-link'>
							Search for Clinic
						</Link>
						<Link to='/signup' className='nav-link'>
							Sign up
						</Link>
						<Link to='/signin' className='nav-link'>
							Sign in
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
