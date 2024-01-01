const container = document.querySelector(".container");
const imgBox = document.getElementById("imgBox");

function generator() {
    const qrText = document.getElementById("qrText");
    const qrImg = document.getElementById("qrImg");

    if (qrText.value.length > 0) {
            qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;

        container.classList.add("show");
        imgBox.classList.add("show-imgBox");

    }
    else {
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error")
        },600)
    }

}