
const encrypt = document.getElementById("encrypt");
const textEingabe = document.getElementById("eingabeText");
const nummerNumber = document.getElementById("nummerNumber");
const reset = document.getElementById("reset");
const ausgabe = document.getElementById('ausgabe');
//let test = text.split('').map(() => shiftLetter(letter, 3)).join(''); //['h', 'e', ...]



// shiftLetter(letter, nummerNumber).join("");
encrypt.addEventListener("click", lettersSplit);

function shiftLetter(letter, zahl) {
    letter = letter.charCodeAt();
    if (letter >= 65 && letter <= 90) {
        zahlGross = letter + zahl;
        if (zahlGross < 65) {
            zahlGross = 91 + zahl;
        }
        if (zahlGross > 90) {
            zahlGross = 64 + zahl;
        }
        let newLetter = String.fromCharCode(zahlGross);
        return newLetter;
    }
    if (letter >= 97 && letter <= 122) {
        zahlKlein = letter + zahl;

        if (zahlKlein < 97) {
            zahlKlein = 123 + zahl;
        }
        if (zahlKlein > 122) {
            zahlKlein = 96 + zahl;
        }

        let newLetter = String.fromCharCode(zahlKlein);
        return newLetter;
    }
}

    function lettersSplit() {
        let ausgabe = document.getElementById('ausgabe')
        let letters = textEingabe.value.split("");
        let nr = parseInt(nummerNumber.value);
        let newWord = '';
        for (let i = 0; i < letters.length; i++) {
            newWord += shiftLetter(letters[i], nr);
        }
        ausgabe.innerHTML = newWord;
    }
    
    reset.addEventListener("click", clear);

    function clear() {
        textEingabe.value = ""
        nummerNumber.value = ""
        ausgabe.innerHTML = "###"
    }

