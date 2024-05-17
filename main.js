import inquirer from 'inquirer';
let currencyConversion = {
    "PKR": {
        "USD": 0.0036,
        "GBP": 0.0028,
        "PKR": 1,
    },
    "GBP": {
        "USD": 1.26,
        "GBP": 1,
        "PKR": 350.76,
    },
    "USD": {
        "USD": 1,
        "GBP": 0.79,
        "PKR": 277.54,
    },
};
const answer = await inquirer.prompt([{
        type: "list",
        name: "from",
        message: "Please select your currency?",
        choices: ["PKR", "GBP", "USD"],
    },
    {
        type: "list",
        name: "to",
        message: "Please select your converstion rate",
        choices: ["PKR", "GBP", "USD"],
    },
    {
        type: "number",
        name: "amount",
        message: "Please enter the amount you wish to convert",
    }
]);
const { from, to, amount } = answer;
if (from && to && amount) {
    let result = currencyConversion[from][to] * amount;
    console.log(`your conversion from ${from} to ${to} is ${result}`);
}
else {
    console.log("invalid conversion");
}
