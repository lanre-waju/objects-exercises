/*
1. UMBRELLA
* Programming Quiz: Umbrella
*/
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `umbrella`
 * - The variable `umbrella` should be an object
 * - Your `umbrella` object should have the `color` and `isOpen` property
 * - Your `umbrella` object should have an `open()` method that toggles the value of `isOpen` property
 * - Your `umbrella` object should have an `close()` method that toggles the value of `isOpen`
 */

var umbrella = {
    color: "pink",
    isOpen: true,
    open: function() {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = true;
            return "Julia opens the umbrella!";
        }
    },
    close: function() {
        if (umbrella.isOpen === false) {
            return "The umbrella is already closed!";
        } else {
            umbrella.isOpen = false;
            return "Julia closes the umbrella!";
        }
    },
};

/*
2. MENU ITEMS
* Programming Quiz: Menu Items
* Create an object named `breakfast`.
* The object should contain properties for the `name`, `price`, and `ingredients`.
* Print the entire object on the console
*/

var breakfast = {
    name: "The Lumberjack",
    price: "$9.95",
    ingredients: ["eggs", "sausage", "toast", "hashbrowns", "pancakes"],
};

/*
3. BANK ACCOUNT 1
 * Programming Quiz: Bank Accounts 1
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an object `savingsAccount`
 * - Your `savingsAccount` object should have the `balance` and `interestRatePercent` property
 * - Your `savingsAccount` object should have a `printAccountSummary()` method
 * - Your `printAccountSummary()` method should return the EXACT expected message
 * - BE CAREFUL ABOUT THE PUNCTUATION, SPACES, AND EXACT WORDS TO BE PRINTED.
 */

const savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    printAccountSummary: function accountSummary() {
        return `Welcome! \nYour balance is currently $${this.balance} and your interest rate is ${this.interestRatePercent}%.`;
    },
    // your code goes here
};

console.log(savingsAccount.printAccountSummary());
const savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    printAccountSummary: function accountSummary() {
        return `Welcome! \nYour balance is currently $${this.balance} and your interest rate is ${this.interestRatePercent}%.`;
    },
};

console.log(savingsAccount.printAccountSummary());

// 4. Using the object from exercise 3, answer the following quiz question:
// Which of the following are valid ways to access properties and call methods from the savingsAccount object?
// savingsAccount.balance;
// savingsAccount[balance];
// savingsAccount[“balance”];
// savingsAccount.”balance”;
// savingsAccount.withdraw = 50;
// savingsAccount.removeMoney = 50;
// savingsAccount.withdraw(50);
// savingsAccount.removeMoney(50);

const savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    printAccountSummary: function accountSummary() {
        return `Welcome! \nYour balance is currently $${this.balance} and your interest rate is ${this.interestRatePercent}%.`;
    },
};

savingsAccount.balance;

/*
5. FACEBOOK FRIENDS
 * Programming Quiz: Facebook Friends
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an object `facebookProfile`
 * - The `facebookProfile` object should have the `name` (string), `friends` (number), and `messages` (array of strings) property
 * - Your `facebookProfile` object should have the `postMessage()`, `deleteMessage()`, `addFriend()` and `removeFriend()` method
 * - Carefully implement the desired functionality of each method, as decribed above
 */

// TIP -
// In an array,
// - addition at the end is done using push() method
// - addition at a specific index is done using splice() method
// - deletion from the beginning is done using pop() method
// - deletion from a specific index is done using splice() method

let facebookProfile = {
    name: "Lanre",
    friends: 50,
    messages: ["Hello", "How are you?", "What's up?"],
    postMessage: function postMessage(message) {
        facebookProfile.messages.push(message);
    },
    deleteMessage: function deleteMessage(index) {
        facebookProfile.messages.splice(index, 1);
    },
    addFriend: function addFriend() {
        facebookProfile.friends += 1;
    },
    removeFriend: function removeFriend() {
        facebookProfile.friends -= 1;
    },
};

/*
6. DONUTS REVISITED
 * Programming Quiz: Donuts Revisited
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an array named `donuts`
 * - Your `donuts` array should call the `forEach()` method
 * - Your `forEach()` loop should output the donut summaries
 * - BE CAREFUL ABOUT THE PUNCTUATION, SPACES, AND EXACT WORDS TO BE PRINTED.
 */

// This is an array of objects.
const donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 },
];

donuts.forEach((element) => {
    console.log(`${element.type} donuts cost $${element.cost} each`);
});