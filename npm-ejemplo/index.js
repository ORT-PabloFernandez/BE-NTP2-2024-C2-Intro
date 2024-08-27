import chalk from "chalk";
import cowsay from "cowsay";

console.log(chalk.bgGreen("Hola mundo"));

console.log(chalk.red(cowsay.say({ text: "hola mundo" })));
