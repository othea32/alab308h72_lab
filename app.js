// Static Methods and Properties
// class Governor {
//   constructor(name) {
//     this.name = name;
//   }

//   static create(name) {
//     return new Governor(name);
//   }
// }

// const governor = Governor.create('Johnson');
// console.log(governor.name); // Johnson

// Inheritance

// class Person {
//  constructor (name, age, eyeColor) {
//    this.name = name;
//    this.age = age;
//    this.eyeColor = eyeColor;
//  }

//  walk() {
//    console.log("I am walking");
//  }

//  talk() {
//    console.log("I am talking");
//  }

//  eat() {
//    console.log("I am eating");
//  }
// }

// class PostalWorker extends Person {
//   constructor(name, age, eyeColor, address) {
//     super(name, age, eyeColor);
//     this.address = address;
//   }

//   deliverMail() {
//     console.log("I am delivering mail");
//   }

//   talk() {
//     console.log("I am talking to the people");
//   }
// }

//  class Chef extends Person {
//    constructor(name, age, eyeColor, restaurant) {
//      super(name, age, eyeColor);
//      this.restaurant = restaurant;
//    }

//    cook() {
//      console.log("I am cooking");
//    }

//    talk() {
//      console.log("I am talking to the customers");
//    }
//   }
 

  
//   const postalWorker = new PostalWorker("John", 30, "blue", "123 Main St");
//   const postalWorker2 = new PostalWorker("Mary", 35, "hazel", "456 Biven St");
//   const chef = new Chef("Mary", 40, "brown", "The Chef's Table");
//   const chef2 = new Chef("John", 45, "green", "The Chef's Table");

//   console.log(postalWorker);
//   console.log(postalWorker2);
//   console.log(chef);
//   console.log(chef2);

class BankAccount {
  constructor(ownerName, balance, acctNum) {
    this.ownerName = ownerName;
    this.balance = balance;
    this.acctNum = acctNum;
  }

  withdraw(amount) {
    this.balance -= amount;
  }

  deposit(amount) {
    this.balance += amount;
  }  
}

class CheckingAccount extends BankAccount {
  constructor(ownerName, balance, acctNum, overdraftEnabled) {
    super(ownerName, balance, acctNum);
    this.overdraftEnabled = overdraftEnabled;
  }

  withdraw(amount) {
    this.balance -= amount + this.overdraftEnabled;
  }
 }

 class SavingsAccount extends BankAccount {
  constructor(ownerName, balance, acctNum, interestRate) {
    super(ownerName, balance, acctNum);
    this.interestRate = interestRate;
  }

  withdraw(amount) {
    this.balance -= amount + this.interestRate;
  }
 }

 const checkingAccount = new CheckingAccount("John", 100, 123456789, 10);
 const savingsAccount = new SavingsAccount("Mary", 100, 987654321, 5);

 console.log(checkingAccount);
 console.log(savingsAccount);

