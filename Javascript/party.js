let partyLocation = "GARDEN";
const shiftValue = 3;
let encryptedMessage = "";
let decryptedMessage = "";
let isPartySafe = false;


function encryptMessage(message, shift) {
    let encrypted = "";
    for (let i = 0; i < message.length; i++) {
        let charCode = message.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) { 
            encrypted += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) { 
            encrypted += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
        } else {
            encrypted += message[i]; 
        }
    }
    return encrypted;
}


function decryptMessage(encrypted, shift) {
    return encryptMessage(encrypted, 26 - shift); 
}


encryptedMessage = encryptMessage(partyLocation, shiftValue);
console.log("Encrypted Message:", encryptedMessage);


decryptedMessage = decryptMessage(encryptedMessage, shiftValue);
console.log("Decrypted Message:", decryptedMessage);


const isInteger = Number.isInteger(shiftValue);
console.log("Is shiftValue an integer?", isInteger);


isPartySafe = true;
console.log("Is the party safe?", isPartySafe);
