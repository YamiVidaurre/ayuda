function borrar(e) {
    e.preventDefault()
    formulario.valor1.value = ''
    formulario.valor2.value = ''
    formulario.valor3.value = ''
    formulario.valor4.value = ''
    formulario.selection.value = ''

    for (let item of cuadros) {
        if(item.id !== cuadro.id){
            item.classList.replace('border-success', 'border-muted')
            item.ariaChecked = false
        }
    }
}

function checkError(){

    let informacion = false

    const opciones = 
    formulario.opciones.value === '1' && 'Estudiante'||
    formulario.opciones.value === '2' &&  'Trainee'||
    formulario.opciones.value === '3' && 'Junior'
    
    

       

    
    formulario.valor1.value === ''
        ? formulario.valor1.classList.add('border-danger')
        : formulario.valor1.classList.remove('border-danger')

    formulario.valor2.value === ''
        ? formulario.valor2.classList.add('border-danger')
        : formulario.valor2.classList.remove('border-danger')

    formulario.valor3.value === ''
        ? formulario.valor3.classList.add('border-danger')
        : formulario.valor3.classList.remove('border-danger')    

    formulario.valor4.value === ''
        ? formulario.valor4.classList.add('border-danger')
        : formulario.valor4.classList.remove('border-danger')    
    

    if (opciones && formulario.valor1.value && formulario.valor2.value && formulario.valor3.value && formulario.valor4.value){
        informacion = {
            valor1: formulario.valor1.value,
            valor2: formulario.valor2.value,
            valor3: formulario.valor3.value,
            valor4: formulario.valor4.value,
            opciones
        }
    }
    return informacion

}

function succefull(){
    location.href = 'succefull.html'
   }

function enviar (e){
    e.preventDefault()
//variables
let precio = parseFloat(200)
cantidad
cuadro1 = 0.8
cuadro2 = 0.5
cuadro3 = 0.15

//proceso
let compra = precio*cantidad

let desc1 = compra*cuadro1 

let desc2 = compra*cuadro2

let desc3 = compra*cuadro3

const total = document.getElementById('valor5');

const selects = document.getElementById('selection').value;

switch (selects) {
    case '1':
        total.innerHTML = compra-desc1
        
        break;
    case '2':
        total.innerHTML = compra-desc2
        break;
    case '3':
        total.innerHTML = compra-desc3
        break;
    default:
        break;
}

    //const completeForm = checkError()
    //completeForm && sessionStorage.setItem('formulario', JSON.stringify(completeForm))
    //completeForm && succefull()
}


boton1.onclick = (e) => {borrar(e)}
boton2.onclick = (e) => {enviar(e)}


