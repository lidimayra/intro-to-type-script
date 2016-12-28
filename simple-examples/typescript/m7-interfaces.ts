// Example 1
interface IPlant {
    name: string;
    genus: string;
    category: string;
}

class Plant {
    name: string;
    genus: string;
    category: string;
}

// This works because the definitions of IPlant and Plant are identical
var p: IPlant;
p = new Plant();

class trees implements IPlant {
    name: string;
    genus: string;
    category: string;
}



// Example 2
interface IMessage {
    greeting: string;
}

interface IGreet {
    greet(msg: IMessage): void;
}



// Example 3
interface IAccountInfo {
    routingNumber: string;
    bankNumber: number;
}

interface IDepositWithDrawal {
    deposit(amount: number): void;
    withdrawal(amount: number): number;
}

interface IAccount extends IDepositWithDrawal {
    accountInfo: IAccountInfo;
    balance: number;
    title: string;
}
