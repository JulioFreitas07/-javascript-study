var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0; 

var message = document.getElementById('message');
var button = document.getElementById('button');
button.addEventListener('click', ()=>{message.classList.toggle('reveal');})


function increment()
{
    currentNumber++;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement()
{
    currentNumber--;
    currentNumberWrapper.innerHTML = currentNumber;
}