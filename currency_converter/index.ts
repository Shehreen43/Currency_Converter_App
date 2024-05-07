#! /usr/bin/env node

// Importing necessary modules
import inquirer from "inquirer";
import chalk from "chalk";

// Currency conversion rates
const currency:any = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
    DIN: 40
};

console.log(chalk.blue.bold.italic
   
   (`\n    <-------WELCOME TO MY CURRENCY CONVERTER APP !------->\n`));

// Prompting the user for inputs
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Select the currency you want to convert from:",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', 'DIN']
    },
    {
        name: "to",
        message: "Select the currency you want to convert to:",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', 'DIN']
    },
    {
        name: 'amount',
        message: 'Enter the amount of money:',
        type: 'number'
    }
])
.then((user_answer:any) => {
    let fromAmount = currency[user_answer.from]; // Exchange rate of 'from' currency
    let toAmount = currency[user_answer.to];     // Exchange rate of 'to' currency
    let amount = user_answer.amount;

    console.log(chalk.green(`\nYour currency conversion rate is equal to 1$ is: ${fromAmount} ${user_answer.from}`));
    console.log(chalk.yellow(`To currency conversion rate is equal to 1$ is:', ${toAmount} ${user_answer.to}`));
    console.log(chalk.cyan(`Your amount of money is: ${amount} ${user_answer.from}`));

    let baseAmount = amount / fromAmount;   // Converted to USD
    let convertedAmount = baseAmount * toAmount;
    let convert = Math.floor(convertedAmount);

    console.log(chalk.magentaBright(`\nConverted amount: ${convert} ${user_answer.to}\n`));
    console.log(chalk.blue.bold.italic(`     <========== THE END ===========>`));
})
.catch((error:string) => {
    console.log(chalk.red.bold("An error occurred:", error));
});
