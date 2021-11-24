// alert('ciao')

// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// generatore array numeri random

let arrayRandomNumber = [];
while(arrayRandomNumber.length < 5){
    let numeri = Math.floor(Math.random() * 100) + 1 *5;
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
    
    console.log(arrayRandomNumber.includes(userNumbers));


}
