function calcProp() {
    //alert('ok')
    var total = document.getElementById('total').value
    var servicio = document.getElementById('servicio').value
    var personas = document.getElementById('personas').value

    //alert('Voy a ' + Operacion + ' los valores ' + valor1 + ' y ' + valor2);

    var resultado = ((Number(total) * (servicio)) / Number(personas))

    var parrafo = document.getElementById('resultado')
    parrafo.innerHTML = ' El resultado es ' + resultado
}