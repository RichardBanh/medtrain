import { Auth } from 'aws-amplify';

export const sign_up_fetch = async (username, password, attributes) => {
	return await Auth.signUp({
		username,
		password,
		attributes,
	});
};

export const confirm_sign_up = async (username, code) => {
	try {
		await Auth.confirmSignUp(username, code);
		return { success: true };
	} catch (error) {
		console.log('error confirming sign up', error);
		return { success: false, error };
	}
};

export const resend_confirmation = async (username) => {
	try {
		await Auth.resendSignUp(username);
		console.log('code resent works!');
		return { success: true };
	} catch (error) {
		console.log('error resending code: ', error);
		return { success: false, error };
	}
};
