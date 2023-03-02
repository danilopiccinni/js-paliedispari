/*
Palidroma
-Chiedere all’utente di inserire una parola
-creare variabili per l'input e il bottone controllo
-Creare una funzione per capire se la parola inserita è palindroma


Pari e Dispari
-L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
-Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
-Sommiamo i due numeri
-Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
-Dichiariamo chi ha vinto.
*/

let inputParolaEl = document.getElementById ('input-parola')
let bottoneContrParolaEl = document.getElementById ('bott-controllo-parola')
let outputParolaEl = document.getElementById ('riultato-controllo-parola')

bottoneContrParolaEl.addEventListener ('click' , function() {
 
    let parola = Array.from(inputParolaEl.value)
    let parolainversa = Array.from(inputParolaEl.value).reverse()

    let parola1 = parola.toString()
    let parola2 = parolainversa.toString()

    console.log (parola , parolainversa , parola1 , parola2 )
    // console.log (parolainversa)
    if (parola1 == parola2) {
        outputParolaEl.innerHTML = 'la parola è palindroma'
    } else {
        outputParolaEl.innerHTML = 'la parola NON è palindroma'
    }






})










// gioco pari o dispari
// ________________________________________________________________________________
let bottoneContrNumeroEl = document.getElementById ('bottone-controllo-numero')
let outputNumeroEl = document.getElementById ('riultato-controllo-numero')
let PDsomma;

// let scelta = prompt('scegli pari o dispari?')

bottoneContrNumeroEl.addEventListener ('click' , function() {

    let inputNumeroEl = document.getElementById ('input-numero')
    let numero = inputNumeroEl.value
    let numeroBot = creaNumeroCasuale()
    controlloPariDispari(numero, numeroBot)



})

function creaNumeroCasuale () {

    let numerocasuale = Math.floor(Math.random() * 5 +1);
    return numerocasuale

}

function controlloPariDispari (numero1 , numero2) {

    numero1 = parseInt(numero1)
    numero2 = parseInt(numero2)

    let somma = sommaDueNumeri(numero1 , numero2)

    if (somma % 2 == 0) {

        PDsomma = 'pari'

    }else {

        PDsomma = 'dispari'

    }

    if (scelta == PDsomma) {

        outputNumeroEl.innerHTML = 'bot ha dato ' + numero2 +' la somma dei numeri e ' + somma + ' quindi pari ' + ' VINCE UTENTE' 

    } else {

        outputNumeroEl.innerHTML = 'bot ha dato ' + numero2 + ' la somma dei numeri e ' + somma + ' quindi dispari ' + 'VINCE BOT'

    }

    return somma;
}

function sommaDueNumeri (num1 , num2) {

    let sommavalori = num1 + num2
    return sommavalori

}