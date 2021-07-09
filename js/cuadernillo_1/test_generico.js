
///////////////////////////////////////////////////////////
// mostrar_test() -> Coloca el formulario en la página
//////

 function mostrar_test(preguntas,numTest,div_contenedor) {
    //Alamcena cada pregunta y sus respuestas
    const preguntasYrespuestas = [];

  //Se recorre el arreglo que almacena el cuestionario
  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const respuestas = []; 

    if(preguntaActual.tipoRespuesta !== "text"){
        //recorrer json de respuestas por cada pregunta
        for (letraRespuesta in preguntaActual.respuestas) {
            
            //almacena cada respuesta en forma de imputs (radio o checkbox) dentro de una lista HTML
            //también se agrega un div para mostrar el estado de la espuesta
            respuestas.push(
            `<li class="respuesta">
                <input class="${numTest}_check${numeroDePregunta}" type="${preguntaActual.tipoRespuesta}" name="${numTest}_check${numeroDePregunta}" value="${letraRespuesta}"  } />
                ${letraRespuesta} : ${preguntaActual.respuestas[letraRespuesta][0]}
                <div id="${numTest}_estadoRespuesta${numeroDePregunta}${letraRespuesta}"></div> 
            </li>`
            );
        }
    }else{
        respuestas.push( `<li class="respuesta">
                                <textarea class="${numTest}_check${numeroDePregunta}" type="${preguntaActual.tipoRespuesta}" placeholder="Escribe tu respuesta" maxlength="2500"></textarea>
                                <div id="${numTest}_estadoRespuesta${numeroDePregunta}"></div> 
                        </li>`);
    }
    
    //Almacena la pregunta con el arreglo de las respuesta en formato HTML
     //también se agrega un div para mostrar un mensaje si no se ha seleccionado una respuesta (estadoPregunta)
    preguntasYrespuestas.push(
      `<li id="${numTest}_cuestion${numeroDePregunta}">${preguntaActual.pregunta} <div id="${numTest}_estadoPregunta${numeroDePregunta}"></div></li>
        <div class="respuestas">  
            <ul class="${numTest}_listaRespuestas listaRespuestas"> ${respuestas.join("")} </ul>
        </div>`
    );

  });

    //Elemento donde insertara el test
    div_contenedor.innerHTML = `<ol class="${numTest}_listaPreguntas listaPreguntas">` + preguntasYrespuestas.join("") + "</ol>";
}


