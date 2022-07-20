import { API } from 'aws-amplify';

export const redeem_code = async (data_obj) => {
	const api_name = 'redeem_code';
	const path = '/redeem_code';
	const myinit = {
		body: {
			code: data_obj.code,
		},
	};

	return await API.post(api_name, path, myinit);
};
