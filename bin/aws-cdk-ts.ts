#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AwsCdkTsStack } from '../lib/aws-cdk-ts-stack';
import { AwsCdkStaticContent } from '../lib/aws-cdk-static-content';

const sampleEnv = { 
    account: process.env.CDK_DEFAULT_ACCOUNT, 
    region: process.env.CDK_DEFAULT_REGION
 };
const app = new cdk.App();
new AwsCdkTsStack(app, 'AwsCdkTsStack', { env: sampleEnv });
new AwsCdkStaticContent(app, 'AwsCdkStaticContent', { env: sampleEnv });
