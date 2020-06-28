function add(num1, num2){
    let answer = num1 + num2;
    return answer;
}

function subtract(num1, num2) {
    let answer = num1 - num2;
    return answer;
}

function multiply(num1, num2) {
    let answer = num1 * num2;
    return answer;
}

function divide(num1, num2) {
    let answer = num1 / num2;
    return answer;
}

function opChoice(num1, num2, operator){
    switch(operator){
        case "+":
            console.log(add(num1, num2));
            break;
        case "-":
            console.log(subtract(num1, num2));
            break;
        case "*":
            console.log(multiply(num1, num2));
            break;
        case "/":
            console.log(divide(num1,num2))
            break;
        
    }
}


opChoice(5, 10, "*");