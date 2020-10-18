const AWS = require('aws-sdk');
const cloudformation = new AWS.CloudFormation();
exports.lambdaHandler = async (event, context) => {
  console.log("来る？");
  var params = {
    StackName: 'lambda2s3', /* required */
    Parameters: [
      {
        ParameterKey: 'ParamMessage',
        ParameterValue: 'Kensuke Goto The Great',
      },
      /* more items */
    ],
    TemplateURL: 'https://kg-lambda2s3-1018.s3-ap-northeast-1.amazonaws.com/helle.template',
  };
  await new Promise((reso,reje) => {

    cloudformation.createStack(params, function (err, data) {
      console.log("実行されない？");
      if (err) {
        console.log("失敗");
        console.log(err, err.stack); // an error occurred
        reje("どんまい");
      }　else {
        console.log(data,"成功"); // successful response
        reso("オーキードーキー");
      }

    });

  })


  

  console.log("終了");

};
