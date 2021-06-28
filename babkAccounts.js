var savingsAccount = { // object = savingsAccount
  balance: 1000,       //key = balance
  interestRatePercent: 1,
  deposit: function addMoney(amount) {  // method = the addMoney function
      if (amount > 0) {
          savingsAccount.balance += amount;
      }
  },
  withdraw: function removeMoney(amount) {   // method = the removeMoney function
      var verifyBalance = savingsAccount.balance - amount;
      if (amount > 0 && verifyBalance >= 0) {
          savingsAccount.balance -= amount;
      }
  },
  // your code goes here
};
printAccountSummary: function() {
  return "Welcome!\nYour balance is currently $" + savingsAccount.balance + " and your interest rate is " + savingsAccount.interestRatePercent + "%."
 // balance = object < savingsAccount > + dot notation < balance > + < savingsAccount > + dot notation < interestRatePercent > 
};
console.log(savingsAccount.printAccountSummary());