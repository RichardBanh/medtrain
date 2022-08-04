/* global google */

const distances = async (origin, destination_array) => {
	const service = new google.maps.DistanceMatrixService();
	const request = {
		origins: [origin],
		destinations: [...destination_array],
	};
	await service.getDistanceMatrix(request).promise();
};

export default distances;
