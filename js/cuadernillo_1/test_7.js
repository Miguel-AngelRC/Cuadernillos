// (1) 
// Arreglo de objetos con las preguntas y opciones de respuesta
const test7_preguntas = [
    {   //Pregunta 1
        pregunta: "¿Tiendes a comenzar la lectura de un libro de texto sin hojear previamente los subtítulos y las ilustraciones?",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
    {   //Pregunta 2
        pregunta: "¿Te saltas por lo general las figuras, gráficas y tablas cuando estudias un tema?",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
    {   //Pregunta 3
        pregunta: "¿Suele serte difícil seleccionar los puntos de los temas de estudio?",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
    {   //Pregunta 4
        pregunta: "¿Te sorprendes, con cierta frecuencia, pensando en algo que no tiene nada que ver con lo que estudias?",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
    {   //Pregunta 5
        pregunta: "¿Sueles tener  dificultad  en  entender tus apuntes de clase cuando tratas de repasarlos, después de cierto tiempo?",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
    {   //Pregunta 6
        pregunta: "Al tomar notas, ¿te sueles quedar atrás con frecuencia debido a que no puedes escribir con suficiente rapidez?",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
    {   //Pregunta 7
        pregunta: "Poco después de comenzar un curso, ¿sueles   encontrarte   con	tus apuntes formando un \"revoltijo\"?",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
    {   //Pregunta 8
        pregunta: "¿Tomas normalmente tus apuntes tratando de escribir las palabras exactas del docente?",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
    {   //Pregunta 9
        pregunta: "Cuando tomas notas de un libro, ¿tienes la costumbre de copiar el material necesario, palabra por palabra?",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
    {   //Pregunta 10
        pregunta: "¿Te es difícil preparar un temario apropiado para una evaluación?",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
    {   //Pregunta 11
        pregunta: "¿Tienes problemas para organizar lo datos o el contenido de una evaluación?",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
    {   //Pregunta 12
        pregunta: "¿Al repasar el temario  de  una evaluación formulas un resumen de éste?",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
    {   //Pregunta 13
        pregunta: "¿Te preparas a veces para una evaluación memorizando fórmulas, definiciones o reglas que no entiendes con claridad?",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
    {   //Pregunta 14
        pregunta: "¿Te resulta difícil decidir qué estudiar y cómo estudiarlo cuando preparas una evaluación?",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
    {   //Pregunta 15
        pregunta: "¿Sueles tener dificultades para organizar, en un orden lógico, las asignaturas que",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
    {   //Pregunta 16
        pregunta: "Al preparar evaluación, ¿sueles estudiar toda la asignatura, en el último momento?",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
    {   //Pregunta 17
        pregunta: "¿Sueles entregar tus exámenes sin revisarlos detenidamente, para ver si tienen algún",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
    {   //Pregunta 18
        pregunta: "¿Te es posible con frecuencia terminar una evaluación de exposición de un tema en el tiempo prescrito?",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
    {   //Pregunta 19
        pregunta: "¿Sueles p e r d e r	puntos en exámenes con preguntas de \"verdadero-falso\" debido a",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
    {   //Pregunta 20
        pregunta: "¿Empleas normalmente mucho tiempo en  contestar la primera mitad de la",
        respuestas: {
            a: "Sí",
            b: "No",
        },
        tipoRespuesta: "radioText",
    }, 
];


let numtest7 = "test7";


// (2) 
//Enlazar Elementos necesarios
const test7_contenedor = document.getElementById(numtest7);
const test7_botonRes = document.getElementById(numtest7+"_boton");
const test7_resultado = document.getElementById(numtest7+"_resultado");
const test7_fecha = document.getElementById("test7_fechaInicio");


// (3) 
//Mostrar test
mostrar_test(test7_preguntas,numtest7,test7_contenedor)

// (4) 
//Añadir evento click al boton de resultados       
test7_botonRes.addEventListener("click", valida_test7);

// (5) 
//Funcion para validar resultados
function valida_test7(){
    let respuestas = validarRespuestas (test7_preguntas,numtest7,false);
    let respuestas_Formato = formatoImprimirResultado_test7(respuestas);
    let mensaje = "Preguntas y respuestas:";

   
    mostrarResultado(respuestas_Formato, test7_resultado, mensaje, numtest7);
}


// (6) 
//Funcion personalizada para formato de impresion del test5
function formatoImprimirResultado_test7 (resultado){
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
setFecha(test7_fecha);
