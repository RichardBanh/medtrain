import { Container, Form, Spinner } from 'react-bootstrap';

import Success_page from '../Components/Success_page';
import { useState } from 'react';

const Sign_up = () => {
	const [submit_success, set_success] = useState(false);
	const [processing, set_processing] = useState(false);

	const [date_time, set_date_time] = useState({
		mon: {
			open: true,
			start_hr: '',
			start_min: '',
			end_hr: '',
			end_min: '',
		},
		tues: {
			open: true,
			start_hr: '',
			start_min: '',
			end_hr: '',
			end_min: '',
		},
		wed: {
			open: true,
			start_hr: '',
			start_min: '',
			end_hr: '',
			end_min: '',
		},
		thur: {
			open: true,
			start_hr: '',
			start_min: '',
			end_hr: '',
			end_min: '',
		},
		fri: {
			open: true,
			start_hr: '',
			start_min: '',
			end_hr: '',
			end_min: '',
		},
		sat: {
			open: true,
			start_hr: '',
			start_min: '',
			end_hr: '',
			end_min: '',
		},
		sun: {
			open: true,
			start_hr: '',
			start_min: '',
			end_hr: '',
			end_min: '',
		},
	});

	const [clinic_info, set_clinic_info] = useState({
		clinic_name: '',
		email_address: '',
		phone_number: '',
		city: '',
		password: '',
		password2: '',
	});

	const handle_submit = () => {
		set_processing(true);
		// //initialize spinner

		// //evaluate empty
		// //evaluate password

		// check if closed
		// if closed do not send hours
		set_success(true);
	};

	const password_comparison = (password1, password2) => {
		//must have special characters and 1 number and length of 6
		//password1 and password 2 must match

	};


	return (
		<>
			<Container
				className='d-flex justify-content-center align-items-center'
				style={{ height: '220vh' }}
			>
				<main
					style={{ height: '100%' }}
					className='d-flex justify-content-around align-items-center flex-column form_size'
				>
					<h1 className='h3 mb-3 fw-normal my-5'>Sign Up Here!</h1>
					<form
						style={{ width: '100%', height: '100%' }}
						className='d-flex justify-content-evenly flex-column align-items-center'
					>
						<div className='form-floating' style={{ width: '70%' }}>
							<input
								type='text'
								className='form-control'
								placeholder='Dr Oz'
								onChange={(e) => {
									set_clinic_info({
										...clinic_info,
										clinic_name: e.target.value,
									});
								}}
							/>
							<label for='floatingInput'>Clinic Name</label>
						</div>
						<div className='form-floating' style={{ width: '70%' }}>
							<input
								type='email'
								className='form-control'
								id='floatingInput'
								placeholder='name@example.com'
								onChange={(e) => {
									set_clinic_info({
										...clinic_info,
										clinic_name: e.target.value,
									});
								}}
							/>
							<label for='floatingInput'>Email address</label>
						</div>

						<div className='form-floating' style={{ width: '70%' }}>
							<input
								type='phone'
								className='form-control'
								id='floatingInput'
								placeholder='+7789527551'
								onChange={(e) => {
									set_clinic_info({
										...clinic_info,
										phone_number: e.target.value,
									});
								}}
							/>
							<label for='floatingInput'>Phone number</label>
						</div>
						<div className='form-floating' style={{ width: '70%' }}>
							<input
								type='text'
								className='form-control'
								placeholder='City'
								onChange={(e) => {
									set_clinic_info({
										...clinic_info,
										city: e.target.value,
									});
								}}
							/>
							<label for='floatingPassword'>City</label>
						</div>
						<div className='form-floating' style={{ width: '70%' }}>
							<input
								type='password'
								className='form-control'
								id='floatingPassword'
								placeholder='Password'
								onChange={(e) => {
									set_clinic_info({
										...clinic_info,
										password: e.target.value,
									});
								}}
							/>
							<label for='floatingPassword'>Password</label>
						</div>
						<div className='form-floating' style={{ width: '70%' }}>
							<input
								type='password'
								className='form-control'
								id='floatingPassword'
								placeholder='Password'
								onChange={(e) => {
									set_clinic_info({
										...clinic_info,
										password2: e.target.value,
									});
								}}
							/>
							<label for='floatingPassword'>Enter Password Again</label>
						</div>
						{/* start */}
						<label>Please enter hours of operation</label>
						<div
							className='d-flex align-items-start align-items-center'
							style={{ width: '70%' }}
						>
							<div
								className='d-flex flex-column align-items-start'
								style={{ width: '100%' }}
							>
								<label style={{ marginBottom: '5px', marginTop: '10px' }}>
									Monday
								</label>
								<div
									className='d-flex flex-column align-items-start'
									style={{ width: '100%' }}
								>
									<div style={{ paddingLeft: '10px' }}>Open time</div>
									<div className='d-flex ' style={{ width: '100%' }}>
										<Form.Select
											aria-label='Default select example'
											style={{ width: '30%' }}
											onChange={(e) => {}}
										>
											<option style={{ fontWeight: 'bold' }}>Hour</option>
											<option value='0'>0</option>
											<option value='1'>1</option>
											<option value='2'>2</option>
											<option value='3'>3</option>
											<option value='4'>4</option>
											<option value='5'>5</option>
											<option value='6'>6</option>
											<option value='7'>7</option>
											<option value='8'>8</option>
											<option value='9'>9</option>
											<option value='10'>10</option>
											<option value='11'>11</option>
											<option value='12'>12</option>
											<option value='13'>13</option>
											<option value='14'>14</option>
											<option value='15'>15</option>
											<option value='16'>16</option>
											<option value='17'>17</option>
											<option value='18'>18</option>
											<option value='19'>19</option>
											<option value='20'>20</option>
											<option value='21'>21</option>
											<option value='22'>22</option>
											<option value='23'>23</option>
										</Form.Select>
										<Form.Select
											aria-label='Default select example'
											style={{ width: '30%' }}
										>
											<option style={{ fontWeight: 'bold' }}>Minutes</option>
											<option value='00'>00</option>
											<option value='01'>01</option>
											<option value='02'>02</option>
											<option value='03'>03</option>
											<option value='04'>04</option>
											<option value='05'>05</option>
											<option value='06'>06</option>
											<option value='07'>07</option>
											<option value='08'>08</option>
											<option value='09'>09</option>
											<option value='10'>10</option>
											<option value='11'>11</option>
											<option value='12'>12</option>
											<option value='13'>13</option>
											<option value='14'>14</option>
											<option value='15'>15</option>
											<option value='16'>16</option>
											<option value='17'>17</option>
											<option value='18'>18</option>
											<option value='19'>19</option>
											<option value='20'>20</option>
											<option value='21'>21</option>
											<option value='22'>22</option>
											<option value='23'>23</option>
											<option value='24'>24</option>
											<option value='25'>25</option>
											<option value='26'>26</option>
											<option value='27'>27</option>
											<option value='28'>28</option>
											<option value='29'>29</option>
											<option value='30'>30</option>
											<option value='31'>31</option>
											<option value='32'>32</option>
											<option value='33'>33</option>
											<option value='34'>34</option>
											<option value='35'>35</option>
											<option value='36'>36</option>
											<option value='37'>37</option>
											<option value='38'>38</option>
											<option value='39'>39</option>
											<option value='40'>40</option>
											<option value='41'>41</option>
											<option value='42'>42</option>
											<option value='43'>43</option>
											<option value='44'>44</option>
											<option value='45'>45</option>
											<option value='46'>46</option>
											<option value='47'>47</option>
											<option value='48'>48</option>
											<option value='49'>49</option>
											<option value='50'>50</option>
											<option value='51'>51</option>
											<option value='52'>52</option>
											<option value='53'>53</option>
											<option value='54'>54</option>
											<option value='55'>55</option>
											<option value='56'>56</option>
											<option value='57'>57</option>
											<option value='58'>58</option>
											<option value='59'>59</option>
										</Form.Select>
									</div>
									<div style={{ paddingLeft: '10px' }}>Close time</div>
									<div className='d-flex' style={{ width: '100%' }}>
										<Form.Select
											aria-label='Default select example'
											style={{ width: '30%' }}
											onChange={(e) => {}}
										>
											<option style={{ fontWeight: 'bold' }}>Hour</option>
											<option value='0'>0</option>
											<option value='1'>1</option>
											<option value='2'>2</option>
											<option value='3'>3</option>
											<option value='4'>4</option>
											<option value='5'>5</option>
											<option value='6'>6</option>
											<option value='7'>7</option>
											<option value='8'>8</option>
											<option value='9'>9</option>
											<option value='10'>10</option>
											<option value='11'>11</option>
											<option value='12'>12</option>
											<option value='13'>13</option>
											<option value='14'>14</option>
											<option value='15'>15</option>
											<option value='16'>16</option>
											<option value='17'>17</option>
											<option value='18'>18</option>
											<option value='19'>19</option>
											<option value='20'>20</option>
											<option value='21'>21</option>
											<option value='22'>22</option>
											<option value='23'>23</option>
										</Form.Select>
										<Form.Select
											aria-label='Default select example'
											style={{ width: '30%' }}
										>
											<option style={{ fontWeight: 'bold' }}>Minutes</option>
											<option value='00'>00</option>
											<option value='01'>01</option>
											<option value='02'>02</option>
											<option value='03'>03</option>
											<option value='04'>04</option>
											<option value='05'>05</option>
											<option value='06'>06</option>
											<option value='07'>07</option>
											<option value='08'>08</option>
											<option value='09'>09</option>
											<option value='10'>10</option>
											<option value='11'>11</option>
											<option value='12'>12</option>
											<option value='13'>13</option>
											<option value='14'>14</option>
											<option value='15'>15</option>
											<option value='16'>16</option>
											<option value='17'>17</option>
											<option value='18'>18</option>
											<option value='19'>19</option>
											<option value='20'>20</option>
											<option value='21'>21</option>
											<option value='22'>22</option>
											<option value='23'>23</option>
											<option value='24'>24</option>
											<option value='25'>25</option>
											<option value='26'>26</option>
											<option value='27'>27</option>
											<option value='28'>28</option>
											<option value='29'>29</option>
											<option value='30'>30</option>
											<option value='31'>31</option>
											<option value='32'>32</option>
											<option value='33'>33</option>
											<option value='34'>34</option>
											<option value='35'>35</option>
											<option value='36'>36</option>
											<option value='37'>37</option>
											<option value='38'>38</option>
											<option value='39'>39</option>
											<option value='40'>40</option>
											<option value='41'>41</option>
											<option value='42'>42</option>
											<option value='43'>43</option>
											<option value='44'>44</option>
											<option value='45'>45</option>
											<option value='46'>46</option>
											<option value='47'>47</option>
											<option value='48'>48</option>
											<option value='49'>49</option>
											<option value='50'>50</option>
											<option value='51'>51</option>
											<option value='52'>52</option>
											<option value='53'>53</option>
											<option value='54'>54</option>
											<option value='55'>55</option>
											<option value='56'>56</option>
											<option value='57'>57</option>
											<option value='58'>58</option>
											<option value='59'>59</option>
										</Form.Select>
									</div>
								</div>
							</div>
							<div className='checkbox' style={{ marginTop: '15px' }}>
								<label className='d-flex'>
									<input
										type='checkbox'
										style={{ marginRight: '10px' }}
										onChange={() => {
											set_date_time({
												...date_time,
												mon: { ...date_time.mon, open: !date_time.mon.open },
											});
										}}
									/>
									Closed?
								</label>
							</div>
						</div>
						{/* //end */}
						<div
							className='d-flex align-items-start align-items-center'
							style={{ width: '70%' }}
						>
							<div
								className='d-flex flex-column align-items-start'
								style={{ width: '100%' }}
							>
								<label style={{ marginBottom: '5px', marginTop: '10px' }}>
									Tuesday
								</label>
								<div style={{ paddingLeft: '10px' }}>Open time</div>
								<div className='d-flex' style={{ width: '100%' }}>
									<Form.Select
										aria-label='Default select example'
										style={{ width: '30%' }}
									>
										<option style={{ fontWeight: 'bold' }}>Hour</option>
										<option value='0'>0</option>
										<option value='1'>1</option>
										<option value='2'>2</option>
										<option value='3'>3</option>
										<option value='4'>4</option>
										<option value='5'>5</option>
										<option value='6'>6</option>
										<option value='7'>7</option>
										<option value='8'>8</option>
										<option value='9'>9</option>
										<option value='10'>10</option>
										<option value='11'>11</option>
										<option value='12'>12</option>
										<option value='13'>13</option>
										<option value='14'>14</option>
										<option value='15'>15</option>
										<option value='16'>16</option>
										<option value='17'>17</option>
										<option value='18'>18</option>
										<option value='19'>19</option>
										<option value='20'>20</option>
										<option value='21'>21</option>
										<option value='22'>22</option>
										<option value='23'>23</option>
									</Form.Select>
									<Form.Select
										aria-label='Default select example'
										style={{ width: '30%' }}
									>
										<option style={{ fontWeight: 'bold' }}>Minutes</option>
										<option value='00'>00</option>
										<option value='01'>01</option>
										<option value='02'>02</option>
										<option value='03'>03</option>
										<option value='04'>04</option>
										<option value='05'>05</option>
										<option value='06'>06</option>
										<option value='07'>07</option>
										<option value='08'>08</option>
										<option value='09'>09</option>
										<option value='10'>10</option>
										<option value='11'>11</option>
										<option value='12'>12</option>
										<option value='13'>13</option>
										<option value='14'>14</option>
										<option value='15'>15</option>
										<option value='16'>16</option>
										<option value='17'>17</option>
										<option value='18'>18</option>
										<option value='19'>19</option>
										<option value='20'>20</option>
										<option value='21'>21</option>
										<option value='22'>22</option>
										<option value='23'>23</option>
										<option value='24'>24</option>
										<option value='25'>25</option>
										<option value='26'>26</option>
										<option value='27'>27</option>
										<option value='28'>28</option>
										<option value='29'>29</option>
										<option value='30'>30</option>
										<option value='31'>31</option>
										<option value='32'>32</option>
										<option value='33'>33</option>
										<option value='34'>34</option>
										<option value='35'>35</option>
										<option value='36'>36</option>
										<option value='37'>37</option>
										<option value='38'>38</option>
										<option value='39'>39</option>
										<option value='40'>40</option>
										<option value='41'>41</option>
										<option value='42'>42</option>
										<option value='43'>43</option>
										<option value='44'>44</option>
										<option value='45'>45</option>
										<option value='46'>46</option>
										<option value='47'>47</option>
										<option value='48'>48</option>
										<option value='49'>49</option>
										<option value='50'>50</option>
										<option value='51'>51</option>
										<option value='52'>52</option>
										<option value='53'>53</option>
										<option value='54'>54</option>
										<option value='55'>55</option>
										<option value='56'>56</option>
										<option value='57'>57</option>
										<option value='58'>58</option>
										<option value='59'>59</option>
									</Form.Select>
								</div>
								<div style={{ paddingLeft: '10px' }}>Close time</div>
								<div className='d-flex' style={{ width: '100%' }}>
									<Form.Select
										aria-label='Default select example'
										style={{ width: '30%' }}
									>
										<option style={{ fontWeight: 'bold' }}>Hour</option>
										<option value='0'>0</option>
										<option value='1'>1</option>
										<option value='2'>2</option>
										<option value='3'>3</option>
										<option value='4'>4</option>
										<option value='5'>5</option>
										<option value='6'>6</option>
										<option value='7'>7</option>
										<option value='8'>8</option>
										<option value='9'>9</option>
										<option value='10'>10</option>
										<option value='11'>11</option>
										<option value='12'>12</option>
										<option value='13'>13</option>
										<option value='14'>14</option>
										<option value='15'>15</option>
										<option value='16'>16</option>
										<option value='17'>17</option>
										<option value='18'>18</option>
										<option value='19'>19</option>
										<option value='20'>20</option>
										<option value='21'>21</option>
										<option value='22'>22</option>
										<option value='23'>23</option>
									</Form.Select>
									<Form.Select
										aria-label='Default select example'
										style={{ width: '30%' }}
									>
										<option style={{ fontWeight: 'bold' }}>Minutes</option>
										<option value='00'>00</option>
										<option value='01'>01</option>
										<option value='02'>02</option>
										<option value='03'>03</option>
										<option value='04'>04</option>
										<option value='05'>05</option>
										<option value='06'>06</option>
										<option value='07'>07</option>
										<option value='08'>08</option>
										<option value='09'>09</option>
										<option value='10'>10</option>
										<option value='11'>11</option>
										<option value='12'>12</option>
										<option value='13'>13</option>
										<option value='14'>14</option>
										<option value='15'>15</option>
										<option value='16'>16</option>
										<option value='17'>17</option>
										<option value='18'>18</option>
										<option value='19'>19</option>
										<option value='20'>20</option>
										<option value='21'>21</option>
										<option value='22'>22</option>
										<option value='23'>23</option>
										<option value='24'>24</option>
										<option value='25'>25</option>
										<option value='26'>26</option>
										<option value='27'>27</option>
										<option value='28'>28</option>
										<option value='29'>29</option>
										<option value='30'>30</option>
										<option value='31'>31</option>
										<option value='32'>32</option>
										<option value='33'>33</option>
										<option value='34'>34</option>
										<option value='35'>35</option>
										<option value='36'>36</option>
										<option value='37'>37</option>
										<option value='38'>38</option>
										<option value='39'>39</option>
										<option value='40'>40</option>
										<option value='41'>41</option>
										<option value='42'>42</option>
										<option value='43'>43</option>
										<option value='44'>44</option>
										<option value='45'>45</option>
										<option value='46'>46</option>
										<option value='47'>47</option>
										<option value='48'>48</option>
										<option value='49'>49</option>
										<option value='50'>50</option>
										<option value='51'>51</option>
										<option value='52'>52</option>
										<option value='53'>53</option>
										<option value='54'>54</option>
										<option value='55'>55</option>
										<option value='56'>56</option>
										<option value='57'>57</option>
										<option value='58'>58</option>
										<option value='59'>59</option>
									</Form.Select>
								</div>
							</div>
							<div className='checkbox' style={{ marginTop: '15px' }}>
								<label className='d-flex'>
									<input
										type='checkbox'
										value='true'
										style={{ marginRight: '10px' }}
										onChange={() => {
											set_date_time({
												...date_time,
												thur: { ...date_time.tues, open: !date_time.tues.open },
											});
										}}
									/>
									Closed?
								</label>
							</div>
						</div>
						<div
							className='d-flex align-items-start align-items-center'
							style={{ width: '70%' }}
						>
							<div
								className='d-flex flex-column align-items-start'
								style={{ width: '100%' }}
							>
								<label style={{ marginBottom: '5px', marginTop: '10px' }}>
									Wednesday
								</label>
								<div style={{ paddingLeft: '10px' }}>Open time</div>
								<div className='d-flex' style={{ width: '100%' }}>
									<Form.Select
										aria-label='Default select example'
										style={{ width: '30%' }}
									>
										<option style={{ fontWeight: 'bold' }}>Hour</option>
										<option value='0'>0</option>
										<option value='1'>1</option>
										<option value='2'>2</option>
										<option value='3'>3</option>
										<option value='4'>4</option>
										<option value='5'>5</option>
										<option value='6'>6</option>
										<option value='7'>7</option>
										<option value='8'>8</option>
										<option value='9'>9</option>
										<option value='10'>10</option>
										<option value='11'>11</option>
										<option value='12'>12</option>
										<option value='13'>13</option>
										<option value='14'>14</option>
										<option value='15'>15</option>
										<option value='16'>16</option>
										<option value='17'>17</option>
										<option value='18'>18</option>
										<option value='19'>19</option>
										<option value='20'>20</option>
										<option value='21'>21</option>
										<option value='22'>22</option>
										<option value='23'>23</option>
									</Form.Select>
									<Form.Select
										aria-label='Default select example'
										style={{ width: '30%' }}
									>
										<option style={{ fontWeight: 'bold' }}>Minutes</option>
										<option value='00'>00</option>
										<option value='01'>01</option>
										<option value='02'>02</option>
										<option value='03'>03</option>
										<option value='04'>04</option>
										<option value='05'>05</option>
										<option value='06'>06</option>
										<option value='07'>07</option>
										<option value='08'>08</option>
										<option value='09'>09</option>
										<option value='10'>10</option>
										<option value='11'>11</option>
										<option value='12'>12</option>
										<option value='13'>13</option>
										<option value='14'>14</option>
										<option value='15'>15</option>
										<option value='16'>16</option>
										<option value='17'>17</option>
										<option value='18'>18</option>
										<option value='19'>19</option>
										<option value='20'>20</option>
										<option value='21'>21</option>
										<option value='22'>22</option>
										<option value='23'>23</option>
										<option value='24'>24</option>
										<option value='25'>25</option>
										<option value='26'>26</option>
										<option value='27'>27</option>
										<option value='28'>28</option>
										<option value='29'>29</option>
										<option value='30'>30</option>
										<option value='31'>31</option>
										<option value='32'>32</option>
										<option value='33'>33</option>
										<option value='34'>34</option>
										<option value='35'>35</option>
										<option value='36'>36</option>
										<option value='37'>37</option>
										<option value='38'>38</option>
										<option value='39'>39</option>
										<option value='40'>40</option>
										<option value='41'>41</option>
										<option value='42'>42</option>
										<option value='43'>43</option>
										<option value='44'>44</option>
										<option value='45'>45</option>
										<option value='46'>46</option>
										<option value='47'>47</option>
										<option value='48'>48</option>
										<option value='49'>49</option>
										<option value='50'>50</option>
										<option value='51'>51</option>
										<option value='52'>52</option>
										<option value='53'>53</option>
										<option value='54'>54</option>
										<option value='55'>55</option>
										<option value='56'>56</option>
										<option value='57'>57</option>
										<option value='58'>58</option>
										<option value='59'>59</option>
									</Form.Select>
								</div>
								<div style={{ paddingLeft: '10px' }}>Close time</div>
								<div className='d-flex' style={{ width: '100%' }}>
									<Form.Select
										aria-label='Default select example'
										style={{ width: '30%' }}
									>
										<option style={{ fontWeight: 'bold' }}>Hour</option>
										<option value='0'>0</option>
										<option value='1'>1</option>
										<option value='2'>2</option>
										<option value='3'>3</option>
										<option value='4'>4</option>
										<option value='5'>5</option>
										<option value='6'>6</option>
										<option value='7'>7</option>
										<option value='8'>8</option>
										<option value='9'>9</option>
										<option value='10'>10</option>
										<option value='11'>11</option>
										<option value='12'>12</option>
										<option value='13'>13</option>
										<option value='14'>14</option>
										<option value='15'>15</option>
										<option value='16'>16</option>
										<option value='17'>17</option>
										<option value='18'>18</option>
										<option value='19'>19</option>
										<option value='20'>20</option>
										<option value='21'>21</option>
										<option value='22'>22</option>
										<option value='23'>23</option>
									</Form.Select>
									<Form.Select
										aria-label='Default select example'
										style={{ width: '30%' }}
									>
										<option style={{ fontWeight: 'bold' }}>Minutes</option>
										<option value='00'>00</option>
										<option value='01'>01</option>
										<option value='02'>02</option>
										<option value='03'>03</option>
										<option value='04'>04</option>
										<option value='05'>05</option>
										<option value='06'>06</option>
										<option value='07'>07</option>
										<option value='08'>08</option>
										<option value='09'>09</option>
										<option value='10'>10</option>
										<option value='11'>11</option>
										<option value='12'>12</option>
										<option value='13'>13</option>
										<option value='14'>14</option>
										<option value='15'>15</option>
										<option value='16'>16</option>
										<option value='17'>17</option>
										<option value='18'>18</option>
										<option value='19'>19</option>
										<option value='20'>20</option>
										<option value='21'>21</option>
										<option value='22'>22</option>
										<option value='23'>23</option>
										<option value='24'>24</option>
										<option value='25'>25</option>
										<option value='26'>26</option>
										<option value='27'>27</option>
										<option value='28'>28</option>
										<option value='29'>29</option>
										<option value='30'>30</option>
										<option value='31'>31</option>
										<option value='32'>32</option>
										<option value='33'>33</option>
										<option value='34'>34</option>
										<option value='35'>35</option>
										<option value='36'>36</option>
										<option value='37'>37</option>
										<option value='38'>38</option>
										<option value='39'>39</option>
										<option value='40'>40</option>
										<option value='41'>41</option>
										<option value='42'>42</option>
										<option value='43'>43</option>
										<option value='44'>44</option>
										<option value='45'>45</option>
										<option value='46'>46</option>
										<option value='47'>47</option>
										<option value='48'>48</option>
										<option value='49'>49</option>
										<option value='50'>50</option>
										<option value='51'>51</option>
										<option value='52'>52</option>
										<option value='53'>53</option>
										<option value='54'>54</option>
										<option value='55'>55</option>
										<option value='56'>56</option>
										<option value='57'>57</option>
										<option value='58'>58</option>
										<option value='59'>59</option>
									</Form.Select>
								</div>
							</div>
							<div className='checkbox' style={{ marginTop: '15px' }}>
								<label className='d-flex'>
									<input
										type='checkbox'
										value='true'
										style={{ marginRight: '10px' }}
										onChange={() => {
											set_date_time({
												...date_time,
												wed: { ...date_time.wed, open: !date_time.wed.open },
											});
										}}
									/>
									Closed?
								</label>
							</div>
						</div>
						{/* start */}
						<div
							className='d-flex align-items-start align-items-center'
							style={{ width: '70%' }}
						>
							<div
								className='d-flex flex-column align-items-start'
								style={{ width: '100%' }}
							>
								<label style={{ marginBottom: '5px', marginTop: '10px' }}>
									Thursday
								</label>
								<div style={{ paddingLeft: '10px' }}>Open time</div>
								<div className='d-flex' style={{ width: '100%' }}>
									<Form.Select
										aria-label='Default select example'
										style={{ width: '30%' }}
									>
										<option style={{ fontWeight: 'bold' }}>Hour</option>
										<option value='0'>0</option>
										<option value='1'>1</option>
										<option value='2'>2</option>
										<option value='3'>3</option>
										<option value='4'>4</option>
										<option value='5'>5</option>
										<option value='6'>6</option>
										<option value='7'>7</option>
										<option value='8'>8</option>
										<option value='9'>9</option>
										<option value='10'>10</option>
										<option value='11'>11</option>
										<option value='12'>12</option>
										<option value='13'>13</option>
										<option value='14'>14</option>
										<option value='15'>15</option>
										<option value='16'>16</option>
										<option value='17'>17</option>
										<option value='18'>18</option>
										<option value='19'>19</option>
										<option value='20'>20</option>
										<option value='21'>21</option>
										<option value='22'>22</option>
										<option value='23'>23</option>
									</Form.Select>
									<Form.Select
										aria-label='Default select example'
										style={{ width: '30%' }}
									>
										<option style={{ fontWeight: 'bold' }}>Minutes</option>
										<option value='00'>00</option>
										<option value='01'>01</option>
										<option value='02'>02</option>
										<option value='03'>03</option>
										<option value='04'>04</option>
										<option value='05'>05</option>
										<option value='06'>06</option>
										<option value='07'>07</option>
										<option value='08'>08</option>
										<option value='09'>09</option>
										<option value='10'>10</option>
										<option value='11'>11</option>
										<option value='12'>12</option>
										<option value='13'>13</option>
										<option value='14'>14</option>
										<option value='15'>15</option>
										<option value='16'>16</option>
										<option value='17'>17</option>
										<option value='18'>18</option>
										<option value='19'>19</option>
										<option value='20'>20</option>
										<option value='21'>21</option>
										<option value='22'>22</option>
										<option value='23'>23</option>
										<option value='24'>24</option>
										<option value='25'>25</option>
										<option value='26'>26</option>
										<option value='27'>27</option>
										<option value='28'>28</option>
										<option value='29'>29</option>
										<option value='30'>30</option>
										<option value='31'>31</option>
										<option value='32'>32</option>
										<option value='33'>33</option>
										<option value='34'>34</option>
										<option value='35'>35</option>
										<option value='36'>36</option>
										<option value='37'>37</option>
										<option value='38'>38</option>
										<option value='39'>39</option>
										<option value='40'>40</option>
										<option value='41'>41</option>
										<option value='42'>42</option>
										<option value='43'>43</option>
										<option value='44'>44</option>
										<option value='45'>45</option>
										<option value='46'>46</option>
										<option value='47'>47</option>
										<option value='48'>48</option>
										<option value='49'>49</option>
										<option value='50'>50</option>
										<option value='51'>51</option>
										<option value='52'>52</option>
										<option value='53'>53</option>
										<option value='54'>54</option>
										<option value='55'>55</option>
										<option value='56'>56</option>
										<option value='57'>57</option>
										<option value='58'>58</option>
										<option value='59'>59</option>
									</Form.Select>
								</div>
								<div style={{ paddingLeft: '10px' }}>Close time</div>
								<div className='d-flex' style={{ width: '100%' }}>
									<Form.Select
										aria-label='Default select example'
										style={{ width: '30%' }}
									>
										<option style={{ fontWeight: 'bold' }}>Hour</option>
										<option value='0'>0</option>
										<option value='1'>1</option>
										<option value='2'>2</option>
										<option value='3'>3</option>
										<option value='4'>4</option>
										<option value='5'>5</option>
										<option value='6'>6</option>
										<option value='7'>7</option>
										<option value='8'>8</option>
										<option value='9'>9</option>
										<option value='10'>10</option>
										<option value='11'>11</option>
										<option value='12'>12</option>
										<option value='13'>13</option>
										<option value='14'>14</option>
										<option value='15'>15</option>
										<option value='16'>16</option>
										<option value='17'>17</option>
										<option value='18'>18</option>
										<option value='19'>19</option>
										<option value='20'>20</option>
										<option value='21'>21</option>
										<option value='22'>22</option>
										<option value='23'>23</option>
									</Form.Select>
									<Form.Select
										aria-label='Default select example'
										style={{ width: '30%' }}
									>
										<option style={{ fontWeight: 'bold' }}>Minutes</option>
										<option value='00'>00</option>
										<option value='01'>01</option>
										<option value='02'>02</option>
										<option value='03'>03</option>
										<option value='04'>04</option>
										<option value='05'>05</option>
										<option value='06'>06</option>
										<option value='07'>07</option>
										<option value='08'>08</option>
										<option value='09'>09</option>
										<option value='10'>10</option>
										<option value='11'>11</option>
										<option value='12'>12</option>
										<option value='13'>13</option>
										<option value='14'>14</option>
										<option value='15'>15</option>
										<option value='16'>16</option>
										<option value='17'>17</option>
										<option value='18'>18</option>
										<option value='19'>19</option>
										<option value='20'>20</option>
										<option value='21'>21</option>
										<option value='22'>22</option>
										<option value='23'>23</option>
										<option value='24'>24</option>
										<option value='25'>25</option>
										<option value='26'>26</option>
										<option value='27'>27</option>
										<option value='28'>28</option>
										<option value='29'>29</option>
										<option value='30'>30</option>
										<option value='31'>31</option>
										<option value='32'>32</option>
										<option value='33'>33</option>
										<option value='34'>34</option>
										<option value='35'>35</option>
										<option value='36'>36</option>
										<option value='37'>37</option>
										<option value='38'>38</option>
										<option value='39'>39</option>
										<option value='40'>40</option>
										<option value='41'>41</option>
										<option value='42'>42</option>
										<option value='43'>43</option>
										<option value='44'>44</option>
										<option value='45'>45</option>
										<option value='46'>46</option>
										<option value='47'>47</option>
										<option value='48'>48</option>
										<option value='49'>49</option>
										<option value='50'>50</option>
										<option value='51'>51</option>
										<option value='52'>52</option>
										<option value='53'>53</option>
										<option value='54'>54</option>
										<option value='55'>55</option>
										<option value='56'>56</option>
										<option value='57'>57</option>
										<option value='58'>58</option>
										<option value='59'>59</option>
									</Form.Select>
								</div>
							</div>
							<div className='checkbox' style={{ marginTop: '15px' }}>
								<label className='d-flex'>
									<input
										type='checkbox'
										value='true'
										style={{ marginRight: '10px' }}
										onChange={() => {
											set_date_time({
												...date_time,
												thur: { ...date_time.thur, open: !date_time.thur.open },
											});
										}}
									/>
									Closed?
								</label>
							</div>
						</div>
						{/* //end */}
						{/* start */}
						<div
							className='d-flex align-items-start align-items-center'
							style={{ width: '70%' }}
						>
							<div
								className='d-flex flex-column align-items-start'
								style={{ width: '100%' }}
							>
								<label style={{ marginBottom: '5px', marginTop: '10px' }}>
									Friday
								</label>
								<div style={{ paddingLeft: '10px' }}>Open time</div>
								<div className='d-flex' style={{ width: '100%' }}>
									<Form.Select
										aria-label='Default select example'
										style={{ width: '30%' }}
									>
										<option style={{ fontWeight: 'bold' }}>Hour</option>
										<option value='0'>0</option>
										<option value='1'>1</option>
										<option value='2'>2</option>
										<option value='3'>3</option>
										<option value='4'>4</option>
										<option value='5'>5</option>
										<option value='6'>6</option>
										<option value='7'>7</option>
										<option value='8'>8</option>
										<option value='9'>9</option>
										<option value='10'>10</option>
										<option value='11'>11</option>
										<option value='12'>12</option>
										<option value='13'>13</option>
										<option value='14'>14</option>
										<option value='15'>15</option>
										<option value='16'>16</option>
										<option value='17'>17</option>
										<option value='18'>18</option>
										<option value='19'>19</option>
										<option value='20'>20</option>
										<option value='21'>21</option>
										<option value='22'>22</option>
										<option value='23'>23</option>
									</Form.Select>
									<Form.Select
										aria-label='Default select example'
										style={{ width: '30%' }}
									>
										<option style={{ fontWeight: 'bold' }}>Minutes</option>
										<option value='00'>00</option>
										<option value='01'>01</option>
										<option value='02'>02</option>
										<option value='03'>03</option>
										<option value='04'>04</option>
										<option value='05'>05</option>
										<option value='06'>06</option>
										<option value='07'>07</option>
										<option value='08'>08</option>
										<option value='09'>09</option>
										<option value='10'>10</option>
										<option value='11'>11</option>
										<option value='12'>12</option>
										<option value='13'>13</option>
										<option value='14'>14</option>
										<option value='15'>15</option>
										<option value='16'>16</option>
										<option value='17'>17</option>
										<option value='18'>18</option>
										<option value='19'>19</option>
										<option value='20'>20</option>
										<option value='21'>21</option>
										<option value='22'>22</option>
										<option value='23'>23</option>
										<option value='24'>24</option>
										<option value='25'>25</option>
										<option value='26'>26</option>
										<option value='27'>27</option>
										<option value='28'>28</option>
										<option value='29'>29</option>
										<option value='30'>30</option>
										<option value='31'>31</option>
										<option value='32'>32</option>
										<option value='33'>33</option>
										<option value='34'>34</option>
										<option value='35'>35</option>
										<option value='36'>36</option>
										<option value='37'>37</option>
										<option value='38'>38</option>
										<option value='39'>39</option>
										<option value='40'>40</option>
										<option value='41'>41</option>
										<option value='42'>42</option>
										<option value='43'>43</option>
										<option value='44'>44</option>
										<option value='45'>45</option>
										<option value='46'>46</option>
										<option value='47'>47</option>
										<option value='48'>48</option>
										<option value='49'>49</option>
										<option value='50'>50</option>
										<option value='51'>51</option>
										<option value='52'>52</option>
										<option value='53'>53</option>
										<option value='54'>54</option>
										<option value='55'>55</option>
										<option value='56'>56</option>
										<option value='57'>57</option>
										<option value='58'>58</option>
										<option value='59'>59</option>
									</Form.Select>
								</div>
								<div style={{ paddingLeft: '10px' }}>Close time</div>
								<div className='d-flex' style={{ width: '100%' }}>
									<Form.Select
										aria-label='Default select example'
										style={{ width: '30%' }}
									>
										<option style={{ fontWeight: 'bold' }}>Hour</option>
										<option value='0'>0</option>
										<option value='1'>1</option>
										<option value='2'>2</option>
										<option value='3'>3</option>
										<option value='4'>4</option>
										<option value='5'>5</option>
										<option value='6'>6</option>
										<option value='7'>7</option>
										<option value='8'>8</option>
										<option value='9'>9</option>
										<option value='10'>10</option>
										<option value='11'>11</option>
										<option value='12'>12</option>
										<option value='13'>13</option>
										<option value='14'>14</option>
										<option value='15'>15</option>
										<option value='16'>16</option>
										<option value='17'>17</option>
										<option value='18'>18</option>
										<option value='19'>19</option>
										<option value='20'>20</option>
										<option value='21'>21</option>
										<option value='22'>22</option>
										<option value='23'>23</option>
									</Form.Select>
									<Form.Select
										aria-label='Default select example'
										style={{ width: '30%' }}
									>
										<option style={{ fontWeight: 'bold' }}>Minutes</option>
										<option value='00'>00</option>
										<option value='01'>01</option>
										<option value='02'>02</option>
										<option value='03'>03</option>
										<option value='04'>04</option>
										<option value='05'>05</option>
										<option value='06'>06</option>
										<option value='07'>07</option>
										<option value='08'>08</option>
										<option value='09'>09</option>
										<option value='10'>10</option>
										<option value='11'>11</option>
										<option value='12'>12</option>
										<option value='13'>13</option>
										<option value='14'>14</option>
										<option value='15'>15</option>
										<option value='16'>16</option>
										<option value='17'>17</option>
										<option value='18'>18</option>
										<option value='19'>19</option>
										<option value='20'>20</option>
										<option value='21'>21</option>
										<option value='22'>22</option>
										<option value='23'>23</option>
										<option value='24'>24</option>
										<option value='25'>25</option>
										<option value='26'>26</option>
										<option value='27'>27</option>
										<option value='28'>28</option>
										<option value='29'>29</option>
										<option value='30'>30</option>
										<option value='31'>31</option>
										<option value='32'>32</option>
										<option value='33'>33</option>
										<option value='34'>34</option>
										<option value='35'>35</option>
										<option value='36'>36</option>
										<option value='37'>37</option>
										<option value='38'>38</option>
										<option value='39'>39</option>
										<option value='40'>40</option>
										<option value='41'>41</option>
										<option value='42'>42</option>
										<option value='43'>43</option>
										<option value='44'>44</option>
										<option value='45'>45</option>
										<option value='46'>46</option>
										<option value='47'>47</option>
										<option value='48'>48</option>
										<option value='49'>49</option>
										<option value='50'>50</option>
										<option value='51'>51</option>
										<option value='52'>52</option>
										<option value='53'>53</option>
										<option value='54'>54</option>
										<option value='55'>55</option>
										<option value='56'>56</option>
										<option value='57'>57</option>
										<option value='58'>58</option>
										<option value='59'>59</option>
									</Form.Select>
								</div>
							</div>
							<div className='checkbox' style={{ marginTop: '15px' }}>
								<label className='d-flex'>
									<input
										type='checkbox'
										value='true'
										style={{ marginRight: '10px' }}
										onChange={() => {
											set_date_time({
												...date_time,
												fri: { ...date_time.fri, open: !date_time.fri.open },
											});
										}}
									/>
									Closed?
								</label>
							</div>
						</div>
						{/* //end */}
						{/* start */}
						<div
							className='d-flex align-items-start align-items-center'
							style={{ width: '70%' }}
						>
							<div
								className='d-flex flex-column align-items-start'
								style={{ width: '100%' }}
							>
								<label style={{ marginBottom: '5px', marginTop: '10px' }}>
									Saturday
								</label>
								<div style={{ paddingLeft: '10px' }}>Open time</div>
								<div className='d-flex' style={{ width: '100%' }}>
									<Form.Select
										aria-label='Default select example'
										style={{ width: '30%' }}
									>
										<option style={{ fontWeight: 'bold' }}>Hour</option>
										<option value='0'>0</option>
										<option value='1'>1</option>
										<option value='2'>2</option>
										<option value='3'>3</option>
										<option value='4'>4</option>
										<option value='5'>5</option>
										<option value='6'>6</option>
										<option value='7'>7</option>
										<option value='8'>8</option>
										<option value='9'>9</option>
										<option value='10'>10</option>
										<option value='11'>11</option>
										<option value='12'>12</option>
										<option value='13'>13</option>
										<option value='14'>14</option>
										<option value='15'>15</option>
										<option value='16'>16</option>
										<option value='17'>17</option>
										<option value='18'>18</option>
										<option value='19'>19</option>
										<option value='20'>20</option>
										<option value='21'>21</option>
										<option value='22'>22</option>
										<option value='23'>23</option>
									</Form.Select>
									<Form.Select
										aria-label='Default select example'
										style={{ width: '30%' }}
									>
										<option style={{ fontWeight: 'bold' }}>Minutes</option>
										<option value='00'>00</option>
										<option value='01'>01</option>
										<option value='02'>02</option>
										<option value='03'>03</option>
										<option value='04'>04</option>
										<option value='05'>05</option>
										<option value='06'>06</option>
										<option value='07'>07</option>
										<option value='08'>08</option>
										<option value='09'>09</option>
										<option value='10'>10</option>
										<option value='11'>11</option>
										<option value='12'>12</option>
										<option value='13'>13</option>
										<option value='14'>14</option>
										<option value='15'>15</option>
										<option value='16'>16</option>
										<option value='17'>17</option>
										<option value='18'>18</option>
										<option value='19'>19</option>
										<option value='20'>20</option>
										<option value='21'>21</option>
										<option value='22'>22</option>
										<option value='23'>23</option>
										<option value='24'>24</option>
										<option value='25'>25</option>
										<option value='26'>26</option>
										<option value='27'>27</option>
										<option value='28'>28</option>
										<option value='29'>29</option>
										<option value='30'>30</option>
										<option value='31'>31</option>
										<option value='32'>32</option>
										<option value='33'>33</option>
										<option value='34'>34</option>
										<option value='35'>35</option>
										<option value='36'>36</option>
										<option value='37'>37</option>
										<option value='38'>38</option>
										<option value='39'>39</option>
										<option value='40'>40</option>
										<option value='41'>41</option>
										<option value='42'>42</option>
										<option value='43'>43</option>
										<option value='44'>44</option>
										<option value='45'>45</option>
										<option value='46'>46</option>
										<option value='47'>47</option>
										<option value='48'>48</option>
										<option value='49'>49</option>
										<option value='50'>50</option>
										<option value='51'>51</option>
										<option value='52'>52</option>
										<option value='53'>53</option>
										<option value='54'>54</option>
										<option value='55'>55</option>
										<option value='56'>56</option>
										<option value='57'>57</option>
										<option value='58'>58</option>
										<option value='59'>59</option>
									</Form.Select>
								</div>
								<div style={{ paddingLeft: '10px' }}>Close time</div>
								<div className='d-flex' style={{ width: '100%' }}>
									<Form.Select
										aria-label='Default select example'
										style={{ width: '30%' }}
									>
										<option style={{ fontWeight: 'bold' }}>Hour</option>
										<option value='0'>0</option>
										<option value='1'>1</option>
										<option value='2'>2</option>
										<option value='3'>3</option>
										<option value='4'>4</option>
										<option value='5'>5</option>
										<option value='6'>6</option>
										<option value='7'>7</option>
										<option value='8'>8</option>
										<option value='9'>9</option>
										<option value='10'>10</option>
										<option value='11'>11</option>
										<option value='12'>12</option>
										<option value='13'>13</option>
										<option value='14'>14</option>
										<option value='15'>15</option>
										<option value='16'>16</option>
										<option value='17'>17</option>
										<option value='18'>18</option>
										<option value='19'>19</option>
										<option value='20'>20</option>
										<option value='21'>21</option>
										<option value='22'>22</option>
										<option value='23'>23</option>
									</Form.Select>
									<Form.Select
										aria-label='Default select example'
										style={{ width: '30%' }}
									>
										<option style={{ fontWeight: 'bold' }}>Minutes</option>
										<option value='00'>00</option>
										<option value='01'>01</option>
										<option value='02'>02</option>
										<option value='03'>03</option>
										<option value='04'>04</option>
										<option value='05'>05</option>
										<option value='06'>06</option>
										<option value='07'>07</option>
										<option value='08'>08</option>
										<option value='09'>09</option>
										<option value='10'>10</option>
										<option value='11'>11</option>
										<option value='12'>12</option>
										<option value='13'>13</option>
										<option value='14'>14</option>
										<option value='15'>15</option>
										<option value='16'>16</option>
										<option value='17'>17</option>
										<option value='18'>18</option>
										<option value='19'>19</option>
										<option value='20'>20</option>
										<option value='21'>21</option>
										<option value='22'>22</option>
										<option value='23'>23</option>
										<option value='24'>24</option>
										<option value='25'>25</option>
										<option value='26'>26</option>
										<option value='27'>27</option>
										<option value='28'>28</option>
										<option value='29'>29</option>
										<option value='30'>30</option>
										<option value='31'>31</option>
										<option value='32'>32</option>
										<option value='33'>33</option>
										<option value='34'>34</option>
										<option value='35'>35</option>
										<option value='36'>36</option>
										<option value='37'>37</option>
										<option value='38'>38</option>
										<option value='39'>39</option>
										<option value='40'>40</option>
										<option value='41'>41</option>
										<option value='42'>42</option>
										<option value='43'>43</option>
										<option value='44'>44</option>
										<option value='45'>45</option>
										<option value='46'>46</option>
										<option value='47'>47</option>
										<option value='48'>48</option>
										<option value='49'>49</option>
										<option value='50'>50</option>
										<option value='51'>51</option>
										<option value='52'>52</option>
										<option value='53'>53</option>
										<option value='54'>54</option>
										<option value='55'>55</option>
										<option value='56'>56</option>
										<option value='57'>57</option>
										<option value='58'>58</option>
										<option value='59'>59</option>
									</Form.Select>
								</div>
							</div>
							<div className='checkbox' style={{ marginTop: '15px' }}>
								<label className='d-flex'>
									<input
										type='checkbox'
										value='true'
										style={{ marginRight: '10px' }}
										onChange={() => {
											set_date_time({
												...date_time,
												sat: { ...date_time.sat, open: !date_time.sat.open },
											});
										}}
									/>
									Closed?
								</label>
							</div>
						</div>
						{/* //end */}
						{/* start */}
						<div
							className='d-flex align-items-start align-items-center'
							style={{ width: '70%' }}
						>
							<div
								className='d-flex flex-column align-items-start'
								style={{ width: '100%' }}
							>
								<label style={{ marginBottom: '5px', marginTop: '10px' }}>
									Sunday
								</label>
								<div style={{ paddingLeft: '10px' }}>Open time</div>
								<div className='d-flex' style={{ width: '100%' }}>
									<Form.Select
										aria-label='Default select example'
										style={{ width: '30%' }}
									>
										<option style={{ fontWeight: 'bold' }}>Hour</option>
										<option value='0'>0</option>
										<option value='1'>1</option>
										<option value='2'>2</option>
										<option value='3'>3</option>
										<option value='4'>4</option>
										<option value='5'>5</option>
										<option value='6'>6</option>
										<option value='7'>7</option>
										<option value='8'>8</option>
										<option value='9'>9</option>
										<option value='10'>10</option>
										<option value='11'>11</option>
										<option value='12'>12</option>
										<option value='13'>13</option>
										<option value='14'>14</option>
										<option value='15'>15</option>
										<option value='16'>16</option>
										<option value='17'>17</option>
										<option value='18'>18</option>
										<option value='19'>19</option>
										<option value='20'>20</option>
										<option value='21'>21</option>
										<option value='22'>22</option>
										<option value='23'>23</option>
									</Form.Select>
									<Form.Select
										aria-label='Default select example'
										style={{ width: '30%' }}
									>
										<option style={{ fontWeight: 'bold' }}>Minutes</option>
										<option value='00'>00</option>
										<option value='01'>01</option>
										<option value='02'>02</option>
										<option value='03'>03</option>
										<option value='04'>04</option>
										<option value='05'>05</option>
										<option value='06'>06</option>
										<option value='07'>07</option>
										<option value='08'>08</option>
										<option value='09'>09</option>
										<option value='10'>10</option>
										<option value='11'>11</option>
										<option value='12'>12</option>
										<option value='13'>13</option>
										<option value='14'>14</option>
										<option value='15'>15</option>
										<option value='16'>16</option>
										<option value='17'>17</option>
										<option value='18'>18</option>
										<option value='19'>19</option>
										<option value='20'>20</option>
										<option value='21'>21</option>
										<option value='22'>22</option>
										<option value='23'>23</option>
										<option value='24'>24</option>
										<option value='25'>25</option>
										<option value='26'>26</option>
										<option value='27'>27</option>
										<option value='28'>28</option>
										<option value='29'>29</option>
										<option value='30'>30</option>
										<option value='31'>31</option>
										<option value='32'>32</option>
										<option value='33'>33</option>
										<option value='34'>34</option>
										<option value='35'>35</option>
										<option value='36'>36</option>
										<option value='37'>37</option>
										<option value='38'>38</option>
										<option value='39'>39</option>
										<option value='40'>40</option>
										<option value='41'>41</option>
										<option value='42'>42</option>
										<option value='43'>43</option>
										<option value='44'>44</option>
										<option value='45'>45</option>
										<option value='46'>46</option>
										<option value='47'>47</option>
										<option value='48'>48</option>
										<option value='49'>49</option>
										<option value='50'>50</option>
										<option value='51'>51</option>
										<option value='52'>52</option>
										<option value='53'>53</option>
										<option value='54'>54</option>
										<option value='55'>55</option>
										<option value='56'>56</option>
										<option value='57'>57</option>
										<option value='58'>58</option>
										<option value='59'>59</option>
									</Form.Select>
								</div>
								<div style={{ paddingLeft: '10px' }}>Close time</div>
								<div className='d-flex' style={{ width: '100%' }}>
									<Form.Select
										aria-label='Default select example'
										style={{ width: '30%' }}
									>
										<option style={{ fontWeight: 'bold' }}>Hour</option>
										<option value='0'>0</option>
										<option value='1'>1</option>
										<option value='2'>2</option>
										<option value='3'>3</option>
										<option value='4'>4</option>
										<option value='5'>5</option>
										<option value='6'>6</option>
										<option value='7'>7</option>
										<option value='8'>8</option>
										<option value='9'>9</option>
										<option value='10'>10</option>
										<option value='11'>11</option>
										<option value='12'>12</option>
										<option value='13'>13</option>
										<option value='14'>14</option>
										<option value='15'>15</option>
										<option value='16'>16</option>
										<option value='17'>17</option>
										<option value='18'>18</option>
										<option value='19'>19</option>
										<option value='20'>20</option>
										<option value='21'>21</option>
										<option value='22'>22</option>
										<option value='23'>23</option>
									</Form.Select>
									<Form.Select
										aria-label='Default select example'
										style={{ width: '30%' }}
									>
										<option style={{ fontWeight: 'bold' }}>Minutes</option>
										<option value='00'>00</option>
										<option value='01'>01</option>
										<option value='02'>02</option>
										<option value='03'>03</option>
										<option value='04'>04</option>
										<option value='05'>05</option>
										<option value='06'>06</option>
										<option value='07'>07</option>
										<option value='08'>08</option>
										<option value='09'>09</option>
										<option value='10'>10</option>
										<option value='11'>11</option>
										<option value='12'>12</option>
										<option value='13'>13</option>
										<option value='14'>14</option>
										<option value='15'>15</option>
										<option value='16'>16</option>
										<option value='17'>17</option>
										<option value='18'>18</option>
										<option value='19'>19</option>
										<option value='20'>20</option>
										<option value='21'>21</option>
										<option value='22'>22</option>
										<option value='23'>23</option>
										<option value='24'>24</option>
										<option value='25'>25</option>
										<option value='26'>26</option>
										<option value='27'>27</option>
										<option value='28'>28</option>
										<option value='29'>29</option>
										<option value='30'>30</option>
										<option value='31'>31</option>
										<option value='32'>32</option>
										<option value='33'>33</option>
										<option value='34'>34</option>
										<option value='35'>35</option>
										<option value='36'>36</option>
										<option value='37'>37</option>
										<option value='38'>38</option>
										<option value='39'>39</option>
										<option value='40'>40</option>
										<option value='41'>41</option>
										<option value='42'>42</option>
										<option value='43'>43</option>
										<option value='44'>44</option>
										<option value='45'>45</option>
										<option value='46'>46</option>
										<option value='47'>47</option>
										<option value='48'>48</option>
										<option value='49'>49</option>
										<option value='50'>50</option>
										<option value='51'>51</option>
										<option value='52'>52</option>
										<option value='53'>53</option>
										<option value='54'>54</option>
										<option value='55'>55</option>
										<option value='56'>56</option>
										<option value='57'>57</option>
										<option value='58'>58</option>
										<option value='59'>59</option>
									</Form.Select>
								</div>
							</div>
							<div className='checkbox' style={{ marginTop: '15px' }}>
								<label className='d-flex'>
									<input
										type='checkbox'
										value='true'
										style={{ marginRight: '10px' }}
										onChange={() => {
											set_date_time({
												...date_time,
												sun: { ...date_time.sun, open: !date_time.sun.open },
											});
										}}
									/>
									Closed?
								</label>
							</div>
						</div>
						{/* //end */}

						<button
							className='btn btn-lg btn-primary'
							type='submit'
							style={{ width: '60%' }}
							onClick={() => {
								handle_submit();
							}}
						>
							{processing ? <Spinner animation='border' /> : <>Sign up</>}
						</button>
					</form>
				</main>
			</Container>
			{submit_success ? <Success_page /> : <></>}
		</>
	);
};

export default Sign_up;
