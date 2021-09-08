// if..else

// Se a hora estiver entre 06:00 até 12:00 : Bom dia!
// Sestiver entre 12:00 até 18:00 : Boa tarde!
// Caso contrário : Boa noite!


let hora = 7;

if (hora > 6 && hora < 12) {
    // código a ser executado
    console.log('Bom dia!')

}
else if (hora > 12 && hora < 18) {
    // codigo a ser executado
    console.log('Boa tarde!')
}
else {
    // nenhuma das opções anteriores
    console.log('Boa noite!')
}