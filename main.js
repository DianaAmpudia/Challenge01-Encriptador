function validateMessage(){
    let message = document.querySelector(".text-area").value;
    let validateText = message.match(/^[a-z ]*$/);

    console.log(validateText);

    if(!validateText || validateText === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos. Ingresa el texto nuevamente siguiendo las indicaciones.")
        location.reload()
        return true;
    }
}


function encryptMessage() {
    let message = document.querySelector(".text-area").value;
    let encryptedMessage = "";

    if(!validateMessage()) {

    for (let i = 0; i < message.length; i++) {
        if (message[i] == "a") {
            encryptedMessage = encryptedMessage + "ai"
        }
        else if (message[i] == "e") {
            encryptedMessage = encryptedMessage + "enter"
        }
        else if (message[i] == "i") {
            encryptedMessage = encryptedMessage + "imes"
        }
        else if (message[i] == "o") {
            encryptedMessage = encryptedMessage + "ober"
        }

        else if (message[i] == "u") {
            encryptedMessage = encryptedMessage + "ufat"
        }
        else {
            encryptedMessage = encryptedMessage + message[i];
        }

    }
    console.log(encryptedMessage)
    document.querySelector(".output-text").value = encryptedMessage;
    return encryptedMessage;
    }
}

function decodeMessage(){
    let message = document.querySelector(".text-area").value;
    let decodedMessage = "";

    for(let i = 0; i < message.length; i++){
        if(message[i] == "a"){
            decodedMessage = decodedMessage + "a"
            i = i+1;
        }
        else if(message[i] == "e"){
            decodedMessage = decodedMessage + "e"
            i = i+4;
        }
        else if(message[i] == "i"){
            decodedMessage = decodedMessage + "i"
            i = i+3;
        }
        else if(message[i] == "o"){
            decodedMessage = decodedMessage + "o"
            i = i+3;
        }
        
        else if(message[i] == "u"){
            decodedMessage = decodedMessage + "u"
            i = i+3;
        }
        else{
            decodedMessage = decodedMessage + message[i];
        }
        
    }

    console.log(decodedMessage);
    document.querySelector(".output-text").value = decodedMessage;
    return decodedMessage;
    }

function warningTextDisplay () {
    const messageWarning = document.querySelector(".insert-text-container");
    messageWarning.style.display = 'none';

    const outputText = document.querySelector(".output-text");
    outputText.style.display = 'inline';

    const copyButton = document.querySelector(".button-copy");
    copyButton.style.display = 'inline';
}



const encryptButton = document.querySelector(".button-encriptar");
encryptButton.addEventListener("click", () => {
    warningTextDisplay()
    encryptMessage()    
})

const decodeButton = document.querySelector(".button-desencriptar");
decodeButton.addEventListener("click", () => {
    warningTextDisplay()
    decodeMessage() 
})

const copyButton = document.querySelector(".button-copy"); 
copyButton.addEventListener("click", () => {
    let copyText = document.querySelector(".output-text").value;
    navigator.clipboard.writeText(copyText);
})




