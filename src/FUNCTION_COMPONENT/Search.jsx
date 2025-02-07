import Container from 'react-bootstrap/Container';
import Icon from '../Asset/search.svg';
import { Button, Dropdown, Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';

import { request_clinic_list } from '../Amplify_Account_FUNCTIONS/request_clinic_list';
import distances from '../GOOGLE_DISTANCE_FUNC/distance';

const Search = () => {
	const [city, set_city] = useState('1');

	const [clinic_list_load, set_clinic_list] = useState({
		list: [],
		loaded: false,
	});
	const [client_location, set_client_location] = useState('');

	const city_select = (e) => {
		set_city(e.target.value);
	};

	const client_location_set = (e) => {
		set_client_location(e.target.value);
	};

	const load_clinic_list = async () => {
		let city_id;
		if (city === '1') {
			// need to add error
			return;
		} else if (city === '2') {
			city_id = 'vancouver';
		} else if (city === '3') {
			city_id = 'montreal';
		} else if (city === '4') {
			city_id = 'toronto';
		} else if (city === '5') {
			city_id = 'seattle';
		}
		let clinic_list;
		try {
			clinic_list = await request_clinic_list(city_id);
		} catch (error) {
			console.log(error);
		}

		set_clinic_list({
			list: [...clinic_list.response._resultList],
			loaded: true,
		});
	};

	const sort_list = async () => {
		//find distances?
		let origin = client_location;
		let address = [];
		clinic_list_load.list.forEach((clinic) => {
			address = [...address, clinic.address];
		});
		let clinicinfo = await distances(origin, address);
		console.log(clinicinfo);
	};

	return (
		<Container
			id='search'
			className={'d-flex flex-column align-items-center justify-content-center'}
		>
			<h1 className='display-4 fw-bold' style={{ marginTop: '20px' }}>
				Find Nearest Clinics
			</h1>
			<div
				className='d-flex flex-row align-items-center justify-content-evenly mt-5 mb-3'
				style={{ width: '100%' }}
			>
				<Form.Select
					aria-label='Default select example'
					style={{
						width: '40%',
						border: city === '1' ? '2px solid black' : '1px solid grey',
					}}
					onChange={(e) => {
						city_select(e);
					}}
				>
					<option style={{ fontWeight: 'bold' }} value='1'>
						Select your city
					</option>
					<option value='2'>Vancouver</option>
					<option value='3'>Montreal</option>
					<option value='4'>Toronto</option>
					<option value='5'>Seattle</option>
				</Form.Select>
				<div
					className='d-flex flex-row align-items-center '
					style={{ width: '40%' }}
				>
					<div
						style={{
							border: city != '1' ? '2px solid black' : '1px solid #DDD',
							width: '80%',
							backgroundColor: city === '1' ? 'rgb(234,236,239)' : '',
							borderRadius: '4px',
						}}
						className='d-flex align-items-center '
					>
						<img src={Icon} style={{ marginLeft: '20px' }} />
						<input
							type='text'
							className='form-control'
							placeholder='Search your home address'
							aria-label='Search your home address'
							aria-describedby='basic-addon2'
							style={{ border: 'none' }}
							disabled={city === '1' ? true : false}
							onChange={(e) => {
								client_location_set(e);
							}}
						/>
					</div>
					<Button disabled={city === '1' ? true : false}>Search</Button>
				</div>
			</div>
		</Container>
	);
};

export default Search;
