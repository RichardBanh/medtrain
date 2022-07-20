import { Auth } from 'aws-amplify';

export const sign_in_fetch = async (username, password) => {
	try {
		const response = await Auth.signIn(username, password);
		return { success: true, response };
	} catch (error) {
		console.log('error signing in', error);
		return { success: false, error };
	}
};