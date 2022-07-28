import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { account_active_amplify } from '../Amplify_Account_FUNCTIONS/account_active_amplify';
import Success_page from '../Components/Success_page';

const Check_active = () => {
	const [loading, set_loading] = useState(true);
	const navigate = useNavigate();

	const check_active = async () => {
		const account = await account_active_amplify();
		let { active } = account.result;
		if (active) {
			navigate('/');
		} else {
			set_loading(false);
		}
	};

	useEffect(() => {
		check_active();
	}, []);

	return (
		<Container
			style={{ height: '90vh', width: '90%' }}
			className='d-flex align-items-center justify-content-center'
		>
			<main className='form-signin' style={{ height: '100%', width: '100%' }}>
				{loading ? <Spinner animation='border' /> : <Success_page />};
			</main>
		</Container>
	);
};

export default Check_active;
