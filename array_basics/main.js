//Alex Heitzenrater
// 29 APR 2024
// Array Basics

const firstName = "Alex";
const lastName = "Heitzenrater";
const outputString = `My name is ${firstName} ${lastName}, and this is a template string.`;
console.log(outputString)

const friends = [
    "Peyton O.",
    "Lucas",
    "Peyton S.",
    "Darian",
    "RJ",
]

console.log(friends)
console.log(friends.length)

friends.push("mason")
console.log(friends)

friends.unshift("mason")
friends.pop()
console.log(friends)