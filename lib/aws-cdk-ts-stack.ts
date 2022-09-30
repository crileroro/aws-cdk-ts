import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';

export class AwsCdkTsStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
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
