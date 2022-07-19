import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Image } from 'react-bootstrap';

const App = () => {
	return (
		<div className='App'>
			<Navbar bg='light' expand='lg'>
				<Container>
					<Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='me-auto'>
							<Nav.Link href='#home'>Home</Nav.Link>
							<Nav.Link href='#link'>Link</Nav.Link>
							<NavDropdown title='Dropdown' id='basic-nav-dropdown'>
								<NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
								<NavDropdown.Item href='#action/3.2'>
									Another action
								</NavDropdown.Item>
								<NavDropdown.Item href='#action/3.3'>
									Something
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href='#action/3.4'>
									Separated link
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<div className='px-4 pt-5 my-5 text-center border-bottom'>
				<h1 className='display-4 fw-bold'>Medical Train</h1>
				<div className='col-lg-6 mx-auto'>
					<p className='lead mb-4'>
						Quickly find an avaliable walk-in clinic, With appointments or
						current wait times
					</p>
					<div className='d-grid gap-2 d-sm-flex justify-content-sm-center mb-5'>
						<button
							type='button'
							className='btn btn-primary btn-lg px-4 me-sm-3'
						>
							Sign Up Your Clinic
						</button>
						<button
							type='button'
							className='btn btn-outline-secondary btn-lg px-4'
						>
							Find Near by Clinic
						</button>
					</div>
				</div>
				<div className='overflow-hidden'>
					<div className='container px-5'></div>
				</div>
			</div>
			<Container>
				<Image></Image>
				<Image></Image>
				<Image></Image>
			</Container>
		</div>
	);
};

export default App;
