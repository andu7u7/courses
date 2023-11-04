// Función anónima autoejecutable
(function () {
    // ===== TIPADO =====  
    // Inferido
    var myName = 'Andy';
    console.log("My name is ".concat(myName));
    // Explicito
    var myAge = 32;
    console.log("My age is ".concat(myAge));
    // Union
    var idUser;
    var randomId = Math.random() < 0.5;
    idUser = randomId ? '10' : 10;
    if (typeof idUser === 'string')
        console.log("User name (string) is ".concat(idUser));
    else
        console.log("User id (number) is ".concat(idUser));
    // Any - Un gran poder conlleva una gran responsabilidad
    var anyVariable = 'Hello';
    anyVariable;
    anyVariable;
    var idUser2 = 10;
    console.log("User id (number) is ".concat(idUser2));
    var smallPicture = '100x100';
    console.log("Picture size is ".concat(smallPicture));
    // ===== SISTEMAS NUMÉRICOS ===== 
    // Binario
    var binario = 10;
    console.log("Binario: ".concat(binario));
    // Hexadecimal
    var hexadecimal = 0xA;
    console.log("Hexadecimal: ".concat(hexadecimal));
    // Octal
    var octal = 10;
    console.log("Octal: ".concat(octal));
})();
