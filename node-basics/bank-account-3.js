var accounts = [];

function createAccount(acct) {
	accounts.push(acct);
	return acct;
}

function getAccount(username) {
	var account;

	for (var i = 0; i < accounts.length; i++) {
		if (accounts[i].username == username)
			account = accounts[i];
	}

	return account;
}

function deposit(acct, amt) {
	if (typeof amt === 'number')
		acct.balance += amt;
	else
		console.log('Deposit error');
}

function withdraw(acct, amt) {
	if (typeof amt === 'number')
		acct.balance -= amt;
	else
		console.log('Withdraw error');
}

function getBalance(acct) {
	return acct.balance;
}

function createBalanceGetter(acct) {
	return function() {
		return acct.balance;
	}
}

var andrew = createAccount({
	balance: 0,
	username: 'Andrew'
});

deposit(andrew, 120);
withdraw(andrew, 'my string');

var andrew2 = getAccount('Andrew');
var getAndrew2Balance = createBalanceGetter(andrew2);

console.log(getAndrew2Balance());



var charlieAcct = createAccount({
	balance: 1200,
	username: 'charlie'
});

deposit(charlieAcct, 1400); // expect 2600
// deposit(charlieAcct, 'fuzz'); // expect deposit error

var charlieAcctRef = getAccount('charlie');

// console.log(getBalance(charlieAcctRef));

withdraw(charlieAcct, 600); // expect 2000
// withdraw(charlieAcct, false); // expect withdraw error

// console.log(getBalance(charlieAcctRef));

var charlieAcctBalance = createBalanceGetter(charlieAcctRef);
// console.log(charlieAcctBalance()); // expect 2000

deposit(charlieAcct, 100000);

// console.log(charlieAcctBalance()); // expect 102000