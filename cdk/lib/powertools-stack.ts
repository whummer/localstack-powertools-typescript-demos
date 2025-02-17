import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
export class PowerToolsCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
   super(scope, id, props);
   const loggerFunction = new NodejsFunction(this, 'loggerFunction', {
      entry: '../logger-lambda/index.ts',
      handler: 'handler',
    });

    const tracerFunction = new NodejsFunction(this, 'tracerFunction', {
      entry: '../tracer-lambda/index.ts',
      handler: 'handler',
    });

    new cdk.CfnOutput(this, 'LoggerFunction', {
      value: loggerFunction.functionName,
    });
    
    new cdk.CfnOutput(this, 'TracerFunction', {
      value: tracerFunction.functionName,
    });
  }
}
