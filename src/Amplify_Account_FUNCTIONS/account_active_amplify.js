import { Auth, API } from 'aws-amplify';

export const account_active_amplify = async () => {
	let myInit = {
		body: {
			type: 'active',
		},
	};
	try {
		let user = await Auth.currentAuthenticatedUser();
	} catch (error) {
		return { success: false, error };
	}

	return await API.post('medclinicinfo', '/wait_time', myInit);
};
