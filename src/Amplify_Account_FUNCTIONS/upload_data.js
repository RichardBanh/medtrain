import { API } from 'aws-amplify';

export const upload_data = async (data) => {
	const apiName = 'MyApiName';
	const path = '/path';
	const myInit = {
		body: { ...data },
	};

	return await API.post(apiName, path, myInit);
};

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
