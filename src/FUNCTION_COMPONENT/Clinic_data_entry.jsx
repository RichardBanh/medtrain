import Container from 'react-bootstrap/Container';
import steth from '../Asset/Stethascope.png';
import {
	update_appointment,
	update_times,
} from '../Amplify_Account_FUNCTIONS/upload_data';

const Clinic_data_entry = async () => {
	const [clinic_time_wait, set_clinic_time_wait] = useState('');
	const [clinic_appointment, set_clinic_appointment] = useState('');
	const [error_message, set_error_message] = useState('');
	
	const clinic_update = () => {
		let clinic_wait = clinic_time_wait;
		let clinic_app = clinic_appointment;
		if (clinic_wait === '' && clinic_app === '') {
			set_error_message('Please enter a time and or appointment');
			return;
		} else if (clinic_wait === '' && clinic_app != '') {
			await update_appointment(clinic_app);
			return;
		} else if (clinic_app === '' && clinic_wait != '') {
			await update_times(clinic_wait);
			return;
		} else {
			await update_appointment(clinic_app);
			await update_times(clinic_wait);
			return;
		}
	};

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
							onChange={(e) => {
								set_clinic_time_wait(e.target.value);
							}}
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
							aria-label='Set appointments avaliable'
							onChange={(e) => {
								set_clinic_appointment(e.target.value);
							}}
						></input>
						<button
							type='button'
							className='btn btn-success btn-md px-4 me-sm-3'
							style={{ marginTop: '10px' }}
							onChange={(e) => {
								clinic_update();
							}}
						>
							Update
						</button>
						<div>{error_message}</div>
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


//need to update the clinic ui to be able to pick minutes and hours also the appointments avaliable