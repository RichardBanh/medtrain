import { Container } from 'react-bootstrap';
import { useState } from 'react';
import { login_amplify } from '../Amplify_Account_FUNCTIONS/login_amplify';
import { useNavigate } from 'react-router-dom';
const Sign_in = () => {
	const [email, set_email] = useState('');
	const [password, set_password] = useState('');

	const navigate = useNavigate();
	const submit_login = async () => {
		let obj_payload = { email, password };
		const user = await login_amplify(...obj_payload);
		if (user.success) {
			navigate('/check');
		}
	};

	return (
		<Container
			style={{ height: '90vh', width: '90%' }}
			className='d-flex align-items-center justify-content-center'
		>
			<main className='form-signin' style={{ height: '100%', width: '100%' }}>
				<form
					style={{ width: '100%', height: '80%' }}
					className='d-flex justify-content-evenly flex-column align-items-center'
					onSubmit={(e) => {
						e.preventDefault();
						submit_login();
					}}
				>
					<h1 className='h1 mb-3 fw-normal'>Welcome to Medical Train!</h1>
					<div
						className='form-floating'
						style={{ width: '40%', minWidth: '250px' }}
					>
						<input
							type='email'
							className='form-control'
							id='floatingInput'
							placeholder='name@example.com'
							required
							onChange={(e) => {
								set_email(e.target.value);
							}}
						/>
						<label for='floatingInput'>Email address</label>
					</div>
					<div
						className='form-floating'
						style={{ width: '40%', minWidth: '250px' }}
					>
						<input
							type='password'
							className='form-control'
							id='floatingPassword'
							placeholder='Password'
							required
							onChange={(e) => {
								set_password(e.target.value);
							}}
						/>
						<label for='floatingPassword'>Password</label>
					</div>

					<button
						className='btn btn-lg btn-primary'
						type='submit'
						style={{ width: '40%', minWidth: '250px' }}
					>
						Sign in
					</button>
				</form>
			</main>
		</Container>
	);
};

export default Sign_in;
