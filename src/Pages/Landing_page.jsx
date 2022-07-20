import Hero_section from '../Components/Hero_section';
import Clinic_data_entry from '../FUNCTION_COMPONENT/Clinic_data_entry';
import Clinic_section from './Clinic_section';

const Landing_page = () => {
	return (
		<>
			<Hero_section />
			<Clinic_section />
			<Clinic_data_entry />
		</>
	);
};

export default Landing_page;