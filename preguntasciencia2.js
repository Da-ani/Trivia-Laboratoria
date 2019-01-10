
coins = sessionStorage.getItem("monedas");

coins= parseInt(coins);

document.getElementById('correcto').addEventListener('click', function(){

    coins =  coins + 2;


      sessionStorage.setItem("monedas", coins);

})
document.getElementById('incorrecto').addEventListener('click', function(){

  coins = coins - 1;


    sessionStorage.setItem("monedas", coins);

})
document.getElementById('incorrecto2').addEventListener('click', function(){

  coins = coins -1;


      sessionStorage.setItem("monedas", coins);

})
