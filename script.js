function factorial(n){

    let r = 1;

    for(let i=2;i<=n;i++){
        r*=i;
    }

    return r;

}

function poisson(goals, lambda){

    return (
        Math.pow(lambda,goals)
        *
        Math.exp(-lambda)
        /
        factorial(goals)
    );

}

function calcular(){

    let home =
        parseFloat(
            document.getElementById("home").value
        );

    let away =
        parseFloat(
            document.getElementById("away").value
        );

    let pHome =
        1 - poisson(0,home);

    let pAway =
        1 - poisson(0,away);

    let resultado =
`
Casa marca +0.5:
${(pHome*100).toFixed(2)}%

Visitante marca +0.5:
${(pAway*100).toFixed(2)}%
`;

    document.getElementById("resultado")
        .innerText = resultado;

}
