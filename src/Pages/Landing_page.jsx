import Hero_section from '../Components/Hero_section';
import Clinic_data_entry from '../FUNCTION_COMPONENT/Clinic_data_entry';
import Clinic_section from './Clinic_section';
import Footer from './Footer';

const Landing_page = () => {
	const logged_in_bool = true;
	return (
		<>
			<Hero_section />
			<Clinic_section />
			{logged_in_bool ? <Clinic_data_entry /> : <></>}
			{logged_in_bool ? <></> : <Footer />}
		</>
	);
};

export default Landing_page;
