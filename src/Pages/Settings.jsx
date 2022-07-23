import { Container, Button } from 'react-bootstrap';

const Settings = () => {
	return (
		<div className='d-flex flex-column ' style={{ height: '90vh' }}>
			<Container
				style={{ marginTop: '100px', height: '60vh' }}
				className='d-flex flex-column align-items-center'
			>
				<h1>Settings</h1>
				<div
					className='d-flex flex-column justify-content-around'
					style={{ width: '60%', height: '50%' }}
				>
					<Button style={{ backgroundColor: 'white', color: 'black' }}>
						Change Password
					</Button>
					<Button style={{ backgroundColor: 'white', color: 'black' }}>
						Delete Account
					</Button>
					<Button style={{ backgroundColor: 'white', color: 'black' }}>
						Contact Us
					</Button>
				</div>
			</Container>
		</div>
	);
};

export default Settings;
