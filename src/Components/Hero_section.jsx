import steth from '../Asset/Stethascope.png';
import { useNavigate } from 'react-router-dom';
const Hero_section = () => {
	const navigate = useNavigate();
	return (
		<div
			className='px-4 pt-5 d-flex align-items-center justify-content-center'
			style={{
				backgroundImage: `url(${steth})`,
				minHeight: '60vh',
				backgroundSize: '1650px 584px',
				backgroundRepeat: 'none',
			}}
		>
			<div style={{ minWidth: '100%', marginTop: '-10%' }}>
				<h1 className='display-4 fw-bold'>Medical Train</h1>
				<div className='col-lg-6 mx-auto'>
					<p className='lead mb-4'>
						Quickly find an avaliable walk-in clinic, With appointments or
						current estimated wait times
						<p className='mb-4' style={{ color: 'red', marginTop: '-5px' }}>
							For emergencies please contact your local emergency services
						</p>
					</p>
					<div className='d-grid gap-2 d-sm-flex justify-content-sm-center mb-5'>
						<button
							type='button'
							className='btn btn-success btn-lg px-4'
							onClick={() => {
								navigate('/search');
							}}
						>
							Find Nearby Clinic
						</button>
						<button
							type='button'
							className='btn btn-primary btn-lg px-4 me-sm-3'
							onClick={() => {
								navigate('/signup');
							}}
						>
							Sign Up Your Clinic
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero_section;
