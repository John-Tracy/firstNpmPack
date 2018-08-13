module.exports = 
`
'use strict';

var ApiBuilder = require('claudia-api-builder');
var api = new ApiBuilder();

module.exports = api;

api.get('/hello/world', function (request) {
	var adwords = new AdWords(request);
	return new Promise(adwords.getCampaign);
});

api.post('/hello/world', function (request) {
	var adwords = new AdWords(request);
	return new Promise(adwords.createCampaign);
});

/* display uncaughtException - This will show in AWS cloudwatch logs */
process.on('uncaughtException', function(error) {
	console.log(error);
});

/* display unhandledRejection - This will show in AWS cloudwatch logs */
process.on('unhandledRejection', function(error) {
	console.log(error);
});
`;