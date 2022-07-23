import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import down from '../Asset/down.png';
import up from '../Asset/up.png';
const Single_clinic = () => {
	const [expand_bool, set_expand_bool] = useState(false);

	const handle_expand = () => {
		set_expand_bool(!expand_bool);
	};

	return (
		<Container>
			<div
				style={{
					borderStyle: 'solid',
					borderWidth: '1px',
					margin: '1%',
					minHeight: '10vh',
					padding: '10px',
					marginBottom: '50px',
					borderLeftStyle: 'none',
					borderRightStyle: 'none',
				}}
				className='d-flex align-items-center justify-content-center flex-column'
			>
				<div
					className='d-flex align-items-start justify-content-around'
					style={{ width: '100%', height: '100%' }}
				>
					<div className='d-flex align-items-start flex-column'>
						<p className='text_size'>Walkin Clinic, Joe Bob</p>
						<div className='d-flex flex-column'>
							<p className='text_size_update'>Last updated:</p>
							<p className='text_size_update' style={{ marginTop: '-15px' }}>
								45min
							</p>
						</div>
					</div>
					<div>
						<p className='text_size'>Wait time</p>
						<p className='text_size color_green' style={{ fontWeight: 'bold' }}>
							2 Hr
						</p>
					</div>
					<div>
						<p className='text_size'>Appointments avaliable</p>
						<p className='text_size color_green' style={{ fontWeight: 'bold' }}>
							10
						</p>
					</div>

					<div>
						<p className='text_size'>Distance from you</p>
						<p className='text_size color_green' style={{ fontWeight: 'bold' }}>
							100 KM
						</p>
					</div>

					<div className='d-flex flex-column'>
						<a
							className='text_size link'
							href={`https://www.google.com/maps/place/${
								'6129' +
								'+' +
								'River' +
								'+' +
								'Rd' +
								',' +
								'+' +
								'Port' +
								'+' +
								'Alberni' +
								',' +
								'+' +
								'BC'
							}`}
							target='_blank'
							rel='noreferrer'
							style={{ textAlign: 'end' }}
						>
							6129 River Rd, Port Alberni, BC
						</a>
						<a
							className='text_size link'
							href={`tel:+${7789527551}`}
							style={{ textAlign: 'end' }}
						>
							7789527551
						</a>
					</div>
				</div>
				<div
					className='hours_expand'
					onClick={() => {
						handle_expand();
					}}
				>
					<div className='text_size'>Hours</div>

					{expand_bool ? (
						<>
							<img className='up_arrow' src={up} />
						</>
					) : (
						<>
							<img className='down_arrow' src={down} />
						</>
					)}
				</div>
				{expand_bool ? (
					<div
						className='d-flex align-items-center flex-column'
						style={{
							marginTop: '10px',
							backgroundColor: 'rgba(196,217,225,0.2)',
							width: '102%',
						}}
					>
						<div className='text_size times'>Monday: 1:30pm - 2:30am</div>
						<div className='text_size times'>Monday: 1:30pm - 2:30am</div>
						<div className='text_size times'>Monday: 1:30pm - 2:30am</div>
						<div className='text_size times'>Monday: 1:30pm - 2:30am</div>
						<div className='text_size times'>Monday: 1:30pm - 2:30am</div>
						<div className='text_size times'>Monday: 1:30pm - 2:30am</div>
						<div className='text_size times'>Monday: 1:30pm - 2:30am</div>
					</div>
				) : (
					<></>
				)}
			</div>
		</Container>
	);
};

export default Single_clinic;
