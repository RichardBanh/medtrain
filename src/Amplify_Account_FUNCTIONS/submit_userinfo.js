import { API } from 'aws-amplify';

export const submit_user_info = async (data_obj, address) => {
	const api_name = 'medclinicinfo';
	const path = '/medclinicinfo';
	const myinit = {
		body: {
			type: 'hours',
			hours: data_obj,
			address: address,
		},
	};
	return await API.post(api_name, path, myinit);
};

//medclinic info requires to be signed in

export const update_schedule = async (data_obj) => {
	const api_name = 'medclinicinfo';
	const path = '/medclinicinfo';
	const myinit = {
		body: {
			type: 'update_schedule',
			hours: data_obj,
		},
	};
	return await API.post(api_name, path, myinit);
};
