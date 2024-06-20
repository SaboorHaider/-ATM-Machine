#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
let myBalance = 15000;
let myPin = 555;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.green("correct pin code"));
    let operations = await inquirer.prompt([
        {
            name: "operation",
            message: "set operation",
            type: "list",
            choices: ["withdraw", "checkbalance", "fastCash"],
        }
    ]);
    if (operations.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log(chalk.red("Insufficient Balance"));
        }
        else if (myBalance -= amountAns.amount) {
            console.log(chalk.green(`your remaining amount is: ${myBalance}`));
        }
    }
    ;
    if (operations.operation === "checkbalance") {
        console.log(`your balance is:  ${myBalance}`);
    }
    if (operations.operation === "fastCash") {
        let cash = await inquirer.prompt([
            {
                name: "options",
                message: "select any amount",
                type: "list",
                choices: ["1000", "3000", "6000", "8000"],
            }
        ]);
        if (myBalance -= cash.options) {
            console.log(chalk.green(`your remaining amount is: ${myBalance}`));
        }
    }
}
else {
    console.log(chalk.redBright("Incorrect pin code"));
}
