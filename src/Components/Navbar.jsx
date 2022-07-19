import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navibar = () => {
	return (
		<Navbar bg='light' expand='lg'>
			<Container>
				<Navbar.Brand href='#home'>MedTrain</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='me-auto'>
						<Nav.Link href='#action/3.1'>Search for Clinic</Nav.Link>
						<Nav.Link href='#action/3.2'>Sign up</Nav.Link>
						<Nav.Link href='#action/3.2'>Sign in</Nav.Link>
						<NavDropdown title='Legalise' id='basic-nav-dropdown'>
							<Nav.Link href='#action/3.4'>Terms and Conditions</Nav.Link>
							<Nav.Link href='#action/3.4'>Privacy</Nav.Link>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Navbar;
