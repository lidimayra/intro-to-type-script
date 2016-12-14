// Example 1 - Defining Static Members
var BankAccount = (function () {
    function BankAccount() {
    }
    BankAccount.getAccountNumber = function () {
        return BankAccount.accountNumber;
    };
    BankAccount.accountNumber = 123;
    return BankAccount;
}());
// Call a static member by using the ClassName
// BankAccount.getAccountNumber();
// Example 2 - Defining Static Properties
var Constants = (function () {
    function Constants() {
    }
    Object.defineProperty(Constants, "ROUTING_NUMBER", {
        get: function () { return '1231A4433Y2'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "BANK_NUMBER", {
        get: function () { return 100008374; },
        enumerable: true,
        configurable: true
    });
    return Constants;
}());
var Account = (function () {
    function Account() {
    }
    Object.defineProperty(Account.prototype, "accountInfo", {
        get: function () {
            return {
                routingNumber: Constants.ROUTING_NUMBER,
                bankNumber: Constants.BANK_NUMBER
            };
        },
        enumerable: true,
        configurable: true
    });
    return Account;
}());
