var currentNumberWrapper = document.getElementById("currentNumber");

var currentNumber = 0;


function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    }

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    }


//Limitando somente em 0 e 10

/*
function increment() {
    if (currentNumber < 10 ) {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    }
}

function decrement() {
    if (currentNumber > 0 ) {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    }
}

*/

//Aplicando a cor vermelha quando o número fica negativo.


/*
let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');
const TXT = document.getElementById('text');

function increment() {
    if(count  < 10 || count < -10){	
        count++;
        CURRENT_NUMBER.innerHTML = count;
        if(count >= 0){
        CURRENT_NUMBER.style.color = "black";
        }
        CURRENT_NUMBER.addEventListener("increment")
    }
}

function decrement() {
    if(count  <= 10 && count > -10){	
        count--;
        CURRENT_NUMBER.innerHTML = count;
        if(count < 0){
            CURRENT_NUMBER.style.color = "red";
        }
        CURRENT_NUMBER.addEventListener("decrement")
    }
}
*/