import inquirer from "inquirer";
import chalk from "chalk";


interface CurrencyConversion {
    current_currency: string;
    amount: number;
    convert_currency: string;
    rates1: { [currency: string]: number };
    rates2: { [currency: string]: number };
    rates3: { [currency: string]: number };
    rates4: { [currency: string]: number };
    rates5: { [currency: string]: number };
    rates6: { [currency: string]: number };
    rates7: { [currency: string]: number };
    rates8: { [currency: string]: number };
    rates9: { [currency: string]: number };
    rates10: { [currency: string]: number };
    rates11: { [currency: string]: number };
    rates12: { [currency: string]: number };
    rates13: { [currency: string]: number };



}

async function convertCurrency() {
    const main_code: CurrencyConversion = await inquirer.prompt([
        {
            type: "list",
            name: "current_currency",
            choices: ["Pakistani Rupee (PK)", "Indian Rupee (INR)", "Saudi Riyal (SAR)", "US Dollar (USD)", "British Pound (GBP)", "Euro (EUR)", "Japanese Yen (JPY)", "Chinese Yuan (CNY)", "Canadian Dollar (CAD)", "Australian Dollar (AUD)", "South Korean Won (KRW)"],
            message: "Please select your currency?"
        },
        {
            type: "number",
            name: "amount",
            message: "Please Enter the Amount that you want to convert:"
        },
        {
            type: "list",
            name: "convert_currency",
            choices: ["Pakistani Rupee (PK)", "Indian Rupee (INR)", "Saudi Riyal (SAR)", "US Dollar (USD)", "British Pound (GBP)", "Euro (EUR)", "Japanese Yen (JPY)", "Chinese Yuan (CNY)", "Canadian Dollar (CAD)", "Australian Dollar (AUD)", "South Korean Won (KRW)"],
            message: "Select the currency you want to convert to?"
        }
    ]);

    // rates1 is from pakistan to other currency
main_code.rates1={
    "Indian Rupee (INR)": 0.5351,
    "Saudi Riyal (SAR)": 0.0222,
    "US Dollar (USD)": 0.0057,
    "British Pound (GBP)": 0.0042,
    "Euro (EUR)": 0.0049,
    "Japanese Yen (JPY)": 0.6283,
    "Chinese Yuan (CNY)": 0.0371,
    "Canadian Dollar (CAD)": 0.0072,
    "Australian Dollar (AUD)": 0.0077,
    "South Korean Won (KRW)": 6.4761
};
        
    
//Rate2 is from india to other currency
main_code.rates2={
    "Pakistani Rupee (PK)": 2.3435,
    "Saudi Riyal (SAR)": 0.0486,
    "US Dollar (USD)": 0.0131,
    "British Pound (GBP)": 0.0095,
    "Euro (EUR)": 0.0111,
    "Japanese Yen (JPY)": 1.4194,
    "Chinese Yuan (CNY)": 0.0841,
    "Canadian Dollar (CAD)": 0.0163,
    "Australian Dollar (AUD)": 0.0174,
    "South Korean Won (KRW)": 16.0997,
}
// from sudi riyal
main_code.rates3={
    "Pakistani Rupee (PK)": 43.1713,
    "Indian Rupee (INR)": 20.5482,
    "US Dollar (USD)": 0.2665,
    "British Pound (GBP)": 0.1942,
    "Euro (EUR)": 0.2264,
    "Japanese Yen (JPY)": 28.7988,
    "Chinese Yuan (CNY)": 1.7002,
    "Canadian Dollar (CAD)": 0.3293,
    "Australian Dollar (AUD)": 0.3508,
    "South Korean Won (KRW)": 325.1588,
}
//"Exchange rate from USD to"
main_code.rates4={
    "Pakistani Rupee (PK)": 177.3,
    "Indian Rupee (INR)": 74.77,
    "Saudi Riyal (SAR)": 3.75,
    "British Pound (GBP)": 0.72,
    "Euro (EUR)": 0.83,
    "Japanese Yen (JPY)": 104.35,
    "Chinese Yuan (CNY)": 6.46,
    "Canadian Dollar (CAD)": 1.27,
    "Australian Dollar (AUD)": 1.33,
    "South Korean Won (KRW)": 1125.55,
}
// for  British Pound (GBP) to other
main_code.rates5={
    "Pakistani Rupee": 231.54,
    "Indian Rupee (INR)": 97.53,
    "Saudi Riyal (SAR)": 4.89,
    "US Dollar (USD)": 1.38,
    "Euro (EUR)": 1.18,
    "Japanese Yen (JPY)": 149.07,
    "Chinese Yuan (CNY)": 9.27,
    "Canadian Dollar (CAD)": 1.82,
    "Australian Dollar (AUD)": 1.91,
    "South Korean Won (KRW)": 1632.23,
}
//for Exchange rate from EUR to other
main_code.rates6={
    "Pakistani Rupee": 207.97,
    "Indian Rupee (INR)": 87.42,
    "Saudi Riyal (SAR)": 4.36,
    "US Dollar (USD)": 1.21,
    "British Pound (GBP)": 0.91,
    "Japanese Yen (JPY)": 126.47,
    "Chinese Yuan (CNY)": 7.82,
    "Canadian Dollar (CAD)": 1.55,
    "Australian Dollar (AUD)": 1.62,
    "South Korean Won (KRW)": 1361.07,
}
// for Japanese Yen (JPY) to other
main_code.rates7={
    "Pakistani Rupee": 2.15,
    "Indian Rupee (INR)": 0.72,
    "Saudi Riyal (SAR)": 0.03,
    "US Dollar (USD)": 0.0096,
    "British Pound (GBP)": 0.0073,
    "Euro (EUR)": 0.0084,
    "Chinese Yuan (CNY)": 0.062,
    "Canadian Dollar (CAD)": 0.012,
    "Australian Dollar (AUD)": 0.013,
    "South Korean Won (KRW)": 11.09,
}
// for Chinese Yuan (CNY) to other
main_code.rates8={
    "Pakistani Rupee": 22.94,
    "Indian Rupee (INR)": 10.15,
    "Saudi Riyal (SAR)": 0.5,
    "US Dollar (USD)": 0.15,
    "British Pound (GBP)": 0.11,
    "Euro (EUR)": 0.13,
    "Japanese Yen (JPY)": 15.95,
    "Canadian Dollar (CAD)": 0.2,
    "Australian Dollar (AUD)": 0.21,
    "South Korean Won (KRW)": 177.94,
}
// convert to Canadian Dollar (CAD) to other
main_code.rates9={
    "Pakistani Rupee": 134.63,
    "Indian Rupee (INR)": 58.53,
    "Saudi Riyal (SAR)": 2.61,
    "US Dollar (USD)": 0.79,
    "British Pound (GBP)": 0.57,
    "Euro (EUR)": 0.67,
    "Japanese Yen (JPY)": 86.26,
    "Chinese Yuan (CNY)": 5.13,
    "Australian Dollar (AUD)": 1.02,
    "South Korean Won (KRW)": 913.28
}
main_code.rates10={
    "Pakistani Rupee": 112.22,
    "Indian Rupee (INR)": 48.91,
    "Saudi Riyal (SAR)": 2.18,
    "US Dollar (USD)": 0.66,
    "British Pound (GBP)": 0.48,
    "Euro (EUR)": 0.56,
    "Japanese Yen (JPY)": 72.17,
    "Chinese Yuan (CNY)": 4.29,
    "Canadian Dollar (CAD)": 0.98,
    "South Korean Won (KRW)": 825.65
}
main_code.rates11={
    "Pakistani Rupee": 0.14,
    "Indian Rupee (INR)": 0.060,
    "Saudi Riyal (SAR)": 0.0025,
    "US Dollar (USD)": 0.00076,
    "British Pound (GBP)": 0.00055,
    "Euro (EUR)": 0.00064,
    "Japanese Yen (JPY)": 8.33,
    "Chinese Yuan (CNY)": 0.050,
    "Canadian Dollar (CAD)": 0.011,
    "Australian Dollar (AUD)": 0.0012
}



if (main_code.current_currency==="Pakistani Rupee (PK)") {
    const conversionRate = main_code.rates1[main_code.convert_currency];
    const convertedAmount = main_code.amount * conversionRate;

    console.log(`${chalk.yellow(main_code.amount)} ${chalk.blueBright(main_code.current_currency)} is equal to ${chalk.yellow(convertedAmount)} ${chalk.blueBright(main_code.convert_currency)}`);

}
else if (main_code.current_currency==="Indian Rupee (INR)") {
    const conversionRate = main_code.rates2[main_code.convert_currency];
    const convertedAmount = main_code.amount * conversionRate;

    console.log(`${chalk.yellow(main_code.amount)} ${chalk.blueBright(main_code.current_currency)} is equal to ${chalk.yellow(convertedAmount)} ${chalk.blueBright(main_code.convert_currency)}`);

}
else if (main_code.current_currency==="Saudi Riyal (SAR)") {
    const conversionRate = main_code.rates3[main_code.convert_currency];
    const convertedAmount = main_code.amount * conversionRate;

    console.log(`${chalk.yellow(main_code.amount)} ${chalk.blueBright(main_code.current_currency)} is equal to ${chalk.yellow(convertedAmount)} ${chalk.blueBright(main_code.convert_currency)}`);

}
else if (main_code.current_currency==="US Dollar (USD)") {
    const conversionRate = main_code.rates4[main_code.convert_currency];
    const convertedAmount = main_code.amount * conversionRate;

    console.log(`${chalk.yellow(main_code.amount)} ${chalk.blueBright(main_code.current_currency)} is equal to ${chalk.yellow(convertedAmount)} ${chalk.blueBright(main_code.convert_currency)}`);

}
else if (main_code.current_currency==="British Pound (GBP)") {
    const conversionRate = main_code.rates5[main_code.convert_currency];
    const convertedAmount = main_code.amount * conversionRate;

    console.log(`${chalk.yellow(main_code.amount)} ${chalk.blueBright(main_code.current_currency)} is equal to ${chalk.yellow(convertedAmount)} ${chalk.blueBright(main_code.convert_currency)}`);

}
else if (main_code.current_currency==="Euro (EUR)") {
    const conversionRate = main_code.rates6[main_code.convert_currency];
    const convertedAmount = main_code.amount * conversionRate;

    console.log(`${chalk.yellow(main_code.amount)} ${chalk.blueBright(main_code.current_currency)} is equal to ${chalk.yellow(convertedAmount)} ${chalk.blueBright(main_code.convert_currency)}`);

}
else if (main_code.current_currency==="Japanese Yen (JPY)") {
    const conversionRate = main_code.rates7[main_code.convert_currency];
    const convertedAmount = main_code.amount * conversionRate;

    console.log(`${chalk.yellow(main_code.amount)} ${chalk.blueBright(main_code.current_currency)} is equal to ${chalk.yellow(convertedAmount)} ${chalk.blueBright(main_code.convert_currency)}`);

}
else if (main_code.current_currency==="Chinese Yuan (CNY)") {
    const conversionRate = main_code.rates8[main_code.convert_currency];
    const convertedAmount = main_code.amount * conversionRate;

    console.log(`${chalk.yellow(main_code.amount)} ${chalk.blueBright(main_code.current_currency)} is equal to ${chalk.yellow(convertedAmount)} ${chalk.blueBright(main_code.convert_currency)}`);

}
else if (main_code.current_currency==="Canadian Dollar (CAD)") {
    const conversionRate = main_code.rates9[main_code.convert_currency];
    const convertedAmount = main_code.amount * conversionRate;

    console.log(`${chalk.yellow(main_code.amount)} ${chalk.blueBright(main_code.current_currency)} is equal to ${chalk.yellow(convertedAmount)} ${chalk.blueBright(main_code.convert_currency)}`);

}
else if (main_code.current_currency==="Australian Dollar (AUD)") {
    const conversionRate = main_code.rates10[main_code.convert_currency];
    const convertedAmount = main_code.amount * conversionRate;

    console.log(`${chalk.yellow(main_code.amount)} ${chalk.blueBright(main_code.current_currency)} is equal to ${chalk.yellow(convertedAmount)} ${chalk.blueBright(main_code.convert_currency)}`);

}
else if (main_code.current_currency==="South Korean Won (KRW)") {
    const conversionRate = main_code.rates11[main_code.convert_currency];
    const convertedAmount = main_code.amount * conversionRate;

    console.log(`${chalk.yellow(main_code.amount)} ${chalk.blueBright(main_code.current_currency)} is equal to ${chalk.yellow(convertedAmount)} ${chalk.blueBright(main_code.convert_currency)}`);

}

}

// Call the function to start the currency conversion process
convertCurrency();
