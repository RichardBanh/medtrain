import Hero_section from '../Components/Hero_section';
import Clinic_data_entry from '../FUNCTION_COMPONENT/Clinic_data_entry';
import Clinic_section from './Clinic_section';
import { current_user } from '../Amplify_Account_FUNCTIONS/current_user';
import { useEffect } from 'react';
const Landing_page = () => {
	const [is_authenticated, set_authenticated] = useState(false);

	const user_loggedin = async () => {
		const user = await current_user();
		if (user.success) {
			set_authenticated(true);
		}
	};

	useEffect(() => {
		user_loggedin();
	}, []);
	return (
		<>
			<Hero_section />
			<Clinic_section />
			{is_authenticated ? <Clinic_data_entry /> : <></>}
		</>
	);
};

export default Landing_page;
