var request = require('request');

module.exports = function (location, callback) {

	var encodedLocation = encodeURIComponent(location);
	var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + encodedLocation + '&appid=5859af9747215404c879af29ce77662d&units=imperial';

	if (!location)
		return callback('No location provided');

	request({url: url, json: true}, function(error, response, body) {
		if (error) {
			callback('Unable to fetch weather.')
		} else {
			callback('It\'s ' + body.main.temp + ' in ' + body.name + '.');
		}
	});
}