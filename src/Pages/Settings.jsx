import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
	const navigate = useNavigate();
	return (
		<div
			className='d-flex flex-column align-items-center justify-content-center'
			style={{ height: '90vh' }}
		>
			<Container
				style={{ marginTop: '100px', height: '60vh' }}
				className='d-flex flex-column align-items-center'
			>
				<h1>Settings</h1>
				<div
					className='d-flex flex-column justify-content-around align-items-center'
					style={{ width: '100%', height: '50%' }}
				>
					<Button
						style={{
							backgroundColor: 'white',
							color: 'black',
							minWidth: '400px',
						}}
						onClick={() => {
							navigate('/password');
						}}
					>
						Change Password
					</Button>
					<Button
						style={{
							backgroundColor: 'white',
							color: 'black',
							minWidth: '400px',
						}}
						onClick={() => {
							navigate('/delete');
						}}
					>
						Delete Account
					</Button>
					<a
						style={{
							backgroundColor: 'white',
							color: 'black',
							minWidth: '400px',
						}}
						className='btn btn-primary'
						type='button'
						href='mailto: contact@strukt.ca'
						value='Contact Us'
					>
						Contact Us
					</a>
				</div>
			</Container>
		</div>
	);
};

export default Settings;
