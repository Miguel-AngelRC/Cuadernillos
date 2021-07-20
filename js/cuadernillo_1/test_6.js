// (1) 
// Arreglo de objetos con las preguntas y opciones de respuesta
const test6_preguntas = [
    {   //Pregunta 1
        pregunta: "¿Sueles dejar para el último la preparación de tus trabajos?",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
    {   //Pregunta 2
        pregunta: "¿Crees que el sueño o el cansancio te impidan estudiar eficazmente en muchas ocasiones?",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
    {   //Pregunta 3
        pregunta: "¿Es frecuente que no termines tu tarea a tiempo?",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
    {   //Pregunta 4
        pregunta: "¿Tiendes a emplear tiempo en leer revistas, ver televisión o charlar cuando debieras dedicarlos a estudiar?",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
    {   //Pregunta 5
        pregunta: "Tus actividades sociales o deportivas, ¿te llevan a descuidar, a menudo, tus ",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
    {   //Pregunta 6
        pregunta: "¿Sueles dejar pasar  un  día  o  más antes de repasar los apuntes tomados en",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
    {   //Pregunta 7
        pregunta: "¿Sueles dedicar tiempo libre entre las 4:00 de la tarde y las 9:00 de la noche a",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
    {   //Pregunta 8
        pregunta: "¿Descubres algunas veces, de pronto, que debes entregar una tarea antes de lo",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
    {   //Pregunta 9
        pregunta: "¿Te	retrasas,	con	frecuencia,	en una asignatura debido a que tienes que",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
    {   //Pregunta 10
        pregunta: "¿Te parece que tu rendimiento es muy bajo, en relación con el tiempo que le",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
    {   //Pregunta 11
        pregunta: "¿Está situado tu escritorio directamente frente a una ventana, puerta u otra fuente",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
    {   //Pregunta 12
        pregunta: "¿Sueles tener fotografías, trofeos o recuerdos sobre tu mesa de escritorio?",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
    {   //Pregunta 13
        pregunta: "¿Sueles estudiar recostado en la cama o arrellanado en un asiento cómodo?",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
    {   //Pregunta 14
        pregunta: "¿Produce resplandor la lámpara que utilizas al estudiar?",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
    {   //Pregunta 15
        pregunta: "Tu mesa de estudio, ¿está tan desordenada y llena de objetos, que no dispones de",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
    {   //Pregunta 16
        pregunta: "¿Sueles interrumpir tu estudio, por personas que vienen a visitarte?",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
    {   //Pregunta 17
        pregunta: "¿Estudias, con frecuencia, mientras tienes puesta la televisión y/o la radio?",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
    {   //Pregunta 18
        pregunta: "En el lugar donde estudias, ¿se pueden ver con facilidad revistas, fotos de",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
    {   //Pregunta 19
        pregunta: "¿Con frecuencia, interrumpen tu estudio, actividades o ruidos que provienen",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
    {   //Pregunta 20
        pregunta: "¿Suele hacerse lento tu estudio debido a que no tienes a la mano los libros y",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
];




let numtest6 = "test6";


// (2) 
//Enlazar Elementos necesarios
const test6_contenedor = document.getElementById(numtest6);
const test6_botonRes = document.getElementById(numtest6+"_boton");
const test6_resultado = document.getElementById(numtest6+"_resultado");
const test6_fecha = document.getElementById("test6_fechaInicio");


// (3) 
//Mostrar test
mostrar_test(test6_preguntas,numtest6,test6_contenedor,false)

// (4) 
//Añadir evento click al boton de resultados       
test6_botonRes.addEventListener("click", valida_test6);

// (5) 
//Funcion para validar resultados
function valida_test6(){
    let respuestas = validarRespuestas (test6_preguntas,numtest6,false);
    let respuestas_Formato = formatoImprimirResultado_test6(respuestas);
    let mensaje = "Preguntas y respuestas:";

    mostrarResultado(respuestas_Formato, test6_resultado, mensaje, numtest6);
}


// (6) 
//Funcion personalizada para formato de impresion del test5
function formatoImprimirResultado_test6 (resultado){
    if (resultado){        
        let res = "";
        for(valor in  resultado)
            res += `<p> <b>${parseInt(valor) + 1}:</b> ${resultado[valor]}</p>`;
        return res;
    }else
        return null;
}

// (7) 
//Establecer fecha en inputs
setFecha(test6_fecha);