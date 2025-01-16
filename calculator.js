const prompt = require("prompt-sync")();

function getValidInput(promtMessage) {
  while (true) {
    let input = prompt(promtMessage).trim();
    if (!isNaN(input) && input !== "") {
      return parseFloat(input);
    }
    console.log("Invalid input. Please enter a valid number.");
  }
}

function giveNumber() {
  const number1 = getValidInput("Please enter number 1: ");
  const number2 = getValidInput("Please enter number 2: ");
  console.log(`${number1} and ${number2}`);
  calculator(number1, number2)
  
}


giveNumber();
function calculator(num1, num2){
  const operator = prompt("Please enter a sign '+','-','*','/': ")
    switch(operator){
        case "+":
          console.log(`Result:  ${num1 + num2}`)
          break
          
        case "-":
          console.log(`Result: ${num1 - num2}` )
          break
            
        case "*":
          console.log(`Result: ${num1 * num2}`)
          break
            
        case "/":
          console.log(`result: ${num1 / num2}`)
          break
            
        default :
          console.log("Invalid sign! ")
          const userInput = prompt("Do you want to play again! enter y/n: ")

          if(userInput.toLowerCase() === "y"){
            giveNumber()
          }
          else{
            console.log("See you again! ")
          }
    }
    
}


// learning
// 1
// return and console statement when used together will give undefined.
// The undefined is being printed because in your calculator function,
// Because
// when the operator is "+", you're using console.log to directly print the result but also using return

// 2
// console statement in switch is already printing result and i was calling the giveNumber 
// function with a variable that will also return undefined since 
// the function calculator was not returning anything


