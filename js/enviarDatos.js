function enviarDatos(datos){

    $.ajax({
        type: 'GET',
        url: 'servidor.php',
        data: {datos:datos},
        dataType: 'json'
    })
    .done( function( data ) {
        console.log('done');
        console.log(data);

        let a = document.getElementById("respuestaServidor");
        
        mostrarResultado(formatoImprimirResultado(data), a, "Si se pudo");

    })
    .fail( function( data ) {
        console.log('fail');
        console.log(data);
        let a = document.getElementById("respuestaServidor");
        a.innerHTML = data.responseText;
    });
}

function prueba (){
    let jso = {
        "visual": 4,
        "Kinestesico": 6
    }

    enviarDatos(jso);
}