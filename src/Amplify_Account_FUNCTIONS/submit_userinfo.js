import { API } from 'aws-amplify';

export const submit_user_info = async (data_obj) => {
	const api_name = 'medclinicinfo';
	const path = '/medclinicinfo';
	const myinit = {
		body: {
			type: 'hours',
			...data_obj,
		},
	};
	return await API.post(api_name, path, myinit);
};



//medclinic info requires to be signed in