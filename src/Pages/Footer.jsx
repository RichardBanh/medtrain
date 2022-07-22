import steth from '../Asset/Stethascope.png';

const Footer = () => {
	return (
		<div
			className='px-4 pt-5 d-flex align-items-center justify-content-center'
			style={{
				backgroundImage: `url(${steth})`,
				minHeight: '65vh',
				backgroundSize: '1650px 704px',
				backgroundRepeat: 'none',
			}}
		>
			FOOTER
		</div>
	);
};

export default Footer;
