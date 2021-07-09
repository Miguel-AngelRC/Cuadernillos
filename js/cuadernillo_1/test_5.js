// (1) 
// Arreglo de objetos con las preguntas y opciones de respuesta
const test5_preguntas = [
    {   //Pregunta 1
        pregunta: "Escribe los motivos principales por los cuales estas estudiando.",
        tipoRespuesta: "text",
    }, 
    {   //Pregunta 2
        pregunta: "¿Cómo será tu Vida dentro de 5 años si estudias?",
        tipoRespuesta: "text",
    }, 
    {   //Pregunta 3
        pregunta: "¿Cómo será tu Vida dentro de 5 años si no estudias?",
        tipoRespuesta: "text",
    }, 
    {   //Pregunta 4
        pregunta: "Redacta una lista de factores que te sirvan para motivar tu estudio",
        tipoRespuesta: "text",
    }, 
    {   //Pregunta 5
        pregunta: "Describe tu estado de salud; ¿necesitas un reconocimiento médico?",
        tipoRespuesta: "text",
    }, 
    {   //Pregunta 6
        pregunta: "Describe como estaría construido tu lugar apropiado para estudiar.",
        tipoRespuesta: "text",
    }, 
    {   //Pregunta 7
        pregunta: "Redacta	una	lista	de	los	factores	que	no	te	permiten	estudiar	con eficiencia y escribe las soluciones prácticas según tus necesidades particulares.",
        tipoRespuesta: "text",
    }, 
    {   //Pregunta 8
        pregunta: "Escribe una lista de las ventajas y desventajas de estudiar individualmente y de estudiar en grupo.",
        tipoRespuesta: "text",
    }, 
    {   //Pregunta 9
        pregunta: "Redacta una sugerencia que combine el estudio individual con el estudio en grupo.",
        tipoRespuesta: "text",
    }, 
    {   //Pregunta 10
        pregunta: "Escribe que factores te causan indecisión al momento de comenzar a estudiar e indica cómo evitarlos.",
        tipoRespuesta: "text",
    }, 
];


let numtest5 = "test5";


// (2) 
//Enlazar Elementos necesarios
const test5_contenedor = document.getElementById(numtest5);
const test5_botonRes = document.getElementById(numtest5+"_boton");
const test5_resultado = document.getElementById(numtest5+"_resultado");

// (3) 
//Mostrar test
mostrar_test(test5_preguntas,numtest5,test5_contenedor)

// (4) 
//Añadir evento click al boton de resultados       
test5_botonRes.addEventListener("click", valida_test5);

// (5) 
//Funcion para validar resultados
function valida_test5(){
    let respuestas = validarRespuestas (test5_preguntas,numtest5,false);
    let respuestas_Formato = formatoImprimirResultado(respuestas);
    let mensaje = "Tus respuestas:";

    mostrarResultado(respuestas_Formato, test5_resultado, mensaje, numtest5);
}

// (6) 
//Funcion personalizada para formato de impresion del test5
function formatoImprimirResultado (resultado){
    if (resultado){        
        let res = "";
        for(valor in  resultado)
            res += `<p> <b>${parseInt(valor) + 1}:</b> ${resultado[valor]}</p>`;
        return res;
    }else
        return null;
}