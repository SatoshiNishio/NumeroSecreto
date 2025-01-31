alert('WelcomeToThisUselessGame!');
let numeroSecreto = 5; 
console.log(numeroSecreto);
let chute = prompt("choose your destiny 1-10");
let tentativas = 1;

//enquanto chute nao for igual a n.s. 
while (chute != numeroSecreto) 
    // se o chute for igual ao numero secreto
if (chute == numeroSecreto) {
    alert(`Congratulations! The number is ${numeroSecreto} with ${tentativas}, You win!`);}
  else {
    if (chute > numeroSecreto) {
        alert(`The number is more than ${chute}`);
    }else {
        if (chute < numeroSecreto)
        alert(`The number is less than ${chute}`);
    }
    //tentativas = tentativas + 1;
    tentativas++;
} 