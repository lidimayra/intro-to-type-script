// Example 1
class Account {

  _balance: number = 0;

  get balance() {
    return this._balance;
  }

  set balance(val: number) {
    this._balance = val;
  }
}


// Example 2
class Greeter {
  private _message: string;
  constructor(message: string) {
    this._message = message;
  }

  get message() {
    return "Hey Paul! " + this._message;
  }

  set message(val: string) {
    this._message = val;
  }
}

var greeter = new Greeter("How's your day?");
// alert(greeter._message);
alert(greeter.message);
