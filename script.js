// 1. depsosite money 
// 2. determine number of lines to bet 
// 3. collect a bet amount 
// 4. spin the slot machine 
// 5. check if user won 
// 6. give user their winnings 
// 7. play again

const prompt = require("prompt-sync")();

const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Invalid deposit amount, please try again");
    }else {
        return numberDepositAmount;
    }
  }
};

const depositAmount = deposit();
console.log(depositAmount);