///////////////////////////////////////////////////////////
// validarRespuestas() -> Coloca los mensajes en el test y devuelve un json con los valores de las respuestas si se ha completado
//////
function validarRespuestas(preguntas,numTest,mostrarValor) {
  let valoresDeRespuestas = []  
  let testCompletado = true; //true => Test completado, false => Test incompleto
  let preguntasAbiertas = false;//false =>  opcion multiple, true => abiertas

  //Se recorre el arreglo que almacena el cuestionario
  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    let respuestaElegida;
    let bandera = false;

    //obtener el nodeList de los elementos input que son las respuestas a la pregunta actual
    let checks = document.querySelectorAll(`.${numTest}_check`+numeroDePregunta); 
 

    if(preguntaActual.tipoRespuesta === "radio"){
        //recorrer el objeto de las respuestas para saber cual se eligio
        checks.forEach((e)=>{
            respuestaElegida = e.value; //obtiene el inciso (a,b,c...)

            if(e.checked == true){     //verifica si fue seleccionada
                bandera = true;
                let valor = preguntaActual.respuestas[respuestaElegida][1]; //obtiene el valor de la pregunta
                if (valor)
                    valoresDeRespuestas.push(valor); //agrega el valor de la pregunta segun la respuesta
                else
                    valor = "✔";

                // Lineas de código para colocar el valor de la pregunta a lado de la respuesta seleccionada
                let elemento = document.getElementById(`${numTest}_estadoRespuesta`+numeroDePregunta+respuestaElegida);
                if(mostrarValor)
                    estadoRespuesta(elemento,"estadoRespuesta",valor,"bien2");
                else    
                    estadoRespuesta(elemento,"estadoRespuesta","✔","bien2");                            
                
            }else{ //limpiar valor de la pregunta a lado de la respuesta
                let elemento = document.getElementById(`${numTest}_estadoRespuesta`+numeroDePregunta+respuestaElegida);
                estadoRespuesta(elemento,"","","");
            }
        });

        //Lineas de código para mostrar el estado de la pregunta (respondida o no respondida)
        let pregunta = document.getElementById(`${numTest}_estadoPregunta`+numeroDePregunta);

        if(bandera)
            estadoRespuesta(pregunta,"respondida","Listo","bien");
        else{
            estadoRespuesta(pregunta,"sinRespuesta","Elige una respuesta","error");
            testCompletado = false;
        } 

    }else if (preguntaActual.tipoRespuesta === "checkbox") { // tipo checkbox (multiples respuestas)       
        let limite_respuestas = preguntaActual.limite;
        let num_respuestas = 0;

        //recorrer el objeto de las respuestas para saber cual se eligio
        checks.forEach((e)=>{
            respuestaElegida = e.value;//almacena el inciso (a,b,c...)

            if(e.checked == true){ //verifica si fue seleccionada
                num_respuestas++;

                if (num_respuestas <= limite_respuestas){
                    
                    let valor = preguntaActual.respuestas[respuestaElegida][1]; //obtiene el valor  de la pregunta
                   
                    valoresDeRespuestas.push(valor); //agrega el valor  de la pregunta segun la respuesta

                    bandera = true;

                    // Lineas de código para colocar el valor  de la pregunta a lado de la respuesta seleccionada
                    let elemento = document.getElementById(`${numTest}_estadoRespuesta`+numeroDePregunta+respuestaElegida);
                    estadoRespuesta(elemento,"estadoRespuesta",valor,"bien2");                               
                }

            }else{ //limpiar valor de la pregunta a lado de la respuesta
                let elemento = document.getElementById(`${numTest}_estadoRespuesta`+numeroDePregunta+respuestaElegida);
                estadoRespuesta(elemento,"","","");
            }
            
            
        });

            let pregunta = document.getElementById(`${numTest}_estadoPregunta`+numeroDePregunta);;
            
            if(bandera){
                if(num_respuestas >= 1 && num_respuestas < limite_respuestas){
                    estadoRespuesta(pregunta,"sinRespuesta","Número de respuestas inferior al solicitado","error");
                    testCompletado =false;
                }else if(num_respuestas == 2)
                    estadoRespuesta(pregunta,"respondida","Listo","bien");
                else{
                    estadoRespuesta(pregunta,"sinRespuesta","Número de respuestas superior al solicitado","error");
                    testCompletado =false;
                }
            }else{
                estadoRespuesta(pregunta,"sinRespuesta","Elige una respuesta","error");
                testCompletado =false;
            }
    }else {// preguntas abiertas     
        preguntasAbiertas = true;

        //recorrer el objeto de las respuestas
        checks.forEach((e)=>{

            if(e.value){     //verifica si fue respondida
                bandera = true;
                valoresDeRespuestas.push(e.value); //agrega el valor de la pregunta segun la respuesta

                // Lineas de código para colocar el valor de la pregunta a lado de la respuesta seleccionada
                let elemento = document.getElementById(`${numTest}_estadoRespuesta`+numeroDePregunta);
                estadoRespuesta(elemento,"estadoRespuesta","✔","bien2");                            
                
            }else{ //limpiar valor de la pregunta a lado de la respuesta
                let elemento = document.getElementById(`${numTest}_estadoRespuesta`+numeroDePregunta);
                estadoRespuesta(elemento,"","","");
            }
        });

        //Lineas de código para mostrar el estado de la pregunta (respondida o no respondida)
        let pregunta = document.getElementById(`${numTest}_estadoPregunta`+numeroDePregunta);

        if(bandera)
            estadoRespuesta(pregunta,"respondida","Listo","bien");
        else{
            estadoRespuesta(pregunta,"sinRespuesta","Escribe tu respuestas","error");
            testCompletado = false;
        } 
    }


  });

    if(testCompletado){
        if(preguntasAbiertas)
            return valoresDeRespuestas; // se envia sin eliminar los repetidos (si los hubiera en las respuestas abiertas)
        else    
            return estructurarresultado(valoresDeRespuestas);  //elimina y estructura repetidos
    }else
        return null;
}

