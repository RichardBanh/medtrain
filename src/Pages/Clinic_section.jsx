import Search from '../FUNCTION_COMPONENT/Search';
import Single_clinic from '../FUNCTION_COMPONENT/Single_clinic';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Clinic_section = () => {
	const data = useLocation();

	useEffect(() => {
		console.log(data);
	}, []);
	//data.state===null
	// 'd-flex flex-column justify-content-center'
	return (
		<div
			className={
				data.state?.dedicated_page
					? 'd-flex flex-column justify-content-center dedicated_clinic_section'
					: 'd-flex flex-column justify-content-center clinicsection'
			}
		>
			<Search />
			<div className='clinicsection_overflow_scroll'>
				<Single_clinic />
				<Single_clinic />
				<Single_clinic />
				<Single_clinic />
				<Single_clinic />
				<Single_clinic />
				<Single_clinic />
				<Single_clinic />
				<Single_clinic />
				<Single_clinic />
			</div>
		</div>
	);
};

export default Clinic_section;
