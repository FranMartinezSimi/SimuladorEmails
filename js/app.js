//variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const FormularioEnviar = document.getElementById('enviar-mail');
const resetBtn = document.getElementById('resetBtn');
//event Listeners
eventListeners()

function eventListeners(){
    //inicio de la aplicacion deshabilitar Submit
    document.addEventListener('DOMContentLoaded', inicioApp);
    //campos del formulario
    email.addEventListener('blur', validaCampo);
    asunto.addEventListener('blur', validaCampo);
    mensaje.addEventListener('blur', validaCampo);

    //event Listener Boton enviar en el submit 
    FormularioEnviar.addEventListener('submit', enviarEmail);
    //resetear Formulario
    resetBtn.addEventListener('click', resetFormulario);
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
    let errores = document.querySelectorAll('.error')
    if(email.value != '' && asunto.value != '' && asunto.value != ''){
        if(errores.lengt === 0)
        btnEnviar.removeAttribute("disabled")
    }
};

//cuando se envia el correo

function enviarEmail(e) {
    const spinerGif = document.querySelector('#spinner');
    spinerGif.style.display ='block'

    //Gif que envia el email
    const enviado = document.createElement('img');
    enviado.src ='img/mail.gif';
    enviado.style.display ='block'
    setTimeout(function(){
        spinerGif.style.display='none'
        document.querySelector('#loaders').appendChild(enviado);
        setTimeout(function(){
            enviado.remove();
            FormularioEnviar.reset();
        },5000)
    }, 3000)
    e.preventDefault(); 
}

//verifica la longitud del texto en los campos
function validarLongitud(campo){
    if(campo.value.length > 0){
        campo.style.borderBottomColor ='green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor ='red';
        campo.classList.add('error');
    }
}

function validarEmail(campo){
    const mensaje = campo.value;
    if( mensaje.indexOf('@') !== -1){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }else {
        campo.style.borderBottomColor = 'red';
        campo.classList.remove('error');
    }
}