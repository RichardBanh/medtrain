import { Auth } from 'aws-amplify';

export const login_amplify = async (username, password) => {
	try {
		const user = await Auth.signIn(username, password);
		return { success: true, user };
	} catch (error) {
		return { success: false, error };
	}
};
