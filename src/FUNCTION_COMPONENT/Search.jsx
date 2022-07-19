import Container from 'react-bootstrap/Container';

const Search = () => {
	return (
		<Container>
			<h1 className='display-4 fw-bold' style={{ marginTop: '20px' }}>
				Find Nearest Clinics
			</h1>
			<input
				type='text'
				class='form-control'
				placeholder='Search your home address, or City center (CANADA, USA)'
				aria-label='Search your home address'
				aria-describedby='basic-addon2'
				style={{ marginTop: '30px' }}
			></input>
		</Container>
	);
};

export default Search;
