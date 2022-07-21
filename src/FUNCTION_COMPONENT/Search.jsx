import Container from 'react-bootstrap/Container';
import Icon from '../Asset/search.svg';
import { Button, Dropdown, Form } from 'react-bootstrap';
const Search = () => {
	return (
		<Container id='search' className='d-flex flex-column align-items-center'>
			<h1 className='display-4 fw-bold' style={{ marginTop: '20px' }}>
				Find Nearest Clinics
			</h1>
			<div
				className='d-flex flex-row align-items-center justify-content-center mt-5 mb-3'
				style={{ width: '100%' }}
			>
				<Form.Select
					aria-label='Default select example'
					style={{ width: '40%', marginLeft: '60px' }}
				>
					<option style={{ fontWeight: 'bold' }}>Select your city</option>
					<option value='1'>Vancouver</option>
					<option value='2'>Montreal</option>
					<option value='3'>Toronto</option>
					<option value='4'>Seattle</option>
				</Form.Select>
				<div
					className='d-flex flex-row align-items-center '
					style={{ width: '50%' }}
				>
					<div
						style={{ border: '1px solid #DDD', width: '80%' }}
						className='d-flex align-items-center '
					>
						<img src={Icon} style={{ marginLeft: '20px' }} />
						<input
							type='text'
							className='form-control'
							placeholder='Search your home address'
							aria-label='Search your home address'
							aria-describedby='basic-addon2'
							style={{ border: 'none' }}
						/>
					</div>
					<Button>Search</Button>
				</div>
			</div>
		</Container>
	);
};

{
	/* <form id="search" role="search" action="/search" className="s-topbar--searchbar js-searchbar " autocomplete="off">
                    <div className="s-topbar--searchbar--input-group">
                        <input name="q" type="text" placeholder="Search…" value="" autocomplete="off" maxlength="240" className="s-input s-input__search js-search-field " aria-label="Search" aria-controls="top-search" data-controller="s-popover" data-action="focus->s-popover#show" data-s-popover-placement="bottom-start" aria-expanded="true">
                        <svg aria-hidden="true" className="s-input-icon s-input-icon__search svg-icon iconSearch" width="18" height="18" viewBox="0 0 18 18"><path d="m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z"></path></svg>
                        
                    </div>
            </form> */
}
{
	/* <div style='border: 1px solid #DDD;'>
	<img src='icon.png' />
	<input style='border: none;' />
</div>; */
}

export default Search;
