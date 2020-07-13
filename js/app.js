//variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');

//event Listeners
eventListeners()

function eventListeners(){
    //inicio de la aplicacion deshabilitar Submit
    document.addEventListener('DOMContentLoaded', inicioApp);
    //campos del formulario
    email.addEventListener('blur', validaCampo);
    asunto.addEventListener('blur', validaCampo);
    mensaje.addEventListener('blur', validaCampo);
};

//funciones

function inicioApp(){
    //deshabilitar boton enviar cuando este arranque
    btnEnviar.setAttribute("disabled", "disabled");

};

function validaCampo(){
    //se valida la longitud del texto y que no este vacio
    validarLongitud(this);
    //validar correctamente el email
    if(this.type === 'email'){
        validarEmail(this)
    }
    let errores = document.querySelector('.error')
    if(email.value != '' && asunto.value != '' && asunto.value != ''){
        if(errores.length)
        btnEnviar.removeAttribute("disabled")
    }
};

function validarLongitud(campo){
    if(campo.value.length > 0){
        campo.style.borderBottomColor ='green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor ='red';
        campo.classList.add('error');
    }
}