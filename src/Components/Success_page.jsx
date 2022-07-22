import { Container } from 'react-bootstrap';
import heart from '../Asset/Heart-steth.png';
const Success_page = () => {
	return (
		<>
			<div
				className='url_background'
				style={{
					backgroundImage: `url(${heart})`,
				}}
			>
				<Container
					style={{
						height: '95vh',
					}}
					className='d-flex flex-column justify-content-center align-items-start'
				>
					<div className='d-flex flex-column justify-content-center align-items-start'>
						<h2>MedTrain</h2>
						<h5 style={{ textAlign: 'left' }}>
							Thanks! We will call you when your account is approved!
						</h5>
					</div>
				</Container>
			</div>
		</>
	);
};

export default Success_page;
