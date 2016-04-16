function greetUser(name) {
	return (typeof name === 'undefined') ? 'Hello world!' : 'Hello ' + name;
}

console.log(greetUser('Charlie'));
console.log(greetUser());