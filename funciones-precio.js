const form = document.getElementById('form')
form.addEventListener('submit', e =>{
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

})

   

   
