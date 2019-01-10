let coins = 0;//variable global

document.getElementById('cristobalColon').addEventListener('click', function(){

    coins =  coins -1;

      sessionStorage.setItem("monedas", coins);

})
document.getElementById('homero').addEventListener('click', function(){

  coins = coins +2;

    sessionStorage.setItem("monedas", coins);

})

document.getElementById('fridaKhalo').addEventListener('click', function(){

  coins = coins -1;

      sessionStorage.setItem("monedas", coins);

})
