#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";


console.log(chalk.red.bold("\n \t welcome to 'codewithNoman' - currency converter\n"))

// Define the list of currencies and their exchange rate
let exchange_rate: any = {
    "USD": 1,  //Base currency 
    "EUR": 0.9, //European currency (EURO)
    "JYP": 113, //Japnese currency (YEN)
    "CAD": 1.3, //canadian doller (CAD)
    "AUD": 1.65, //Australian dollr (AUD)
    "PKR": 277.70, //Pakistan rupee (PKR)
    // Add more currencies and their axchange rate here
}

// promt the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
       name: "from_currency",
       type: "list",
       message: "select the currency to convert from:",
       choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
       name: "to_currency",
       type: "list",
       message: "select the currency to convert into:",
       choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the to convert:"
    }
]);

//perfome currency conversion by using fromula
let from_amount =  exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount

//Formula of convertion
let base_amount = amount  / from_amount
let converted_amount = base_amount * to_amount

//Display the convrted amount
console.log(`converted amount = ${chalk.blue(converted_amount.toFixed(2))}`);
