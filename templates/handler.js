module.exports = 
`
api.{method}('/{-{routeName}-}', function (request) {
	var {-{routeName}-} = new {-{routeName}-}(request);
	return new Promise({-{routeName}-}.init);
});
`;