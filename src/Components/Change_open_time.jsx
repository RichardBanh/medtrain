import { Container } from 'react-bootstrap';
import { useState } from 'react';

const Change_open_time = (props) => {
	const [show_time_change, set_time_change] = useState(false);

	const open_bool_switch = () => {
		set_time_change(!show_time_change);
	};
	return (
		<>
			<button
				onClick={() => {
					open_bool_switch();
				}}
			>
				Change Open Hours
			</button>
			{show_time_change ? (
				<>
					<Container>
						<Container
							className='d-flex justify-content-center align-items-center'
							style={{ height: '130vh' }}
						>
							<main
								style={{ width: '60%', height: '100%' }}
								className='d-flex justify-content-around align-items-center flex-column'
							>
								<form
									style={{ width: '100%', height: '100%' }}
									className='d-flex justify-content-evenly flex-column align-items-center'
								>
									{/* start */}
									<div
										className='d-flex align-items-start align-items-center'
										style={{ width: '70%' }}
									>
										<div
											className='d-flex flex-column align-items-start'
											style={{ width: '100%' }}
										>
											<label>Monday</label>
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
													<option style={{ fontWeight: 'bold' }}>
														Minutes
													</option>
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
												/>
												Open?
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
											<label>Tuesday</label>
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
													<option style={{ fontWeight: 'bold' }}>
														Minutes
													</option>
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
												/>
												Open?
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
											<label>Wednesday</label>
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
													<option style={{ fontWeight: 'bold' }}>
														Minutes
													</option>
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
												/>
												Open?
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
											<label>Thursday</label>
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
													<option style={{ fontWeight: 'bold' }}>
														Minutes
													</option>
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
												/>
												Open?
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
											<label>Friday</label>
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
													<option style={{ fontWeight: 'bold' }}>
														Minutes
													</option>
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
												/>
												Open?
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
											<label>Saturday</label>
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
													<option style={{ fontWeight: 'bold' }}>
														Minutes
													</option>
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
												/>
												Open?
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
											<label>Sunday</label>
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
													<option style={{ fontWeight: 'bold' }}>
														Minutes
													</option>
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
												/>
												Open?
											</label>
										</div>
									</div>
									{/* //end */}

									<button
										className='btn btn-lg btn-primary'
										type='submit'
										style={{ width: '60%' }}
									>
										Sign up
									</button>
								</form>
							</main>
						</Container>
					</Container>
				</>
			) : (
				<></>
			)}
		</>
	);
};

export default Change_open_time;
