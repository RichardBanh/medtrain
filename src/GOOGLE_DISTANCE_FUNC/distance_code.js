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

export default distances;