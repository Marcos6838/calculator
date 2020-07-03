let one = document.querySelector('#one');
let two = document.querySelector('#two');
let three = document.querySelector('#three');
let four = document.querySelector('#four');
let five = document.querySelector('#five');
let six = document.querySelector('#six');
let seven = document.querySelector('#seven');
let eight = document.querySelector('#eight')
let nine = document.querySelector('#nine');
let zero = document.querySelector('#zero');
let del = document.querySelector('#delete');
let divide = document.querySelector('#divide')
let multiply = document.querySelector('#multiply');
let subtract = document.querySelector('#subtract');
let equal = document.querySelector('#equals');
let plusMinus = document.querySelector('#plusMinus');
let decimal = document.querySelector('#decimal');
let display = document.querySelector('.display')
let operand1 = document.querySelector("#num1");

function add(num1, num2){
    let answer = num1 + num2;
    return answer;
}

function opSubtract(num1, num2) {
    let answer = num1 - num2;
    return answer;
}

function opMultiply(num1, num2) {
    let answer = num1 * num2;
    return answer;
}

function opDivide(num1, num2) {
    let answer = num1 / num2;
    return answer;
}

function opChoice(num1, num2, operator){
    switch(operator){
        case "+":
            console.log(add(num1, num2));
            break;
        case "-":
            console.log(opSubtract(num1, num2));
            break;
        case "*":
            console.log(opMultiply(num1, num2));
            break;
        case "/":
            console.log(opDivide(num1,num2))
            break;
        
    }
}


opChoice(5, 10, "*");






one.addEventListener('click',function(e){
    operand1.append(one.innerHTML)
    

});


two.addEventListener('click',function(e){
    operand1.append(two.innerHTML)
})


three.addEventListener('click',function(e){
    operand1.append(three.innerHTML)
})


four.addEventListener('click',function(e){
    operand1.append(four.innerHTML)
})


five.addEventListener('click',function(e){
    operand1.append(five.innerHTML)
})


six.addEventListener('click',function(e){
    operand1.append(six.innerHTML)
})


seven.addEventListener('click',function(e){
    operand1.append(seven.innerHTML)
})


eight.addEventListener('click',function(e){
    operand1.append(eight.innerHTML)
})


nine.addEventListener('click',function(e){
    operand1.append(nine.innerHTML)
})


zero.addEventListener('click',function(e){
    operand1.append(zero.innerHTML)
})

del.addEventListener('click',function(e){
    console.log(e);
})

divide.addEventListener('click',function(e){
    operand1.append(divide.innerHTML)
})

multiply.addEventListener('click',function(e){
    operand1.append(multiply.innerHTML)
})

subtract.addEventListener('click',function(e){
    operand1.append(subtract.innerHTML)
})

equal.addEventListener('click',function(e){
    operand1.append(equal.innerHTML)
})

plusMinus.addEventListener('click',function(e){
    operand1.append(plusMinus.innerHTML)
})

decimal.addEventListener('click',function(e){
    operand1.append(decimal.innerHTML)
})