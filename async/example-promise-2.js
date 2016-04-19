// function doWork (shouldFail) {
// 	return new Promise(function(resolve, reject) {
// 		setTimeout(function() {
// 			if (typeof shouldFail === 'boolean' && shouldFail === true) {
// 				reject('error message');
// 			} else {
// 				resolve('success');
// 			}
// 		}, 1000);
// 	});
// }

// doWork().then(function(message) {
// 	console.log(message);
// 	return doWork(true);
// }).then(function(message) {
// 	console.log(message);
// }).catch(function(error) {
// 	console.log(error);
// });

function getLocation() {
	return new Promise(function(resolve, reject) {
		resolve('Denver');
	});
}

function getWeather (location) {
	return new Promise(function(resolve, reject) {
		resolve('It\'s 78 in ' + location);
	});
}

getLocation().then(function(location) {
	return getWeather(location);
}).then(function(currentWeather) {
	console.log(currentWeather);
}).catch(function(error) {
	console.log(error);
});