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
let decimal = document.querySelector('#decimal')

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
    console.log(e);
})


two.addEventListener('click',function(e){
    console.log(e);
})


three.addEventListener('click',function(e){
    console.log(e);
})


four.addEventListener('click',function(e){
    console.log(e);
})


five.addEventListener('click',function(e){
    console.log(e);
})


six.addEventListener('click',function(e){
    console.log(e);
})


seven.addEventListener('click',function(e){
    console.log(e);
})


eight.addEventListener('click',function(e){
    console.log(e);
})


nine.addEventListener('click',function(e){
    console.log(e);
})


zero.addEventListener('click',function(e){
    console.log(e);
})

del.addEventListener('click',function(e){
    console.log(e);
})

divide.addEventListener('click',function(e){
    console.log(e);
})

multiply.addEventListener('click',function(e){
    console.log(e);
})

subtract.addEventListener('click',function(e){
    console.log(e);
})

equal.addEventListener('click',function(e){
    console.log(e);
})

plusMinus.addEventListener('click',function(e){
    console.log(e);
})

decimal.addEventListener('click',function(e){
    console.log(e);
})