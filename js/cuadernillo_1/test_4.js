// (1) 
// Arreglo de objetos con las preguntas y opciones de respuesta
const test4_preguntas = [
    {   //Pregunta 1
        pregunta: "En una reunión difícil, con un ambiente caldeado, soy capaz de hablar con confianza.",
        respuestas: {
            a: ["Con frecuencia", "Uno"],
            b: ["De vez en cuando","Dos"],
            c: ["Casi nunca","Tres"],
            d: ["Nunca","Cuatro"],
        },
        tipoRespuesta: "radio",
    }, 
    {   //Pregunta 2
        pregunta: "Si no estoy segur@ de una cosa, puedo pedir ayuda fácilmente.",
        respuestas: {
            a: ["Con frecuencia", "Uno"],
            b: ["De vez en cuando","Dos"],
            c: ["Casi nunca","Tres"],
            d: ["Nunca","Cuatro"],
        },
        tipoRespuesta: "radio",
    }, 
    {   //Pregunta 3
        pregunta: "Si alguna persona es injusta y agresiva, puedo	controlar	la	situación	con confianza.",
        respuestas: {
            a: ["Con frecuencia", "Uno"],
            b: ["De vez en cuando","Dos"],
            c: ["Casi nunca","Tres"],
            d: ["Nunca","Cuatro"],
        },
        tipoRespuesta: "radio",
    }, 
    {   //Pregunta 4
        pregunta: "Si alguna persona se muestra irónica conmigo o con otras, puedo responder sin agresividad.",
        respuestas: {
            a: ["Con frecuencia", "Uno"],
            b: ["De vez en cuando","Dos"],
            c: ["Casi nunca","Tres"],
            d: ["Nunca","Cuatro"],
        },
        tipoRespuesta: "radio",
    }, 
    {   //Pregunta 5
        pregunta: "Si creo que se está abusando de mi, soy capaz de denunciarlo sin alterarme.",
        respuestas: {
            a: ["Con frecuencia", "Uno"],
            b: ["De vez en cuando","Dos"],
            c: ["Casi nunca","Tres"],
            d: ["Nunca","Cuatro"],
        },
        tipoRespuesta: "radio",
    }, 
    {   //Pregunta 6
        pregunta: "Si alguna persona me pide permiso para hacer algo que no me gusta, por ejemplo fumar, puedo decirle que no sin sentirme culpable.",
        respuestas: {
            a: ["Con frecuencia", "Uno"],
            b: ["De vez en cuando","Dos"],
            c: ["Casi nunca","Tres"],
            d: ["Nunca","Cuatro"],
        },
        tipoRespuesta: "radio",
    }, 
    {   //Pregunta 7
        pregunta: "Si alguna persona pide mi opinión sobre alguna cosa, me siento bien dándosela, aunque no concuerde con la de los demás.",
        respuestas: {
            a: ["Con frecuencia", "Uno"],
            b: ["De vez en cuando","Dos"],
            c: ["Casi nunca","Tres"],
            d: ["Nunca","Cuatro"],
        },
        tipoRespuesta: "radio",
    }, 
    {   //Pregunta 8
        pregunta: "Puedo conectar fácil y efectivamente con	personas	que	considero importantes.",
        respuestas: {
            a: ["Con frecuencia", "Uno"],
            b: ["De vez en cuando","Dos"],
            c: ["Casi nunca","Tres"],
            d: ["Nunca","Cuatro"],
        },
        tipoRespuesta: "radio",
    }, 
    {   //Pregunta 9
        pregunta: "Cuando encuentro defectos en una tienda o restaurante, soy capaz de exponerlos	sin	atacar	a	las	otras personas y sin sentirme mal.",
        respuestas: {
            a: ["Con frecuencia", "Uno"],
            b: ["De vez en cuando","Dos"],
            c: ["Casi nunca","Tres"],
            d: ["Nunca","Cuatro"],
        },
        tipoRespuesta: "radio",
    }, 
];




let numtest4 = "test4";


// (2) 
//Enlazar Elementos necesarios
const test4_contenedor = document.getElementById(numtest4);
const test4_botonRes = document.getElementById(numtest4+"_boton");
const test4_resultado = document.getElementById(numtest4+"_resultado");

// (3) 
//Mostrar test
mostrar_test(test4_preguntas,numtest4,test4_contenedor)

// (4) 
//Añadir evento click al boton de resultados       
test4_botonRes.addEventListener("click", valida_test4);

// (5) 
//Funcion para validar resultados
function valida_test4(){
    let respuestas = validarRespuestas (test4_preguntas,numtest4,true);
    let respuestas_Formato = formatoImprimirResultado_test4(respuestas);
    let mensaje = "Frecuencia en los resultados:";

    mostrarResultado(respuestas_Formato, test4_resultado, mensaje, numtest4);
}


// (6) 
//Funcion personalizada para formato de impresion del test4
function formatoImprimirResultado_test4 (resultado){
        if (resultado){        
            let max;

            
            //obteniendo el mayor (es el primer elemento por estar en orden)
            for (i in resultado){
                max = resultado[i];
                break;
            }
           
            console.log(max);

            // los valores mayores son envueltos por un div para que sean colocados al mismo nivel en pantalla
            let mayores = "<div id='resulMax' > ";
            let menores = "";
            let texto;

            if(resultado["Cuatro"] == max || resultado["Tres"] == max)
                texto = `<p class='resaltar'> <span>¡Alerta!</span> El mayor número en la puntuación (casilla 3 y 4) muestra un menor nivel de asertividad. Las personas que han puntuado mayoritariamente en las casillas 3 y 4 deben  plantearse seriamente cambiar su conducta si no quieren ver lesionados sus derechos.</p>`;
            else
                texto = `<p class='noResaltar'> <span>¡Bien!</span> El mayor número en la puntuación (casilla 3 y 4) muestra un menor nivel de asertividad. Las personas que han puntuado mayoritariamente en las casillas 3 y 4 deben  plantearse seriamente cambiar su conducta si no quieren ver lesionados sus derechos.</p>`;
            
            for(valor in  resultado)
                if (resultado[valor] === max)
                    mayores += `<p> ${valor}: repeticiones ${resultado[valor]}</p>`;
                else
                    menores += `<p>  ${valor}: repeticiones ${resultado[valor]}</p>`;

            return mayores + "</div>" + menores +texto;
        }else
            return "";
}

