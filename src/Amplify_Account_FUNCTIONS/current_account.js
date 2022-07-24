import { Auth } from 'aws-amplify';

export const current_user = async () => {
	try {
		const user = await Auth.currentAuthenticatedUser();
		return { success: true, user };
	} catch (error) {
		return { success: false, error };
	}
};
