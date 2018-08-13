module.exports = `
var api = require("./app")

// Mock Request
var request = {
	requestContext: {
		httpMethod: 'POST',
		resourcePath: '/{route}'
	}
};

// Mock Lamda Object
var lambda = {
	done: function (err, resp) {
		if (err) {
			console.log('ERROR: ' + err)
		} else {
			console.log('RESPONSE: ' + resp.body);
		}
	}
}

// Run with request
api.proxyRouter(request, lambda)
`;