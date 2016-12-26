class Account {
    private _title: string;
    constructor(title: string) {
        this._title = title;
    }

    getTitle(): string {
        return this._title;
    }
}

class CheckingAccount extends Account {
    constructor(title: string) {
        super(title);
    }
}

var account = new CheckingAccount('Jane Doe Checking');
console.log(account.getTitle());
