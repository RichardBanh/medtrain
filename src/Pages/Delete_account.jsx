import { Container } from 'react-bootstrap';

const Delete_account = () => {
	const [email, set_email] = useState('');
	const [password, set_password] = useState('');

	const submit_delete = () => {
		//api call email and password
	};

	return (
		<Container>
			<div>Delete Account</div>
			<div className='form-floating' style={{ width: '70%' }}>
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
			<div className='form-floating' style={{ width: '70%' }}>
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
			<button>Are you sure you want to deactivate?</button>
		</Container>
	);
};

export default Delete_account;
