// (1) 
// Arreglo de objetos con las preguntas y opciones de respuesta
const test8_preguntas = [
    {   //Pregunta 1
        pregunta: "Después de los primeros días o semanas del curso, ¿tiendes a perder interés por el estudio?",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
    {   //Pregunta 2
        pregunta: "¿Crees que en general, basta estudiar lo necesario para obtener un \"aprobado\" en las asignaturas?",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
    {   //Pregunta 3
        pregunta: "¿Te	sientes	frecuentemente	confuso o indeciso sobre cuáles deben ser tus metas formativas y profesionales?",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
    {   //Pregunta 4
        pregunta: "¿Sueles pensar que no vale la pena el tiempo y el esfuerzo que son necesarios para",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
    {   //Pregunta 5
        pregunta: "¿Crees que es más importante divertirte y disfrutar de la vida que estudiar?",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
    {   //Pregunta 6
        pregunta: "¿Sueles	pasar	el	tiempo	de	clase en divagaciones o soñando despierto en",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
    {   //Pregunta 7
        pregunta: "¿Te	sientes	habitualmente	incapaz de concentrarte en tus estudios debido a",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
    {   //Pregunta 8
        pregunta: "¿Piensas con frecuencia que las asignaturas que estudias tienen poco valor práctico",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
    {   //Pregunta 9
        pregunta: "¿Sientes frecuentes deseos de abandonar la escuela y conseguir un trabajo?",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
    {   //Pregunta 10
        pregunta: "¿Sueles tener la sensación de que lo que se enseña en los centros docentes no te prepara para afrontar los problemas de la vida adulta?",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
    {   //Pregunta 11
        pregunta: "¿Sueles dedicarte de modo casual según el estado de ánimo en que te encuentres?",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
    {   //Pregunta 12
        pregunta: "¿Te horroriza estudiar libros de textos porque son insípidos y aburridos?",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
    {   //Pregunta 13
        pregunta: "¿Esperas normalmente a que te fijen la fecha de una evaluación para comenzar a",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
    {   //Pregunta 14
        pregunta: "¿Sueles pensar que los exámenes son pruebas penosas de las que no se puede escapar y respecto a las cuales lo que debe",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
    {   //Pregunta 15
        pregunta: "¿Sientes con frecuencia que tus docentes no comprenden	las	necesidades	de",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
    {   //Pregunta 16
        pregunta: "¿Tienes normalmente la sensación de que tus docentes exigen demasiadas horas de estudio fuera de clase?",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
    {   //Pregunta 17
        pregunta: "¿Dudas por lo general, en pedir ayuda a tus docentes en tareas que te son difíciles?",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
    {   //Pregunta 18
        pregunta: "¿Sueles pensar que tus docentes no tienen contacto con los temas y sucesos de actualidad?",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
    {   //Pregunta 19
        pregunta: "¿Te sientes reacio, por lo general, a hablar con tus docentes de tus proyectos futuros, de estudio o profesionales?",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
    {   //Pregunta 20
        pregunta: "¿Críticas con frecuencia a tus docentes cuando charlas con tus compañeros?",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
];





let numtest8 = "test8";


// (2) 
//Enlazar Elementos necesarios
const test8_contenedor = document.getElementById(numtest8);
const test8_botonRes = document.getElementById(numtest8+"_boton");
const test8_resultado = document.getElementById(numtest8+"_resultado");
const test8_fecha = document.getElementById("test8_fechaInicio");

// (3) 
//Mostrar test
mostrar_test(test8_preguntas,numtest8,test8_contenedor,true)

// (4) 
//Añadir evento click al boton de resultados       
test8_botonRes.addEventListener("click", valida_test8);

// (5) 
//Funcion para validar resultados
function valida_test8(){
    let respuestas = validarRespuestas (test8_preguntas,numtest8,false);
    
    if (respuestas){
        let respuestas_Formato = formatoImprimirResultado_test8(respuestas);
        let mensaje = "Preguntas y respuestas:";
        mostrarResultado(respuestas_Formato, test8_resultado, mensaje, numtest8);
    
        console.log(respuestas);
        respuestas.push(fecha());
        console.log(respuestas);
        enviarDatos(respuestas);
    }
}


// (6) 
//Funcion personalizada para formato de impresion del test5
function formatoImprimirResultado_test8 (resultado){
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
setFecha(test8_fecha);