var text;
var randomNo = Math.floor((Math.random() * 5) + 1);;
const i = 0;
var elem;

window.onload = function () {
    elem = document.getElementsByClassName('displayScreen')[0];
}

function myGuess() {
    let number;
    text = document.getElementById('typeHere').value;
    number = parseInt(text);
    elem.innerHTML += '<div class="msgblock"><div class="message" >' + text + '</div></div>' ;
    computerGuess(number);
    document.getElementById('typeHere').value = "";
    elem.scrollTo(0, elem.scrollHeight);
}

function checkKey(which) {
    let temp = Math.min(parseInt(which.value), which.max);
    temp = Math.max(temp, which.min);
    which.value = temp;
    if (event.key === 'Enter'){
        myGuess();
    }
}

function computerGuess(number) {
    let tempmsg;
    if (isNaN(number)) {
        tempmsg = 'input number!';
    }
    else if (number <0 || number >5){
        tempmsg = 'invalid';
    }
    else if (number > randomNo  && number >0 && number <6)
    {
        tempmsg = 'your number is bigger';
    }
    else if (number < randomNo && number >0 && number <6){
        tempmsg= 'your number is smaller';
    }
    else {
        tempmsg = 'cool';
    }
    elem.innerHTML += '<div class="msgblock"><div class="botmsg">' + tempmsg + '</div></div>' ;
}   