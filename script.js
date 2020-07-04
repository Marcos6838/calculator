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
let add = document.querySelector('#add')
let clear = document.querySelector('#clear')
let equal = document.querySelector('#equals');
let plusMinus = document.querySelector('#plusMinus');
let decimal = document.querySelector('#decimal');
let display = document.querySelector('.display')
let operand1 = document.querySelector("#num1");
let operand2 = document.querySelector("#num2");
let buttons = document.querySelector(".buttons")

function opAdd(num1, num2){
    let answer = num1 + num2;
    operand2.append(answer)
    return answer;
}

function opSubtract(num1, num2) {
    let answer = num1 - num2;
    operand2.append(answer)
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
            console.log(opAdd(num1, num2));
            break;
        case "-":
            console.log(opSubtract(num1, num2));
            break;
        case "x":
            console.log(opMultiply(num1, num2));
            break;
        case "/":
            console.log(opDivide(num1,num2))
            break;
        
    }
}


opChoice(5, 10, "*");

let num1 = 0;
let tempNumber
let num2;


one.addEventListener('click',function(e){
    operand1.append(one.innerHTML)
    num1 += one.innerHTML;
 
});


two.addEventListener('click',function(e){
    operand1.append(two.innerHTML)
    num1 += two.innerHTML;
})


three.addEventListener('click',function(e){
    operand1.append(three.innerHTML)
    num1 += three.innerHTML;
})


four.addEventListener('click',function(e){
    operand1.append(four.innerHTML)
    num1 += four.innerHTML;
})

five.addEventListener('click',function(e){
    operand1.append(five.innerHTML)
    num1 += five.innerHTML;
})

six.addEventListener('click',function(e){
    operand1.append(six.innerHTML)
    num1 += six.innerHTML;
})
 
seven.addEventListener('click',function(e){
    operand1.append(seven.innerHTML)
    num1 += seven.innerHTML;
})

eight.addEventListener('click',function(e){
    operand1.append(eight.innerHTML)
    num1 += eight.innerHTML;
})

nine.addEventListener('click',function(e){
    operand1.append(nine.innerHTML)
    num1 += nine.innerHTML;
})

zero.addEventListener('click',function(e){
    operand1.append(zero.innerHTML)
    num1 += zero.innerHTML;
})

del.addEventListener('click',function(e){
    if(tempNumber >= 0 || tempNumber <= 0){
        operand1.innerHTML = ''
        operand1.append("ERROR")
    }else{
        num1 = num1.substr(1)
        operand1.innerHTML = num1;
    }
   
    
})

divide.addEventListener('click',function(e){
    operand1.append(divide.innerHTML)
    tempNumber = num1;
    num1 = ''
    operator = divide.innerHTML;
})

multiply.addEventListener('click',function(e){
    operand1.append(multiply.innerHTML)
    tempNumber = num1;
    num1 = ''
    operator = multiply.innerHTML;
})

subtract.addEventListener('click',function(e){
    operand1.append(subtract.innerHTML)
    tempNumber = num1;
    num1 = ''
    operator = subtract.innerHTML;
})

add.addEventListener('click',function(e){
    operand1.append(add.innerHTML)
    tempNumber = num1;
    tempNumber = parseFloat(tempNumber)
    num1 = ''
    operator = add.innerHTML;
})

equal.addEventListener('click',function(e){
    operand1.append(equal.innerHTML)                           
    num1 = parseFloat(num1)
    num2 = num1
    num1 = tempNumber
    opChoice(num1, num2, operator)
})

clear.addEventListener('click',function(e){
    num1 = 0
    num2 = 0
    tempNumber = 0
    operand1.innerHTML = ''
    operand2.innerHTML = ''
})

plusMinus.addEventListener('click',function(e){
    if(num1 === 0 || num1 === ''){
        num1 = "-";
        operand1.append(num1)
    }else{
        num1 = "-" + num1;
        num1 = parseFloat(num1)
        tempNumber = "-" + num1;
        operand1.innerHTML = ''
        operand1.append(num1)
    }

})

decimal.addEventListener('click',function(e){
    operand1.append(decimal.innerHTML)
    num1 += decimal.innerHTML; 
})