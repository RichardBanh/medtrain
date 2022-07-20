import Container from 'react-bootstrap/Container';
const Single_clinic = () => {
	return (
		<Container>
			<div
				style={{
					borderStyle: 'solid',
					borderWidth: '1px',
					borderRadius: '3px',
					margin: '1%',
					minHeight: '10vh',
					padding: '10px',
					marginBottom: '50px',
				}}
				className='d-flex align-items-start justify-content-around'
			>
				<p className='text_size'>Walkin Clinic, Joe Bob</p>
				<div>
					<p className='text_size'>Wait time</p>
					<p className='text_size color_green'>2 Hr</p>
				</div>
				<div>
					<p className='text_size'>Appointments avaliable</p>
					<p className='text_size color_green'>10</p>
				</div>

				<div>
					<p className='text_size'>Distance from you</p>
					<p className='text_size color_green'>100 KM</p>
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
					>
						6129 River Rd, Port Alberni, BC
					</a>
					<a className='text_size link' href={`tel:+${7789527551}`}>
						7789527551
					</a>
				</div>
			</div>
		</Container>
	);
};

export default Single_clinic;
