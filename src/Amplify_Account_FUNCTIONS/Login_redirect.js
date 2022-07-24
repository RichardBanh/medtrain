import { current_user } from './current_account';

export const login_redirect = async (navigate) => {
	const { success, user } = await current_user();
	if (success) {
		return;
	} else {
		return navigate('/signin');
	}
};
