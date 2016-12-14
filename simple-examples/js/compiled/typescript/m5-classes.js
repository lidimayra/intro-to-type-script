// Example 1
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("world");
// Example 2
var Greeter2 = (function () {
    function Greeter2(element) {
        this.element = element;
    }
    Greeter2.prototype.greet = function (msg) {
        this.element.innerHTML = msg;
    };
    return Greeter2;
}());
// Example 3
var Account = (function () {
    function Account() {
        this.balance = 100;
    }
    Account.prototype.getBalance = function () {
        return this.balance;
    };
    return Account;
}());
var myBalance = new Account();
document.body.innerHTML = myBalance.balance.toString(); // calling property
document.body.innerHTML = myBalance.getBalance().toString(); // calling the getter method
