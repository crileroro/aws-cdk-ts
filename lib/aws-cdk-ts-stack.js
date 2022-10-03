"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsCdkTsStack = void 0;
const cdk = require("aws-cdk-lib");
const lambda = require("aws-cdk-lib/aws-lambda");
const apigateway = require("aws-cdk-lib/aws-apigateway");
class AwsCdkTsStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const apiFunction = new lambda.Function(this, "backendLambda", {
            runtime: lambda.Runtime.NODEJS_16_X,
            code: lambda.Code.fromAsset("./api"),
            memorySize: 128,
            timeout: cdk.Duration.seconds(5),
            handler: "index.lambdaHandler"
        });
        const api = new apigateway.LambdaRestApi(this, "apiEndpoint", {
            handler: apiFunction,
            defaultCorsPreflightOptions: {
                allowOrigins: apigateway.Cors.ALL_ORIGINS,
                allowMethods: apigateway.Cors.ALL_METHODS
            }
        });
        new cdk.CfnOutput(this, "apiurl", { value: api.url });
    }
}
exports.AwsCdkTsStack = AwsCdkTsStack;
