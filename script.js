const num1 = parseInt(prompt("Enter first number: "), 10)
const num2 = parseInt(prompt("Enter second number"), 10)
const operator = prompt("Enter Arithmetic type: ")

if (operator === "+") {
  let ans = num1 + num2
  alert(`${num1} + ${num2} is ${ans}`)
} else if (operator === "-") {
  let ans = num1 - num2
  alert(`${num1} - ${num2} is ${ans}`)
} else if (operator === "*") {
  let ans = num1 * num2
  alert(`${num1} * ${num2} is ${ans}`)
} else if (operator === "/") {
  let ans = num1 / num2
  alert(`${num1} / ${num2} is ${ans}`)
} else {
  alert("Sorry, that arithmetic type doesn't work")
}
