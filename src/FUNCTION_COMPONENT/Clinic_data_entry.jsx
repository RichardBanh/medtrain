import { Container } from 'react-bootstrap/Container';

const Clinic_data_entry = () => {
	return (
		<Container>
			<h1 className='display-4 fw-bold' style={{ paddingTop: '50px' }}>
				Update wait time/ Appointment Time
			</h1>
			<div
				className='d-flex justify-content-around'
				style={{ width: '100%', marginTop: '80px' }}
			>
				<div
					className='d-flex align-items-start flex-column'
					style={{ width: '30%' }}
				>
					<div>Current Wait Time:</div>
					<div>1 Hr</div>
					<div>Wait time:</div>
					<input
						type='text'
						class='form-control'
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
						<div>Time Since Last Update:</div> <div> 40min</div>
					</div>
				</div>
				<div
					className='d-flex align-items-start flex-column'
					style={{ width: '30%' }}
				>
					<div>Current Appointments Avaliable:</div>
					<div>12</div>
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
						<div>Time Since Last Update:</div> <div> 40min</div>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Clinic_data_entry;
