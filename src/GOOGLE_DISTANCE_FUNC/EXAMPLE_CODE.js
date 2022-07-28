// function initMap() {
// 	const service = new google.maps.DistanceMatrixService();

// 	const origin1 = { lat: 55.93, lng: -3.118 };
// 	const origin2 = 'Greenwich, England';
// 	const destinationA = 'Stockholm, Sweden';
// 	const destinationB = { lat: 50.087, lng: 14.421 };
// 	const request = {
// 		origins: [origin1, origin2],
// 		destinations: [destinationA, destinationB],
// 		travelMode: google.maps.TravelMode.DRIVING,
// 		unitSystem: google.maps.UnitSystem.METRIC,
// 		avoidHighways: false,
// 		avoidTolls: false,
// 	};

// 	service.getDistanceMatrix(request).then((response) => {
// 		console.log(response);
// 	});
// }

const distances = (origin, destination_array) => {
	const service = new google.maps.DistanceMatrixService();
	const request = {
		origins: [origin],
		destinations: [...destination_array],
	};
	service.getDistanceMatrix(request).then((response) => {
		return response;
	});
};

//need to load this as a loop
//origins can also be places
//destinations can be places
//https://developers.google.com/maps/documentation/javascript/distancematrix

// const obj = {
// 	destinationAddresses: [
// 		'Stockholm, Sweden',
// 		'Staroměstské nám. 1/3, Staré Město, 110 00 Praha-Praha 1, Czechia',
// 	],
// 	originAddresses: [
// 		'5 Great Carleton Pl, Edinburgh EH16 4TX, UK',
// 		'Greenwich, London, UK',
// 	],
// 	rows: [
// 		{
// 			elements: [
// 				{
// 					distance: {
// 						text: '2,521 km',
// 						value: 2520654,
// 					},
// 					duration: {
// 						text: '1 day 4 hours',
// 						value: 100115,
// 					},
// 					status: 'OK',
// 				},
// 				{
// 					distance: {
// 						text: '1,898 km',
// 						value: 1898176,
// 					},
// 					duration: {
// 						text: '20 hours 7 mins',
// 						value: 72419,
// 					},
// 					status: 'OK',
// 				},
// 			],
// 		},
// 		{
// 			elements: [
// 				{
// 					distance: {
// 						text: '1,885 km',
// 						value: 1885032,
// 					},
// 					duration: {
// 						text: '21 hours 7 mins',
// 						value: 75998,
// 					},
// 					status: 'OK',
// 				},
// 				{
// 					distance: {
// 						text: '1,263 km',
// 						value: 1262554,
// 					},
// 					duration: {
// 						text: '13 hours 25 mins',
// 						value: 48302,
// 					},
// 					status: 'OK',
// 				},
// 			],
// 		},
// 	],
// };

//one origin to all the destinations is one object!
