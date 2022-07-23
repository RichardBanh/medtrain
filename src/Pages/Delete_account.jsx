import { Container, Button } from 'react-bootstrap';
import { useState } from 'react';

const Delete_account = () => {
	const [email, set_email] = useState('');
	const [password, set_password] = useState('');

	const submit_delete = () => {
		//api call email and password
	};

	return (
		<Container
			style={{ height: '90vh', width: '100%' }}
			className='d-flex justify-content-around '
		>
			<div
				style={{ height: '70%', width: '100%' }}
				className='d-flex flex-column align-items-center justify-content-around'
			>
				<h1>Delete Account</h1>
				<div
					className='d-flex flex-column align-items-center justify-content-around'
					style={{ height: '30%', width: '100%' }}
				>
					<div className='form-floating' style={{ width: '60%' }}>
						<input
							type='email'
							className='form-control'
							id='email'
							placeholder='email'
							onChange={(e) => {
								set_email(e.target.value);
							}}
						/>
						<label for='email'>Email</label>
					</div>
					<div className='form-floating' style={{ width: '60%' }}>
						<input
							type='password'
							className='form-control'
							id='password'
							placeholder='Password'
							onChange={(e) => {
								set_password(e.target.value);
							}}
						/>
						<label for='password'>Password</label>
					</div>
					<Button>Are you sure you want to delete account?</Button>
				</div>
			</div>
		</Container>
	);
};

export default Delete_account;
