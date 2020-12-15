function numero() {
    return String(Math.round(Math.random() * (1 - 0) + 0));
}
let cadena = numero();
for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 6; j++) {
        document.write(`<h4 class="numeros" align="center" style="color: green;">${cadena}</h4> `);
        cadena += numero();
        cadena += numero();
        cadena += numero();
    }
    cadena = cadena.slice(3, -3)
}

cadena = numero();
for (var i = 0; i < 3; i++) {
    
    document.write(`<h4 class="numeros" align="center" style="color: brown;">${cadena+cadena+cadena+cadena}</h4> `);
    cadena = numero();
    
}