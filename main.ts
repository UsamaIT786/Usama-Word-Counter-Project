#! /usr/bin/env node
import inquirer from "inquirer"

const answer: {
    sentence: string
} = await inquirer.prompt([
    {

type: "input",
name: "sentence",
message: "Enter your sentence to count the words"
    }
])

const words = answer.sentence.trim().split(" ")
console.log(words)
console.log(`Your sentence word count is ${words.length}`)

