const endDate = "3 January 2024, 2:40:00 AM"
document.getElementById('end-date').innerText = endDate;

    const inputs = document.querySelectorAll('.timer-box');

function ticking() {

    const current = new Date();
    const final = new Date(endDate);

    const diff = (final - current) / 1000;

    if (diff <= 0) return;
    inputs[0].value = Math.floor(diff / 60 / 60 / 24);
    inputs[1].value = Math.floor((diff / 60 / 60 ) % 24);
    inputs[2].value = Math.floor((diff / 60 ) % 60);
    inputs[3].value = Math.floor(diff  % 60 );
    
}

ticking();

setInterval(() => {ticking() }, 1000);