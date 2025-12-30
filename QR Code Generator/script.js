const qrText = document.querySelector("#qrText");
const btnAction = document.querySelector("#btn-Action");
const qrCode = document.querySelector("#qr-code");

btnAction.addEventListener("click", async () => {

    if (qrText.value === "") {
        alert("Enter text or website or name to generate QR Code !!");
        return;
    }

    qrCode.src =
        `https://api.qrserver.com/v1/create-qr-code/?size=350x350&data=${qrText.value}`;
});