import { useEffect } from 'react';

const Timer_component = (props) => {
	const [start_time, set_time] = useState(0);

	let timer = {};
	useEffect(() => {
		//need to add bool here
		start_timer(false, 0);
	}, []);

	const start_timer = (previous_time_bool, previous_time) => {
		if (previous_time_bool === true) {
			timer = setInterval(() => {
				set_time(previous_time + 1);
			}, 1000);
			return () => clearInterval(timer);
		} else {
			timer = setInterval(() => {
				set_time(start_time + 1);
			}, 1000);
			return () => clearInterval(timer);
		}
	};

	const restart_timer = () => {
		set_time(0);
	};

	const stop_timer = () => {
		clearInterval(timer);
	};

	return <div>{start_time}</div>;
};

export default Timer_component;
