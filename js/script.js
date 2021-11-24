// alert('ciao')

// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// generatore array numeri random

let arrayRandomNumber = [];
while(arrayRandomNumber.length < 5){
    let numeri = Math.floor(Math.random() * 100) + 1;
    if(arrayRandomNumber.indexOf(numeri) === -1) arrayRandomNumber.push(numeri);
}
console.log(arrayRandomNumber);

// alert('Ricorda questi numeri' + arrayRandomNumber)


const element = document.getElementById('numeri_random');

element.innerHTML = arrayRandomNumber;

setTimeout (promptUtente, 5000);

function promptUtente() {
    
    element.innerHTML = '';

    let userNumbers = [];
    for (let i = 0; i < 5; i++){
        userNumbers.push(parseInt(prompt("Inserisci un numero")))
    }
    console.log(userNumbers);
    

    let contatore=0;
    let numeriGiusti = [];
    for (let i = 0; i<arrayRandomNumber.length; i++ ){
        // debugger;
        if (arrayRandomNumber[i] == userNumbers[i] ){
            contatore++;
            numeriGiusti.push(arrayRandomNumber[i]);
            // console.log(numeriGiusti);
            // console.log(contatore);
            element.innerHTML = 'Ti sei ricordato tutti i numeri! ' + numeriGiusti;
        }
        else{
            element.innerHTML = 'Ti sei ricordato ' + contatore + " numeri " + numeriGiusti;
        }
    }  


}
