import Container from 'react-bootstrap/Container';
import Icon from '../Asset/search.svg';
import { Button, Dropdown, Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { request_clinic_list } from '../Amplify_Account_FUNCTIONS/request_clinic_list';
import distances from '../GOOGLE_DISTANCE_FUNC/distance';
const Search = () => {
	const [city, set_city] = useState('1');

	const [client_location, set_client_location] = useState('');

	const [city_list, set_city_list] = useState([]);

	const city_select = (e) => {
		set_city(e.target.value);
	};

	const client_location_set = (e) => {
		set_client_location(e.target.value);
	};

	const search_clients_sort = async () => {
		// let city_id;
		// if (city === '1') {
		// 	// need to add error
		// 	return;
		// } else if (city === '2') {
		// 	city_id = 'vancouver';
		// } else if (city === '3') {
		// 	city_id = 'montreal';
		// } else if (city === '4') {
		// 	city_id = 'toronto';
		// } else if (city === '5') {
		// 	city_id = 'seattle';
		// }
		// let clinic_list;
		// try {
		// 	clinic_list = await request_clinic_list(city_id);
		// } catch (error) {
		// 	console.log(error);
		// }
		//find list
		//compare distance
		// try {
		// 	let distance_list = [];
		// 	for (let i = 0; i < clinic_list.length; i++) {
		// 		let distance = await distances(
		// 			client_location,
		// 			clinic_list[i].location
		// 		);
		// 		distance_list.push(distance);
		// 	}
		// 	let sorted_list = [];
		// 	for (let i = 0; i < distance_list.length; i++) {
		// 		let min = Math.min(...distance_list);
		// 		let index = distance_list.indexOf(min);
		// 		sorted_list.push(clinic_list[index]);
		// 		distance_list[index] = Infinity;
		// 	}
		// 	set_city_list(sorted_list);
		// } catch (error) {
		// 	console.log(error)
		// }
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

{
	/* <form id="search" role="search" action="/search" className="s-topbar--searchbar js-searchbar " autocomplete="off">
                    <div className="s-topbar--searchbar--input-group">
                        <input name="q" type="text" placeholder="Search…" value="" autocomplete="off" maxlength="240" className="s-input s-input__search js-search-field " aria-label="Search" aria-controls="top-search" data-controller="s-popover" data-action="focus->s-popover#show" data-s-popover-placement="bottom-start" aria-expanded="true">
                        <svg aria-hidden="true" className="s-input-icon s-input-icon__search svg-icon iconSearch" width="18" height="18" viewBox="0 0 18 18"><path d="m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z"></path></svg>
                        
                    </div>
            </form> */
}
{
	/* <div style='border: 1px solid #DDD;'>
	<img src='icon.png' />
	<input style='border: none;' />
</div>; */
}

export default Search;
