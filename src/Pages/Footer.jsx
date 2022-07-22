import steth from '../Asset/Stethascope.png';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
const Footer = () => {
	return (
		<div
			style={{
				minHeight: '10vh',
				backgroundColor: '#00BEFF',
			}}
		>
			<Container className='pt-2 d-flex align-items-start justify-content-start'>
				<Link to='/terms' className='nav-link' style={{ color: 'white' }}>
					Terms and Conditions
				</Link>
				<Link to='/privacy' className='nav-link' style={{ color: 'white' }}>
					Privacy
				</Link>
			</Container>
		</div>
	);
};

export default Footer;
