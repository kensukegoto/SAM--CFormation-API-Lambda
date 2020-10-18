const AWS = require('aws-sdk');
const cloudformation = new AWS.CloudFormation();
exports.lambdaHandler = async (event, context) => {
  console.log("start");
  var params = {
    StackName: 'lambda2s3', /* required */
    Capabilities: [
      "CAPABILITY_IAM","CAPABILITY_NAMED_IAM","CAPABILITY_AUTO_EXPAND"
    ],
    Parameters: [
      {
        ParameterKey: 'FunctionName',
        ParameterValue: 'repeat',
      },
      /* more items */
    ],
    TemplateURL: 'https://kg-lambda2s3-1018.s3-ap-northeast-1.amazonaws.com/api-lambda-get.yaml',
  };
  await new Promise((reso,reje) => {

    cloudformation.createStack(params, function (err, data) {
      console.log("is it excuted ??");
      if (err) {
        console.log("fail !");
        console.log(err, err.stack); // an error occurred
      }　else {
        console.log("success !");
        console.log(data,); // successful response
        reso();
      }

    });

  })


  

  console.log("end");

};
