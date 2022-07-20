import { API } from 'aws-amplify';

export const update_times = async (data_obj) => {
	const api_name = 'waittime';
	const path = '/wait_time';
	const myinit = {
		body: {
			type: 'waittime',
			wait: data_obj.wait,
		},
	};

	return await API.post(api_name, path, myinit);
};

export const update_appointment = async (data_obj) => {
	const api_name = 'waittime';
	const path = '/wait_time';
	const myinit = {
		body: {
			type: 'appointment',
			appointment: data_obj.appointment,
		},
	};

	return await API.post(api_name, path, myinit);
};
