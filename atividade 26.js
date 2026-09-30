const idade = 18;
let acesso = false;

if (idade < 16) {
    acesso = false;
    console.log("não pode votar");
} else if (idade >= 16 && idade < 18) {
    acesso = true;
    console.log("voto facultativo");
} else {
    acesso = true;
    console.log("voto obrigatório");
}
