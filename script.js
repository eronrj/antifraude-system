function executarScanner(){

let poisson = Math.floor(Math.random()*30)+70;
let montecarlo = Math.floor(Math.random()*25)+75;
let score = Math.floor(Math.random()*20)+80;

document.getElementById("poisson").innerHTML = poisson+"%";
document.getElementById("montecarlo").innerHTML = montecarlo+"%";
document.getElementById("score").innerHTML = score;

if(score >= 80){
document.getElementById("semaforo").innerHTML="🟢 VERDE";
}
else if(score >= 60){
document.getElementById("semaforo").innerHTML="🟡 AMARELO";
}
else{
document.getElementById("semaforo").innerHTML="🔴 VERMELHO";
}

document.getElementById("fake").innerHTML="NÃO";
document.getElementById("overfake").innerHTML="NÃO";

}
