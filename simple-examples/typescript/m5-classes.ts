// Example 1
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    greet() {
        return "Hello, " + this.greeting;
    }
}

var greeter = new Greeter("world");


// Example 2
class Greeter2 {
    element: HTMLElement;

    constructor(element: HTMLElement) {
        this.element = element;
    }

    greet(msg: string) {
        this.element.innerHTML= msg;
    }
}


// Example 3
class Account {
    balance: number = 100;
    getBalance () {
        return this.balance;
    }
}

var myBalance = new Account();
document.body.innerHTML = myBalance.balance.toString(); // calling property
document.body.innerHTML = myBalance.getBalance().toString(); // calling the getter method
