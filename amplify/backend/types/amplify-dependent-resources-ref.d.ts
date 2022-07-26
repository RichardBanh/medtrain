export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "medtrain5d2c6186": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "function": {
        "medicaltrain": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "medclinicinfo": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "api": {
        "medicaltrain": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        },
        "medclinicinfo": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    }
}