
//Boton Up

window.onscroll = function(){
    if(document.documentElement.scrollTop > 100){
        document.querySelector('.expandir').classList.add('show');
    }else{
        document.querySelector('.expandir').classList.remove('show');
    }
}

document.querySelector('.expandir').addEventListener('click',() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


//Validar Formulario

function campoRequerido(elemento){
    let expresion = /[A-Za-z]/;
    if(elemento.value != "" && expresion.test(elemento.value)){//si esta vacio
        elemento.className = "form-control is-valid";
    }else{
        elemento.className = "form-control is-invalid";
    }
}

function validarMail(elemento){
    let expresionRegular = /\w+@\w+\.[a-z A-Z]/;
    if(elemento.value != "" && expresionRegular.test(elemento.value)){//si esta vacio
        elemento.className = "form-control is-valid";
    }else{
        elemento.className = "form-control is-invalid";
    }
}

function revisarConsulta(elemento){
    let expresion = /[a-zA-Z0-9]/;
    let cantidad = elemento.value;
    if(cantidad.length >=10 && expresion.test(elemento.value)){//si esta vacio
        elemento.className = "form-control is-valid";
    }else{
        elemento.className = "form-control is-invalid";
    }
}


