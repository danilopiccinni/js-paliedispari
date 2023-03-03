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


// gioco pari o dispari
// ________________________________________________________________________________
let bottoneContrNumeroEl = document.getElementById ('bottone-controllo-numero')
let outputNumeroEl = document.getElementById ('riultato-controllo-numero')
let PDsomma;

let scelta = prompt("scegli 'pari' o 'dispari'?")
let scelteEl = document.getElementById ('scelte')
    if (scelta == 'pari') {
        scelteEl.innerHTML = 'UTENTE pari' + '<br>' + 'BOT dispari'
    } else {
        scelteEl.innerHTML = 'UTENTE dispari' + '<br>' + 'BOT pari'
    }


bottoneContrNumeroEl.addEventListener ('click' , function() {
    
    let inputNumeroEl = document.getElementById ('input-numero')
    let numero = parseInt (inputNumeroEl.value)
    let numeroBot = parseInt(creaNumeroCasuale())
    let sommagiocata = sommaDueNumeri(numero , numeroBot)
    controlloPariDispari(numero, numeroBot)

        if (scelta == PDsomma) {
        
            outputNumeroEl.innerHTML = 'bot ha dato ' + numeroBot +' la somma dei numeri è ' + sommagiocata + ' ' + PDsomma + ' VINCE UTENTE' 
            
        } else {
            
            outputNumeroEl.innerHTML = 'bot ha dato ' + numeroBot + ' la somma dei numeri è ' + sommagiocata + ' ' + PDsomma + ' VINCE BOT'
            
        }

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
     
    return PDsomma;

}

function sommaDueNumeri (num1 , num2) {
    
    let sommavalori = num1 + num2

    return sommavalori

}


// controllo palindomo
// _________________________________________________________________________________-


let inputParolaEl = document.getElementById ('input-parola')
let bottoneContrParolaEl = document.getElementById ('bott-controllo-parola')
let outputParolaEl = document.getElementById ('riultato-controllo-parola')
let parola;


bottoneContrParolaEl.addEventListener ('click' , function() {

    parola = Array.from(inputParolaEl.value)

    let veroFalso = controllapalindromia(parola)

    if (veroFalso == true) {
        outputParolaEl.innerHTML = 'la parola è palindroma'
    } else {
        outputParolaEl.innerHTML = 'la parola NON è palindroma'
    }

})


function controllapalindromia (paroladacontrollare) {

    let esito = true

    parola = Array.from(inputParolaEl.value)

    let parolainversa = Array.from(inputParolaEl.value).reverse()
    
    let parola1 = parola.toString()
    let parola2 = parolainversa.toString()
    
    console.log (parola , parolainversa , parola1 , parola2 )
    console.log (esito)

    if (parola1 !== parola2) {
        esito = false
    } 

return esito ;

}
