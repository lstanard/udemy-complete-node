var account = {
	balance: 0
};

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

deposit(account, 78);
deposit(account, 127);
withdraw(account, 23);

console.log(getBalance(account));