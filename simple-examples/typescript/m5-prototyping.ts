// Example 1 - Defining Static Members
class BankAccount {
  private static accountNumber: number = 123;

  static getAccountNumber(): number {
    return BankAccount.accountNumber;
  }
}
// Call a static member by using the ClassName
// BankAccount.getAccountNumber();



// Example 2 - Defining Static Properties
class Constants {
  static get ROUTING_NUMBER(): string { return '1231A4433Y2'; }
  static get BANK_NUMBER(): number { return 100008374; }
}

class Account {
  get accountInfo() {
    return {
      routingNumber: Constants.ROUTING_NUMBER,
      bankNumber: Constants.BANK_NUMBER
    }
  }
}
