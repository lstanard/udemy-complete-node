var accounts = [];

// Account object
// balance
// username

function createAccount(acct) {
	accounts.push(acct);
	return acct;
}

function getAccount(username) {
	var account;
	accounts.forEach(function(acct) {
		if (acct.username == username)
			account = acct;
	});
	return account;
}

// deposit
function deposit(acct, amt) {
	acct.balance += amt;
}

// withdraw
function withdraw(acct, amt) {
	acct.balance -= amt;
}

// getBalance
function getBalance(acct) {
	return acct.balance;
}

createAccount({balance: 1273, username: 'charlie'});
createAccount({balance: 7896, username: 'glenna'});
createAccount({balance: 4598, username: 'oscar'});
console.log(accounts);

var charlie = getAccount('charlie');
var glenna = getAccount('glenna');

deposit(charlie, 100);
deposit(glenna, 1000000);

console.log(getBalance(charlie));
console.log(getBalance(glenna));

console.log(accounts);
