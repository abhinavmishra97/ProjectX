var pressedButton;
let lengthOfExp=0;
var playing = false;

var arr = [0, 0, 0];

function buttonpress(which) {
    pressedButton = which.innerHTML;
    lengthOfExp++;
    if("÷*+-/".indexOf(pressedButton) > -1)
        compute();
    document.getElementById('type').value += pressedButton;
}

function compute() {
    arr = ['', '', ''];
    flags = [false, false];

    calcString = document.getElementById('type').value;
    
    var j = 0;

    for(let i = 0; i < calcString.length; i++) {
        
        currentChar = calcString.charAt(i);
        if(("÷*+-/".indexOf(currentChar) > -1) && flags[0]){
            arr[2] = "÷*+-/".indexOf(currentChar);
            j = 1;
        }
        else{
            flags[j] = true;
            arr[j] = arr[j] + currentChar;
        }
    }

    arr[0] = parseFloat(arr[0]);
    arr[1] = parseFloat(arr[1]);

    if(flags[0] && flags[1] == true)
        mymath();

    console.log(arr);
}

function mymath() {

    var finalAns;

    switch(arr[2]) {
        case 0: case 4: finalAns= arr[0]/arr[1];
        break;
        case 1: finalAns= arr[0]*arr[1];
        break;
        case 2: finalAns= arr[0]+arr[1];
        break;
        case 3: finalAns= arr[0]-arr[1];
        break;
        deault: finalAns= "error";
    }

    document.getElementById('type').value=finalAns;

}

function dlt() {
    let temporary;
    temporary= document.getElementById('type').value;
    document.getElementById('type').value = '';
    document.getElementById('type').value = temporary.substring(0, temporary.length-1);
}
function playMusic() {
    if(!playing){
        document.getElementById('myAudio').play();
        playing = true;
    }
    else {
        document.getElementById('myAudio').pause();
        playing = false;
    }
}

function clearAll() {
    document.getElementById('type').value = '';
}