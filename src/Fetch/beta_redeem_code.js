import { API } from 'aws-amplify';

export const post_user = async () => {
	const api_name = 'userinfo';
	const path = '/userinfo';
	const myinit = {
		body: {
			username: '1test',
			password_reset_date: 'test',
			checkout_basket: 'test',
			account_type: 'test',
			address: 'test',
			number_signin: 'test',
		},
	};

	return await API.post(api_name, path, myinit);
};

export const redeem_code = async () => {
	const api_name = 'redeem_code';
	const path = '/redeem_code';
	const myinit = {
		body: {
			username: '1test',
			password_reset_date: 'test',
			checkout_basket: 'test',
			account_type: 'test',
			address: 'test',
			number_signin: 'test',
		},
	};

	return await API.post(api_name, path, myinit);
};
