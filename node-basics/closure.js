function createAdder(baseNumber) {
	return function (numberToAdd) {
		return baseNumber + numberToAdd;
	}
}

var addTen = createAdder(10);
console.log(addTen(2)); // Expect to get 12
console.log(addTen(0)); // Expect to get 10