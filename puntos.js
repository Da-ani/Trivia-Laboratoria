let coins = sessionStorage.getItem("monedas")
let nomb = sessionStorage.getItem('Nombre')

document.getElementById('puntos').innerHTML = coins
document.getElementById('nombreDeUsuario').innerHTML = nomb
