import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { login_redirect } from '../Amplify_Account_FUNCTIONS/Login_redirect';
const Change_password = () => {
	const [password1, set_password1] = useState('');

	const [password2, set_password2] = useState('');

	const navigate = useNavigate();

	useEffect(() => {
		login_redirect(navigate);
	}, []);

	return (
		<Container>
			<div className='form-floating' style={{ width: '70%' }}>
				<input
					type='password'
					className='form-control'
					id='floatingPassword'
					placeholder='Password'
					onChange={(e) => {
						set_password1(e.target.value);
					}}
				/>
				<label for='floatingPassword'>Password</label>
			</div>

			<div className='form-floating' style={{ width: '70%' }}>
				<input
					type='password'
					className='form-control'
					id='floatingPassword'
					placeholder='Password'
					onChange={(e) => {
						set_password2(e.target.value);
					}}
				/>
				<label for='floatingPassword'>Enter Password Again</label>
			</div>

			<button>Submit</button>
		</Container>
	);
};

export default Change_password;
