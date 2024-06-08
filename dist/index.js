class Customer {
    _firstName;
    _lastName;
    _age;
    _gender;
    _mobileNumber;
    _account;
    constructor(_firstName, _lastName, _age, _gender, _mobileNumber, _account) {
        this._firstName = _firstName;
        this._lastName = _lastName;
        this._age = _age;
        this._gender = _gender;
        this._mobileNumber = _mobileNumber;
        this._account = _account;
    }
    get firstName() {
        return this._firstName;
    }
    get lastName() {
        return this._lastName;
    }
    get age() {
        return this._age;
    }
    get gender() {
        return this._gender;
    }
    get mobileNumber() {
        return this._mobileNumber;
    }
    get account() {
        return this._account;
    }
    set firstName(firstName) {
        this._firstName = firstName;
    }
    set lastName(lastName) {
        this._lastName = lastName;
    }
    set age(age) {
        this._age = age;
    }
    set gender(gender) {
        this._gender = gender;
    }
    set mobileNumber(mobileNumber) {
        this._mobileNumber = mobileNumber;
    }
    set account(account) {
        this._account = account;
    }
    customerInfo() {
        return `Name: ${this._firstName} ${this._lastName}
        Age: ${this._age}
        Gender: ${this._gender}
        Mobile Number: ${this._mobileNumber}
        Account: ${this.account}`;
    }
}
class Bank_Account {
    _balance;
    constructor(_balance) {
        this._balance = _balance;
        this._balance = 1000;
    }
    get balance() {
        return this._balance;
    }
    set balance(balance) {
        this._balance = balance;
    }
    debit(d) {
        let statement = "Sorry! You have insufficient balance";
        if (this._balance > 0) {
            statement = "The amount you entered is wrong";
            if (this._balance > d) {
                this._balance -= d;
                statement = `Transaction successful. The new account balance is ${this._balance}`;
            }
            else {
                statement = "Sorry! You don't have enough money to do the transaction.";
            }
        }
        return statement;
    }
    credit(d) {
        let statement = "Transaction failed";
        if (d > 0) {
            this._balance += d;
            if (d > 0) {
                this._balance -= 1;
            }
            statement = `Transaction successful. The new account balance is ${this._balance}`;
        }
        return statement;
    }
}
const bankAccount = new Bank_Account(1000);
const customer = new Customer("Muhammad Asad", "Ullah", 20, "Male", "03093292127", bankAccount);
customer.account.debit(10);
console.log(customer.account.balance);
export {};
