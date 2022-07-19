import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import steth from './Asset/Stethascope.png';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const App = () => {
	const [show_red, set_red] = useState(false);

	useEffect(() => {}, []);

	const start_timer = () => {};

	//start refresh
	return (
		<div className='App'>
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
			<div
				className='px-4 pt-5 d-flex align-items-center justify-content-center'
				style={{
					backgroundImage: `url(${steth})`,
					minHeight: '60vh',
					backgroundSize: '1650px 584px',
					backgroundRepeat: 'none',
				}}
			>
				<div style={{ minWidth: '100%', marginTop: '-10%' }}>
					<h1 className='display-4 fw-bold'>Medical Train</h1>
					<div className='col-lg-6 mx-auto'>
						<p className='lead mb-4'>
							Quickly find an avaliable walk-in clinic, With appointments or
							current wait times
							<p className='mb-4' style={{ color: 'red', marginTop: '-5px' }}>
								For emergencies please contact your local emergency services
							</p>
						</p>

						<div className='d-grid gap-2 d-sm-flex justify-content-sm-center mb-5'>
							<button type='button' className='btn btn-success btn-lg px-4'>
								Find Nearby Clinic
							</button>
							<button
								type='button'
								className='btn btn-primary btn-lg px-4 me-sm-3'
							>
								Sign Up Your Clinic
							</button>
						</div>
					</div>
					<div className='overflow-hidden'>
						<div className='container px-5'></div>
					</div>
				</div>
			</div>
			<Container>
				<h1 className='display-4 fw-bold' style={{ marginTop: '20px' }}>
					Find Nearest Clinics
				</h1>
				<input
					type='text'
					class='form-control'
					placeholder='Search your home address, or City center (CANADA, USA)'
					aria-label='Search your home address'
					aria-describedby='basic-addon2'
					style={{ marginTop: '30px' }}
				></input>
			</Container>
			<Container>
				<div
					style={{
						borderStyle: 'solid',
						borderWidth: '1px',
						borderRadius: '3px',
						margin: '1%',
						minHeight: '10vh',
						padding: '10px',
						marginBottom: '50px',
					}}
					className='d-flex align-items-start justify-content-around'
				>
					<p className='text_size'>Walkin Clinic, Joe Bob</p>
					<div>
						<p className='text_size'>Wait time</p>
						<p className='text_size color_green'>2 Hr</p>
					</div>
					<div>
						<p className='text_size'>Appointments avaliable</p>
						<p className='text_size color_green'>10</p>
					</div>

					<div>
						<p className='text_size'>Distance from you</p>
						<p className='text_size color_green'>100 KM</p>
					</div>

					<div className='d-flex flex-column'>
						<a
							className='text_size link'
							href={`https://www.google.com/maps/place/${
								'6129' +
								'+' +
								'River' +
								'+' +
								'Rd' +
								',' +
								'+' +
								'Port' +
								'+' +
								'Alberni' +
								',' +
								'+' +
								'BC'
							}`}
							target='_blank'
							rel='noreferrer'
						>
							6129 River Rd, Port Alberni, BC
						</a>
						<a className='text_size link' href={`tel:+${7789527551}`}>
							7789527551
						</a>
					</div>
				</div>
			</Container>
			<div
				style={{
					backgroundImage: `url(${steth})`,
					minHeight: '60vh',
					backgroundSize: '1650px 584px',
					backgroundRepeat: 'none',
				}}
			>
				<Container>
					<h1 className='display-4 fw-bold' style={{ paddingTop: '50px' }}>
						Update wait time/ Appointment Time
					</h1>
					<div
						className='d-flex justify-content-around'
						style={{ width: '100%', marginTop: '80px' }}
					>
						<div
							className='d-flex align-items-start flex-column'
							style={{ width: '30%' }}
						>
							<div>Current Wait Time:</div>
							<div>1 Hr</div>
							<div>Wait time:</div>
							<input
								type='text'
								class='form-control'
								placeholder='Wait time in seconds'
								aria-label='Set wait time'
							></input>
							<button
								type='button'
								className='btn btn-success btn-md px-4 me-sm-3'
								style={{ marginTop: '10px' }}
							>
								Update
							</button>
							<div className='d-flex' style={{ marginTop: '20px' }}>
								<div>Time Since Last Update:</div> <div> 40min</div>
							</div>
						</div>
						<div
							className='d-flex align-items-start flex-column'
							style={{ width: '30%' }}
						>
							<div>Current Appointments Avaliable:</div>
							<div>12</div>
							<div>Appointment avaliable:</div>
							<input
								type='text'
								class='form-control'
								placeholder='Wait time in seconds'
								aria-label='Set wait time'
							></input>
							<button
								type='button'
								className='btn btn-success btn-md px-4 me-sm-3'
								style={{ marginTop: '10px' }}
							>
								Update
							</button>
							<div className='d-flex' style={{ marginTop: '20px' }}>
								<div>Time Since Last Update:</div> <div> 40min</div>
							</div>
						</div>
					</div>
				</Container>
			</div>
		</div>
	);
};

export default App;
