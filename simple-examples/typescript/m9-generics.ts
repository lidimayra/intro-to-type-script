function identity<T>(arg: T): T {
    return arg;
}

var output1 = identity<string>("myString");
var output2 = identity("myString");


// Generic Function
function processData<T>(data: T) {
    // process the data here
}
processData<number>(504);


// Generic Class
class List<T> {
    _items: T[] = [];
    add(item: T) {
        this._items.push(item);
    }
    getItems(): T[] {
        return this._items;
    }
}
var StringList = new List<String>();


// Generics with an Interface
interface IAccountInfo<TRouteNumber, TBankNumber> {
    routingNumber: TRouteNumber;
    bankNumber: TBankNumber;
}
class Constants {
    static ROUTING_NUMBER: string;
    static BANK_NUMBER: number;
}
class BankingAccount {
    get accountInfo(): IAccountInfo<string, number> {
        return {
            routingNumber: Constants.ROUTING_NUMBER,
            bankNumber: Constants.BANK_NUMBER
        };
    }
}


// Generic Constraints
interface IAccount { number: number }
// Restrict T to anything that implements IAccount
class AccountList<T extends IAccount> {
    _items: T[] = [];
    add(item: T) {
        this._items.push(item);
    }
    getItems(): T[] {
        return this._items;
    }
}
