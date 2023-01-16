let currentNum = "";
let previousNum = "";
let operator = "";
let answerNum = "";

const display_div = document.querySelector('.display');

const number_div = document.querySelectorAll('.numberButton');

const clear_div = document.querySelector('.Clear');

const positive_negative_div = document.querySelector('.Positive_Negative');

const operator_div = document.querySelectorAll ('.Operator');

const equal_div = document.querySelector ('.Equal');

const decimal_div = document.querySelector ('.Decimal')

const percentage_div = document.querySelector ('.Percentage')

//forEach Calls for each element in an Array (all number buttons) and adds an event listener "click"
//DOM Element TextContent (Grabs exact text/number from button), Line 26
//Function allows multiple numbers to be inputted
number_div.forEach((button) => {
    button.addEventListener ('click',function(e) {
        displayNumber(e.target.textContent);
    })
})
function displayNumber(number) {
    if (currentNum.length <= 10) {
        currentNum += number;
        display_div.textContent = currentNum;
    }
}

//Same as above code. The operator is hidden and stored as an empty string that won't show. It will be highlighted instead
//on the calculator so user knows what operator he/she pressed
operator_div.forEach((button) => {
    button.addEventListener ('click',function(e) {
        displayOperator(e.target.textContent);
    })
})
function displayOperator(op) {
    operator = op;
    op = "";
    previousNum = currentNum;
    currentNum = "";
    display_div.textContent = previousNum + op + currentNum;
}

//Adds decimal if current number does not have one.
decimal_div.addEventListener ('click',addDecimal);
function addDecimal () {
    if (!currentNum.includes('.')) {
        currentNum += '.';
        display_div.textContent = currentNum;
    }
}

//Makes number positive or negative
positive_negative_div.addEventListener ('click',positive_negative);
function positive_negative () {
    currentNum = -Math.abs(currentNum);
    display_div.textContent = currentNum;
}

//Turns number into its equivalent percentage
percentage_div.addEventListener ('click',percentage);
function percentage () {
    currentNum = currentNum / 100;
    display_div.textContent = currentNum;
}

//Code for mathmatical operations and links to the displayAnswer function
function operations () {
    previousNum = Number(previousNum);
    currentNum = Number(currentNum);
    answerNum = Number(answerNum)

    if (operator === '/') {
        answerNum = previousNum / currentNum;
        if (currentNum <= 0) {
            answerNum = "Error";
            operator = "";
            display_div.textContent = answerNum;
            return;
        }
    }
        else if (operator === '*') {
            answerNum = previousNum * currentNum;
        }
        else if (operator === '-') {
            answerNum = previousNum - currentNum;
        }
        else if (operator === '+') {
            answerNum = previousNum + currentNum;
        }
        answerNum= roundAnswer (answerNum);
        answerNum = answerNum.toString();
        displayAnswer();
    }

//Round decimals
function roundAnswer(num) {
    return Math.round(num * 10000000) / 10000000;
}

//Click equal button and display answer. 
equal_div.addEventListener ('click',operations);
function displayAnswer () {
    if (answerNum.length <= 10) {
    currentNum = answerNum;
    display_div.textContent = answerNum;
    operator = "";
    }
        else {
            display_div.textContent = answerNum.slice(0,10) + "...";
        }
    //Keeps the equation/expression going until user decides to clear
    }

//Clear function
clear_div.addEventListener ('click',clear);
function clear () {
    currentNum = "";
    previousNum = "";
    operator = "";
    answerNum = "";
    display_div.textContent = currentNum;
}


