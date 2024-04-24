#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.blue("\n \t Welcome to 'CODEWITHNIMRA' - Words Counter \n"));
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: (chalk.bgCyan("\nEnter a Sentence:")),
    }
]);
let words = answers.sentence.trim().split(" ");
console.log(chalk.bold.bgCyan("\nSentence Words:"));
console.log(words);
console.log(chalk.bold.bgCyan(`\n Word Count: ${chalk.bold.green(words.length)}`));
