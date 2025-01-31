alert('WelcomeToThisUselessGame!');
let numeroSecreto = 5; 
console.log(numeroSecreto)
let chute = prompt("choose your destiny 1-100");

// se o chute for igual ao numero secreto
if (chute == numeroSecreto) {
    alert(`Congratulations! The number is ${numeroSecreto}, You win!`);
} else {
    if (chute > numeroSecreto) {
        alert(`The number is less than ${chute}`);
    } else {
        alert(`The number is more than ${chute}`);
    }
}