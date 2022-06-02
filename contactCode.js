const nombre =  document.getElementById("nombre");
const email = document.getElementById("correo");
const pais = document.getElementById("pais");
const mensaje = document.getElementById("message");
const boton = document.getElementById("submit");
const resultado = document.querySelector(".resultado");

boton.addEventListener("click",(e)=>{
    e.preventDefault()
    let error = validarCampos();
    if (error[0]){
        resultado.innerHTML = error[1];
        resultado.classList.add("red")
    } else{
        resultado.innerHTML = "Solicitud enviada correctamente";
        resultado.classList.add("green")
    }
})

const validarCampos = ()=>{
    let error = [];
    if(nombre.value.length < 5 || nombre.value.length > 40 ){
        error[0] = true;
        error[1] = "El nombre no puede contener menos de 5 y más de 40 caracteres";
        return error; 
    } else if (correo.value.indexOf("@") == -1 || 
                correo.value.indexOf(".") == -1){
        error[0] = true;
        error[1] = "El correo es inválido";
        return error;
    }
}