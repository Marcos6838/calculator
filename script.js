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