///////////////////////////////////////////////////////////
// estructurarResultado() -> Crea un objeto json con los
// resultados en orden según el predominante. 
//////
function estructurarresultado (valoresDeRespuestas){
    let valores = new Set(valoresDeRespuestas);  //eliminar repetidos para obtener los valores unicos
    valores = [...valores]; // covertir en arreglo     

    let aux = []; //almacena par de valores, valor: repeticiones (ej. visual: 5)
    valores.forEach((valor) => {
        let n = 0;
        let idx = valoresDeRespuestas.indexOf(valor);

        while (idx != -1) {
            n++;
            idx = valoresDeRespuestas.indexOf(valor, idx + 1);
        }

        let t = {};
        t[valor]=n+"";
        aux.push(t); 
    });

    return insertionSort(aux , valores);//json con resultado
}

///////////////////////////////////////////////////////////
// insertionSort() -> recibe el arreglo de objetos json de los resultados. formato => [ {valor: numRepeticiones},{valor: numRepeticiones} ...]
// recibe también el arreglo de los valores de respuestas  [valor1,valor2,...]
// para devolver un objeto json ordenado de mayor a menor segun el numRepeticiones de cada valor
// ej. [{kinestesico: 2}, {visual: 5}, {Auditivo, 1}]  ===> {visual: 5, kinestesico: 2,  Auditivo, 1}
//////
function insertionSort (arreglo, valores){
    const l = arreglo.length;
    let j, temp;
    let jsonFinal = {};

    // metodo de ordenamiendo ascendente Sort 
    for ( let i = 1; i < l; i++ ) {
      j = i;
      temp = arreglo[ i ];
     
      while ( j > 0 && getValor(arreglo[ j - 1 ],valores) > getValor(temp,valores)) {
        arreglo[ j ] = arreglo[ j - 1 ];
        j--;
      }
      arreglo[ j ] = temp;
    }

    arreglo = arreglo.reverse()

    // convertir array de json a un solo json 
    for(i in arreglo)
        for (j in arreglo[i])
            jsonFinal[j] = arreglo[i][j]
    
    return jsonFinal;
}

///////////////////////////////////////////////////////////
// getValor() -> facilita obtener el numero de repeticiones de cada valor,esto por cada json almacenado en un arreglo.
// ej. arreglo = [{kinestesico: 2}, {visual: 5}, {Auditivo, 1}]  arrValores = ["kinestesico","visual","Auditivo"]
//  al ejecutar con estos valores devuleve: getValor(arreglo[0], arrValores) ==> 2
//////
function getValor(obj,valores){
    for(i in valores){
        if(obj[valores[i]])
            return obj[valores[i]];
    }
}


///////////////////////////////////////////////////////////
// mostrarResultadoGenerico() -> Coloca el resultado en la página 
//////
function mostrarResultado(respuestas_Formato, div_resultado, mensaje,  numTest){
    if (respuestas_Formato){        
        div_resultado.className="testTerminado";
        div_resultado.innerHTML = mensaje + respuestas_Formato ;
      }else{
        div_resultado.className= "testNoTerminado";
        div_resultado.innerHTML = " <div> Debes de terminar el test para guardar las respuestas </div>"
        }
}

///////////////////////////////////////////////////////////
// formatoImprimirResultadoGenerico() -> Da formato en etiquetas HTML para el resultado
//////
function formatoImprimirResultado (resultado){
    if (resultado){        
        let res = "";
        for(valor in  resultado)
            res += `<p>${valor}: ${resultado[valor]}</p>`;
        return res;
    }else
        return null;
}

///////////////////////////////////////////////////////////
// estadoRespuesta() -> Cambia el color y texto de un 
// elemento del DOM, muestra y oculta elementos con reglas CSS
// segun la clase que se les asigne
//////
function estadoRespuesta (elemento, clase, texto,estado){
    elemento.innerHTML = texto;
    elemento.className = clase;
    
    switch(estado){
        case "error":
            elemento.style.background= "#FF4646";
        break;
        case "bien":
            elemento.style.background= "#1FB57B";
        break;
        case "bien2":
            elemento.style.background= "#FFCC29";
        break;
    }     
}

