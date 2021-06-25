// (1)  
//Arreglo de objetos con las preguntas y opciones de respuesta
const test1_preguntas = [
    {
        pregunta: "Cuando estas en clase y el profesor explica algo que está escrito en la pizarra o en tu libro, te es más fácil seguir las explicaciones",
        respuestas: {
            a: ["Escuchando al profesor." , "Auditivo"],
            b: ["Leyendo el libro o la pizarra.","Visual"],
            c: ["Te aburres y esperas que te den algo que hacer a ti.","Kinestésico"],
        },
        tipoRespuesta: "radio",
    },
    {
        pregunta: "Cuando estás en clase",
        respuestas: {
        a: ["Te distraen los ruidos.", "Auditivo"],
        b: ["Te distrae el movimiento.", "Visual"],
        c: ["Te distraes cuando las explicaciones son demasiado largas.", "Kinestésico"],
        },
        tipoRespuesta: "radio",
    },
    {
        pregunta: "Cuando te dan instrucciones",
        respuestas: {
        a: ["Te pones en movimiento antes de que acaben de hablar y explicar lo que hay que hacer.", "Kinestésico"],
        b: ["Te cuesta recordar las instrucciones orales, pero no hay problema si te las dan por escrito.", "Visual"],
        c: ["Recuerdas con facilidad las palabras exactas de lo que te dijeron.", "Auditivo"]
        },
        tipoRespuesta: "radio",
    },
    {
        pregunta: "Cuando tienes que aprender algo de memoria",
        respuestas: {
        a: ["Memorizas lo que ves y recuerdas la imagen (por ejemplo, la página del libro).", "Visual"],
        b: ["Memorizas mejor si repites rítmicamente y recuerdas paso a paso.", "Auditivo"],
        c: ["Memorizas a base de pasear y mirar y recuerdas una idea general mejor que los detalles.", "Kinestésico"],
        },
        tipoRespuesta: "radio",
    },
    {
        pregunta: "En clase, lo que más te gusta es que",
        respuestas: {
        a: ["Se organicen debates y que haya diálogo.", "Auditivo"],
        b: ["Se organicen actividades en que los alumnos tengan que hacer cosas y puedan moverse.", "Kinestésico"],
        c: ["Te den el material escrito y con fotos, diagramas.", "Visual"],
        },
        tipoRespuesta: "radio",
    },
    {
        pregunta: "Marca las dos frases con las que te identifiques más",
        respuestas: {
        a: ["Cuando escuchas al profesor te gusta hacer garabatos en un papel.","Visual"],
        b: ["Eres visceral e intuitivo, muchas veces te gusta/disgusta la gente sin saber bien por qué.","Kinestésico"],
        c: ["Te gusta tocar las cosas y tiendes a acercarte mucho a la gente cuando hablas con alguien.","Kinestésico"],
        d: ["Tus cuadernos y tus libretas están ordenados y bien presentados, te molestan los tachones y las correcciones.","Visual"],
        e: ["Prefieres los chistes a los comics.","Auditivo"],
        f: ["Sueles hablar contigo mismo cuando estás haciendo algún trabajo.","Auditivo"],
        },
        tipoRespuesta: "checkbox",
        limite: 2,
    }
];


let numTest1 = "test1";

// (2) 
//Enlazar Elementos necesarios
const test1_contenedor = document.getElementById(numTest1);
const test1_botonRes = document.getElementById(numTest1+"_boton");
const test1_resultado = document.getElementById(numTest1+"_resultado");

// (3) 
//Mostrar test
mostrar_test(test1_preguntas,numTest1,test1_contenedor)

// (4) 
//Añadir evento click al boton de resultados       
test1_botonRes.addEventListener("click", valida_test1);

// (5) 
//Funcion para validar resultados
function valida_test1(){
    let respuestas = validarRespuestas (test1_preguntas,numTest1,true);
    let respuestas_Formato = formatoImprimirResultado(respuestas);
    let mensaje = "Prioridad en tus estilos de aprendizaje:";

    mostrarResultado(respuestas_Formato, test1_resultado, mensaje, numTest1);
}

      
