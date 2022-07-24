import { API } from 'aws-amplify';

export const submit_user_info = async (data_obj) => {
	const api_name = 'userinfo';
	const path = '/userinfo';
	const myinit = {
		body: {
			...data_obj,
		},
	};
	return await API.post(api_name, path, myinit);
};
