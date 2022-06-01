/*---------------------------------------------------------------------------------------------------------------------
                                                    *codigo de js                                  
---------------------------------------------------------------------------------------------------------------------*/

function funcionSaludar() {
    const dato = [];
    {
      dato[0] = prompt("cual es tu nombre");
      dato[1] = prompt("cual es tu apellido?");
      dato[2] = prompt("edad");
    }

    // document.write(dato);
    document.getElementById("resultado1").innerHTML =
      dato[0] + " " + dato[1] + " " + dato[2];
  }

  function funcionGenerar() {
    const pares = [];

    let limite = prompt(`limite : `);
    for (let i = 0; i < limite; i++) {
      pares[i - 1] = i * 2;
    }
    let tm = pares.length;
    let tex = "<ul>";
    for (let x = 0; x < pares.length; x++) {
      tex = tex + "<li>" + pares[x] + "</li>";
    }
    tex = tex + "</ul>";
    document.getElementById("resultado2").innerHTML = tex;
  }

  function funcionImpares() {
    const impares = [];

    let limite2 = prompt(`limite : `);
    for (let s = 0; s < limite2; s++) {
      impares[s] = 2 * s + 1;
    }
    let tamano = impares.length;
    let texto1 = "<ul>";

    for (let a = 0; a < impares.length; a++) {
      texto1 = texto1 + "<li>" + impares[a] + "</li>";
    }
    texto1 = texto1 + "</ul>";
    document.getElementById("resultado3").innerHTML = texto1;
  }

  //-----------------------------------------------------------------------------
  /* serie de multiplos de 5*/
  //-----------------------------------------------------------------------------

  function funcionMultiplosde5() {
    const multiplos = [];

    let lim = prompt(`limite : `);
    for (let k = 1; k <= lim; k++) {
      if (k *5) {
        multiplos[k] = k*5;
        
      } else {
        multiplos[k] = " ";
      }
    }
    let tamano32 = multiplos.length;
    let texto32 = "<ul>";

    for (let f = 1; f < multiplos.length; f++) {
      texto32 = texto32 + "<li>" + multiplos[f] + "</li>";
    }
    texto32 = texto32 + "</ul>";
    document.getElementById("resultado4").innerHTML = texto32;
  }
  /*------------------------------------------------------------------------------------------
                        fin
--------------------------------------------------------------------------------------------*/

  /* ---------------------------------------------------------------------------------------------
                                Numeros Aleatorios 
------------------------------------------------------------------------------------------------*/
  function funcionImparesaleatoriodel10al100() {
    const aleatorios = [];

    let limites01 = prompt(`limite : `);

    for (let k = 1; k <= limites01; k++) {
      var aleatorio = Math.floor(Math.random() * 90) + 10;
      aleatorios[k] = aleatorio;
    }
    let tamano35 = aleatorios.length;
    let texto35 = "<ul>";

    for (let m = 1; m < aleatorios.length; m++) {
      texto35 = texto35 + "<li>" + aleatorios[m] + "</li>";
    }
    texto35 = texto35 + "</ul>";
    document.getElementById("resultado5").innerHTML = texto35;
  }

  /*---------------------------------------------------------------------------------------------------------------------------
                                            fin 
-----------------------------------------------------------------------------------------------------------------------------*/
  /*--------------------------------------------------------------------------------------------------------------------------
                            numeros multiplos de 3
----------------------------------------------------------------------------------------------------------------------------*/
  function funcionImparesmultiplosde3() {
    const multiplos3 = [];
    let ld=0;

    let limmultiplo3 = prompt(`limite : `);
    for ( ld = 1; ld <=limmultiplo3; ld++) {
      if (ld *3) {
        multiplos3[ld] = ld*3;
      } else {
        multiplos3[ld] = " ";
      }
    }
    let tamano332 = multiplos3.length;
    let texto332 = "<ul>";

    for (let ln = 1; ln < tamano332; ln++) {
      texto332 = texto332 + "<li>" + multiplos3[ln] + "</li>";
    }
    texto332 = texto332 + "</ul>";
    document.getElementById("resultado6").innerHTML = texto332;
  }

  /*---------------------------------------------------------------------------------------------------------------------------
                                        fin 
-----------------------------------------------------------------------------------------------------------------------------*/
