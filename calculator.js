const prompt = require("prompt-sync")()

function getValidInput(promtMessage)
{
    while(true)
    {
    
        let input = prompt(promtMessage).trim();
        if(!isNaN(input) && input !== ""){
            return parseFloat(input)
        }
        console.log("Invalid input. Please enter a valid number.")
        
    }
}

function giveNumber(){
    const number1 = getValidInput("Please enter number1: ");
    const number2 = getValidInput("Please enter number 2: ")
    console.log(`${number1} and ${number2}`)
}

giveNumber()
// function calculator(num1, num2){

//     switch(operator){
//         case "+":
//             return num1 + num2
//             break
//         case "-":
//             return num1 - num2
//             break
//         case "*":
//             return num1 * num2
//             break
//         case "/":
//             return num1 / num2
//             break
//         default :
//             return "Invalid sign!"
//     }
// }


// const result = calculator(number1, number2)
// console.log(result)
