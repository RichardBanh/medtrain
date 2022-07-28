import { API } from 'aws-amplify';

export const request_clinic_list = async (city) => {
	const api_name = 'medicaltrain';
	const path = '/medicaltrain';
	const myinit = {
		body: {
			type: 'cliniclist',
			city: city,
		},
	};

	return await API.post(api_name, path, myinit);
};
