# Welcome To My Project
## Introduction
 I have created a project called currency converter in which I have used inquirer.prompt and i use if condition and in this I am taking input from the user.
 ### usage
 1-first of all user provide Current currency,
 2-then provide amount that user want to convert,
 3-And finally provide the target currency.

 ### convertion currency

 1-"Pakistani Rupee (PK)", 
 2-"Indian Rupee (INR)", 
 3-"Saudi Riyal (SAR)", 
 4-"US Dollar (USD)", 
 5-"British Pound (GBP)", 
 6-"Euro (EUR)", 
 7-"Japanese Yen (JPY)", 
 8-"Chinese Yuan (CNY)", 
 9-"Canadian Dollar (CAD)", 
 10-"Australian Dollar (AUD)", 
 11-"South Korean Won (KRW)"

 ### Here We use two methode for create project(currency converter)
 #### First methode
 first of all hum ny interface sy type define ki or os ko function ko assign kar dii, Then hum ny inquirer.prompt ka use kiya jis sy hum user sy input ly rahy hai ,After ending inquirer prompt hum ny function ka rate define kiya (main_code.rate1={}) is me hum ny exchange rate define kar diye hai.
 Last me hum ny if else condition ka use kiya hai is me hum ny ak variable define kiya (const conversionRate = main_code.rates[main_code.convert_currency];) is ka matlab k main_code k object rates par jao ([]is ka matlab hai into, hum . ka use bi karty hai jab answer confirm hota hai) or os k under ja kar value dehko jo convert_currency(pakistani rupee) k agy pari hai or os print karo , bad me (    console.log(`${chalk.yellow(main_code.amount)} ${chalk.blueBright(main_code.current_currency)} is equal to ${chalk.yellow(convertedAmount)} ${chalk.blueBright(main_code.convert_currency)}`);)

 #### 2nd Methode
 2nd methode me hum ny ak new file create kar k os k under ak object banya or os k under rates k name sy dosra object banya jis k under exchange rate rahk diya , or first ts file me hum ny is file sy is object vale variable ko export kar k is ko use kar liya or humara code bhot hi short or easy ho gaya,

 ### conclusion 
 My Favourit Methode is 2nd methode  