let input;
var mybutton = `<button onclick="return this.parentNode.remove();" class='removebutton'>
                    -
                </button>`;

function addToList(){
    input = document.getElementById("inputText").value.trim();

    if (input.length > 0){

        document.getElementsByClassName('todo')[0].innerHTML += '<li class="todo-element">' + input + mybutton + '</li>';

        document.getElementById("inputText").value = "";

        document.getElementById("inputText").focus() ;
    }
}

function checkKey(e){
    if (event.key === 'Enter' ) {
        addToList();
    }
}   
