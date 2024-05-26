//valida datos del formulario
function validarFormulario() {
     console.log("hola");
     let nombre = document.getElementById("Nombre").value.trim()
     let apellido = document.getElementById("Apellido").value.trim()
     let edad = document.getElementById("Edad").value.trim()
     let correo = document.getElementById("Correo_electronico").value.trim()
    
     let incompleto = false;

     Nombre.style.borderColor = "#8d8b8b";
     Apellido.style.borderColor = "#8d8b8b";
     Edad.style.borderColor = "#8d8b8b";
     Correo_electronico.style.borderColor = "#8d8b8b";
     

   


     if (nombre === "") {
         marcarIncompleto(Nombre);
     }

     if (apellido === "") {
        marcarIncompleto(Apellido);
     }

     if (edad === "") {
         marcarIncompleto(Edad);
     }

     if (correo === "") {
         marcarIncompleto(Correo_electronico);
     }

    


     if (incompleto === true) {
         alert("Complete el formulario")
         return false;
     }


     function marcarIncompleto(item) {
         item.style.borderColor = "red";
         incompleto = true;
     }


    return true;

}


document.addEventListener("DOMContentLoaded", function() {
    const botonBorrar = document.querySelector("#res");
  
  
    botonBorrar.addEventListener("click", function() {
        Nombre.style.borderColor = "#8d8b8b";
     Apellido.style.borderColor = "#8d8b8b";
     Edad.style.borderColor = "#8d8b8b";
     Correo_electronico.style.borderColor = "#8d8b8b";
     
      
       
    });
  });



  document.addEventListener('DOMContentLoaded', function() {

  const radioFemenino = document.getElementById('femenino');
  const labelFemenino = document.getElementById('femenino-label');
  const radioMasculino = document.getElementById('masculino');
  const labelMasculino = document.getElementById('masculino-label');
  const radioOtro = document.getElementById('otro');
  const labelOtro = document.getElementById('otro-label');




  radioFemenino.addEventListener('change', () => {    
      if (radioFemenino.checked) {
          labelFemenino.style.color = '#4B9960';
          labelMasculino.style.color = '#000000a2'; 
          labelOtro.style.color = '#000000a2'; 
      } 
  });
  radioMasculino.addEventListener('change', () => {    
    if (radioMasculino.checked) {
        labelMasculino.style.color = '#4B9960'; 
        labelFemenino.style.color = '#000000a2';
        labelOtro.style.color = '#000000a2'; 
    } 
});  radioOtro.addEventListener('change', () => {    
    if (radioOtro.checked) {
        labelOtro.style.color = '#4B9960'; 
        labelFemenino.style.color = '#000000a2';
        labelMasculino.style.color = '#000000a2'; 
    } 
});
});

