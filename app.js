document.getElementById('btnAJugar').addEventListener("click", function(){ //se le marca a la compu que se le de click en el boton jugar para realizar la sig funcion Ya se ingreso el nombre (pablo) en el input-->


  let inputNombre = document.getElementById('inputNombre').value; //el valor (pablo) se va a guardar en mi variable inputNombre

  sessionStorage.setItem("Nombre", inputNombre); //SET: el valor ingresado se va a guardar en la computadora con el nombre "nombre"

})
