let AWS = require('aws-sdk');
const sns = new AWS.SNS();
exports.handler = function (event, context, callback) {

	console.log('lambda started');

	sns.publish({
		Message: 'test message',
		MessageAttributes: {
			'AWS.SNS.SMS.SMSType': {
				DataType: 'String',
				StringValue: 'Promotional'
			},
			'AWS.SNS.SMS.SenderID': {
				DataType: 'String',
				StringValue: '94718386792'
			}
		},
		PhoneNumber: '+94711853897'
	}).promise()
		.then(data => {
			console.log('Success', data);
		})
		.catch(err => {
			console.log('Error', err);
			// error handling goes here
		});

	console.log('lambda end');

}