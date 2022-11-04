function seleccionHecha() {
    select.value === '1' && cuadroClick(cuadro1)
    select.value === '2' && cuadroClick(cuadro2)
    select.value === '3' && cuadroClick(cuadro3)
}


const selects = document.getElementById('selection')
select.addEventListener('change', seleccionHecha)