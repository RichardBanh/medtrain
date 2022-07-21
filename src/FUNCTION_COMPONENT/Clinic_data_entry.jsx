import Container from 'react-bootstrap/Container';
import steth from '../Asset/Stethascope.png';

const Clinic_data_entry = () => {
	return (
		<div
			className='px-4 pt-5 d-flex align-items-center justify-content-center'
			style={{
				backgroundImage: `url(${steth})`,
				minHeight: '65vh',
				backgroundSize: '1650px 704px',
				backgroundRepeat: 'none',
			}}
		>
			<Container>
				<h1 className='display-4 fw-bold'>Update wait time/ Appointments</h1>
				<div className='d-flex input_block' style={{ marginTop: '80px' }}>
					<div className='d-flex align-items-start flex-column input_form'>
						<div>Current Wait Time:</div>
						<div style={{ marginTop: '20px' }}>1 Hr</div>
						<div>Wait time:</div>
						<input
							type='text'
							className='form-control'
							placeholder='Wait time in seconds'
							aria-label='Set wait time'
						></input>
						<button
							type='button'
							className='btn btn-success btn-md px-4 me-sm-3'
							style={{ marginTop: '10px' }}
						>
							Update
						</button>
						<div className='d-flex' style={{ marginTop: '20px' }}>
							<div style={{ textAlign: 'start' }}>Time Since Last Update:</div>
							<div>40min</div>
						</div>
					</div>
					<div className='d-flex align-items-start flex-column input_form'>
						<div style={{ textAlign: 'start' }}>Current Appointment:</div>
						<div style={{ marginTop: '20px' }}>12</div>
						<div>Appointment avaliable:</div>
						<input
							type='text'
							class='form-control'
							placeholder='Appointments avaliable'
							aria-label='Set wait time'
						></input>
						<button
							type='button'
							className='btn btn-success btn-md px-4 me-sm-3'
							style={{ marginTop: '10px' }}
						>
							Update
						</button>
						<div className='d-flex' style={{ marginTop: '20px' }}>
							<div style={{ textAlign: 'start' }}>Time Since Last Update:</div>
							<div> 40min</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Clinic_data_entry;
