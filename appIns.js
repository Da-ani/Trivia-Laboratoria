let nom = sessionStorage.getItem("Nombre");//GET: estpy obteniendo el valor que guarde en set bajo la referencia nombre
console.log("Hola " + nom);

document.getElementById("NombreDeUsuario").innerHTML = nom; //obtenemos el valor de nombre de usuario (nom) que ya esta dada arriba que en este bcaso sería PABLO y a traves de un inner lo estamos editando lo que se va a poner en el id de nombredeUsuario
