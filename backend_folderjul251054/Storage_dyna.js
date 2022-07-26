const add_data_hours = (dynamodb, obj) => {
	const params = {
		TableName: 'medicaltrain_hours',
		Item: { ...obj },
	};
	return dynamodb.put(params).promise();
};

const add_wait_time = (dynamodb, obj) => {
	const params = {
		TableName: 'medicaltrain_wait_time',
		Item: { ...obj },
	};
	return dynamodb.put(params).promise();
};

const add_appointment_avaliable = (dynamodb, obj) => {
	const params = {
		TableName: 'medicaltrain_appointments',
		Item: { ...obj },
	};
	return dynamodb.put(params).promise();
};

//hours
//days
//last_updated
//uuid as username

module.exports = { add_data_hours, add_wait_time, add_appointments };
