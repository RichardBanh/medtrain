import { Container, Button } from 'react-bootstrap';

const Check_email = () => {
	return (
		<Container
			style={{ height: '60vh' }}
			className='d-flex flex-column justify-content-center'
		>
			<h1>Please Check Your Email for A Code</h1>
			<div
				className='d-flex flex-row align-items-center'
				style={{ marginTop: '50px' }}
			>
				<input
					type='text'
					className='form-control'
					placeholder='Enter Code Recieved'
					aria-label='Enter Code Recieved Input'
				/>
				<Button>Submit</Button>
			</div>
		</Container>
	);
};

export default Check_email;
