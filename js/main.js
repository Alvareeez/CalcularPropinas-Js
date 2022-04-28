function calcProp() {
    //alert('ok')
    var total = document.getElementById('total').value
    var servicio = document.getElementById('servicio').value
    var personas = document.getElementById('personas').value
    var resultado = ((Number(total) * Number(servicio)) / Number(personas))

    var parrafo = document.getElementById('resultado')
    parrafo.innerHTML = ' Tu propina es de ' + resultado + ' € '
}

function Limpiar() {
    var total = document.getElementById('total')
    var servicio = document.getElementById('servicio')
    var personas = document.getElementById('personas')
    total.value = ''
    servicio.value = ''
    personas.value = ''
}