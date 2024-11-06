// Task 1
let balance = 0;

function deposit(amount) {
    if (amount > 0) {
        balance += amount;
        console.log(`Successfully deposited $${amount}. Current balance: $${balance}.`);
    } else {
        console.log("Deposit amount must be greater than zero.");
    }
}

// Task 2
function withdraw(amount) {
    if (amount > 0 && amount <= balance) {
        balance -= amount;
        console.log(`Successfully withdrew $${amount}. Current balance: $${balance}.`);
    } else if (amount > balance) {
        console.log("Insufficient funds for this withdrawal.");
    } else {
        console.log("Withdrawal amount must be greater than zero.");
    }
}

// Task 3
deposit(100);

withdraw(30);

checkBalance();

withdraw(80);

checkBalance();
