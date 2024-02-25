import inquirer from "inquirer";
import chalk from "chalk";
import { CONVERTER } from "./METHODE_2_CONSTANTS.js";

interface CurrencyConversion1 {
    current_currency: string;
    amount: number;
    convert_currency: string;
}

async function convertCurrency1() {
    const main_code: CurrencyConversion1 = await inquirer.prompt([
        {
            type: "list",
            name: "current_currency",
            choices: Object.keys(CONVERTER),
            message: "Please select your currency?"
        },
        {
            type: "number",
            name: "amount",
            message: "Please Enter the Amount that you want to convert:"
        },
    ]);
    const converter_code:CurrencyConversion1=await inquirer.prompt([        {
        type: "list",
        name: "convert_currency",
        choices: Object.keys(CONVERTER[main_code.current_currency].rates),
        message: "Select the currency you want to convert to?"
    }
])
console.log(`${chalk.yellow(main_code.amount)} ${chalk.blueBright(main_code.current_currency)} is equal to ${chalk.yellow(main_code.amount * CONVERTER[main_code.current_currency].rates[converter_code.convert_currency])} ${chalk.blueBright(converter_code.convert_currency)}`);
}
convertCurrency1();
