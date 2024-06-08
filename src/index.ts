import inquirer from "inquirer";

class Customer {
    constructor(private _firstName: string, private _lastName: string, private _age: number, private _gender: string, private _mobileNumber: string, private _account: Bank_Account) {
    }
    get firstName(): string {
        return this._firstName;
    }
    get lastName(): string {
        return this._lastName;
    }
    get age(): number {
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

    set firstName(firstName: string) {
        this._firstName = firstName;
    }
    set lastName(lastName: string) {
        this._lastName = lastName;
    }
    set age(age: number) {
        this._age = age;
    }
    set gender(gender: string) {
        this._gender = gender;
    }
    set mobileNumber(mobileNumber: string) {
        this._mobileNumber = mobileNumber;
    }
    set account(account: Bank_Account) {
        this._account = account;
    }

    customerInfo(): string {
        return `Name: ${this._firstName} ${this._lastName}
        Age: ${this._age}
        Gender: ${this._gender}
        Mobile Number: ${this._mobileNumber}
        Account: ${this.account}`
    }
}
class Bank_Account implements BankAccount {
    constructor(private _balance: number) {
        this._balance = 1000;
    }
    get balance(): number {
        return this._balance;
    }
    set balance(balance: number) {
        this._balance = balance;
    }
    debit(d: number): string {
        let statement: string = "Sorry! You have insufficient balance";
        if(this._balance>0) {
            statement = "The amount you entered is wrong";
            if(this._balance > d) {
                this._balance -= d;
                statement = `Transaction successful. The new account balance is ${this._balance}`;
            }
            else {
                statement = "Sorry! You don't have enough money to do the transaction.";
            }
        }
        return statement;
    }
    credit(d: number): string {
        let statement: string = "Transaction failed";
        if(d>0) {
            this._balance += d;
            if(d>0) {
                this._balance -= 1;
            }
            statement = `Transaction successful. The new account balance is ${this._balance}`;
        }
        return statement;
    }
}
interface BankAccount {
    debit(d: number): string;
    credit(d: number): string;
}

const bankAccount = new Bank_Account(1000);
const customer = new Customer("Muhammad Asad", "Ullah", 20, "Male", "03093292127", bankAccount);
customer.account.debit(10);
console.log(customer.account.balance);

