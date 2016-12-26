var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Account = (function () {
    function Account(title) {
        this._title = title;
    }
    Account.prototype.getTitle = function () {
        return this._title;
    };
    return Account;
}());
var CheckingAccount = (function (_super) {
    __extends(CheckingAccount, _super);
    function CheckingAccount(title) {
        _super.call(this, title);
    }
    return CheckingAccount;
}(Account));
var account = new CheckingAccount('Jane Doe Checking');
console.log(account.getTitle());
