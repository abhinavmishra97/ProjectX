document.addEventListener('DOMContentLoaded', () => {
    console.log('the page is loaded');
    const boxes = document.querySelectorAll('.box');
    const tl = document.querySelector('.timeline');
    const dino = document.querySelectorAll('.dinoImg');

    window.addEventListener('scroll', () => {
        const rectTimeline = tl.getBoundingClientRect();
        console.log(rectTimeline);
        // tl.style.height = `${ tl.scrollHeight }px`;

        dino.forEach(dinoImg => {
            // const rectBox = box.getBoundingClientRect();
            const rectDino= dinoImg.getBoundingClientRect();

            if (rectTimeline.bottom > rectDino.top && rectDino.bottom < window.innerHeight) {
                boxes.classList.add("show");
            }
            else {
                boxes.classList.remove("show");
            }
        })
    })
}) 