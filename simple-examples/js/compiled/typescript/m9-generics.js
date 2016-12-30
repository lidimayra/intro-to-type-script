function identity(arg) {
    return arg;
}
var output1 = identity("myString");
var output2 = identity("myString");
// Generic Function
function processData(data) {
    // process the data here
}
processData(504);
// Generic Class
var List = (function () {
    function List() {
        this._items = [];
    }
    List.prototype.add = function (item) {
        this._items.push(item);
    };
    List.prototype.getItems = function () {
        return this._items;
    };
    return List;
}());
var StringList = new List();
var Constants = (function () {
    function Constants() {
    }
    return Constants;
}());
var BankingAccount = (function () {
    function BankingAccount() {
    }
    Object.defineProperty(BankingAccount.prototype, "accountInfo", {
        get: function () {
            return {
                routingNumber: Constants.ROUTING_NUMBER,
                bankNumber: Constants.BANK_NUMBER
            };
        },
        enumerable: true,
        configurable: true
    });
    return BankingAccount;
}());
// Restrict T to anything that implements IAccount
var AccountList = (function () {
    function AccountList() {
        this._items = [];
    }
    AccountList.prototype.add = function (item) {
        this._items.push(item);
    };
    AccountList.prototype.getItems = function () {
        return this._items;
    };
    return AccountList;
}());
