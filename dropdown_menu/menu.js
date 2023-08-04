function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
} 

window.onclick = function(event) {
    if (!event.target.matches('.dropdown-button')) {
        document.getElementById('myDropdown').classList.remove('show');
    }
}