// Example 1
var Account = (function () {
    function Account() {
        this._balance = 0;
    }
    Object.defineProperty(Account.prototype, "balance", {
        get: function () {
            return this._balance;
        },
        set: function (val) {
            this._balance = val;
        },
        enumerable: true,
        configurable: true
    });
    return Account;
}());
// Example 2
var Greeter = (function () {
    function Greeter(message) {
        this._message = message;
    }
    Object.defineProperty(Greeter.prototype, "message", {
        get: function () {
            return "Hey Paul! " + this._message;
        },
        set: function (val) {
            this._message = val;
        },
        enumerable: true,
        configurable: true
    });
    return Greeter;
}());
var greeter = new Greeter("How's your day?");
// alert(greeter._message);
alert(greeter.message);
