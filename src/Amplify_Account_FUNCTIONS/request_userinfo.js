import { API } from 'aws-amplify';

export const post_user = async () => {
	const api_name = 'userinfo';
	const path = '/userinfo';
	const myinit = {
		body: {
			type: 'request_user',
		},
	};

	return await API.post(api_name, path, myinit);
};
