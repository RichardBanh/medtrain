/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

exports.handler = async (event) => {
	console.log(`EVENT: ${JSON.stringify(event)}`);
	const identity_object = event.requestContext.identity;
	const type = event.body.type;

	try {
		const username = identity_object.cognitoIdentityId;
		const account_id = identity_object.accountId;
		const cognito_authentication_type =
			identity_object.cognitoAuthenticationType;
		if (username || account_id || cognito_authentication_type) {
			//only open path if user is logged in
		} else {
			let data = {
				statusCode: 401,
				body: JSON.stringify({ error: 'not authorized' }),
			};
			return data;
		}
	} catch (error) {
		let data = { statusCode: 500, body: JSON.stringify(error) };
		return data;
	}
	const dynamodb = new AWS.DynamoDB.DocumentClient();
	//  Uncomment below to enable CORS requests
	//  headers: {
	//      "Access-Control-Allow-Origin": "*",
	//      "Access-Control-Allow-Headers": "*"
	//  },
};
