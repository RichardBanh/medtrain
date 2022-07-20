const user_info = {
	sign_in: false,
};

export const userinfo_reducer = (state = user_info, action) => {
	switch (action.type) {
		case 'SIGN/IN':
			return {
				...state,
				sign_in: true,
			};
		case 'SIGN/OUT':
			return {
				...state,
				sign_in: false,
			};
		default:
			return state;
	}
};
