module.exports = `
/**
 * {-{routeName}-} - {-{methodName}-} 
 * @param {}  
 * @return {}
 */
module.exports = function {-{routeName}-}(rawData) {
	'use strict';
	let self = this;

	self.init = (resolve, reject) => {
		return resolve('Hello from your route');
	};

};
`;