// (1) 
// Arreglo de objetos con las preguntas y opciones de respuesta
const test2_preguntas = [
    {   //Pregunta 1
        pregunta: "Tengo fama de decir lo que pienso claramente y sin rodeos.",
        respuestas: {
            a: ["DE ACUERDO", "Pragmático"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 2
        pregunta: "Estoy segur@ de lo que es bueno y de lo que es malo. Lo que está bien y lo que está mal.",
        respuestas: {
            a: ["DE ACUERDO", "Teórico"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 3
        pregunta: "Muchas veces actúo sin mirar las consecuencias.",
        respuestas: {
            a: ["DE ACUERDO", "Activo"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 4
        pregunta: "Normalmente	trato	de	resolver	los	problemas metódicamente y paso a paso.",
        respuestas: {
            a: ["DE ACUERDO", "Teórico"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 5
        pregunta: "Creo que los formalismos cortan y limitan la actuación libre de las personas.",
        respuestas: {
            a: ["DE ACUERDO", "Activo"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 6
        pregunta: "Me interesa saber cuáles son los sistemas de valores de los demás y con qué criterio actúan.",
        respuestas: {
            a: ["DE ACUERDO", "Teórico"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 7
        pregunta: "Pienso que el actuar intuitivamente puede ser siempre tan válido como actuar reflexivamente.",
        respuestas: {
            a: ["DE ACUERDO", "Activo"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 8
        pregunta: "Creo que lo más importante es que las cosas funcionen.",
        respuestas: {
            a: ["DE ACUERDO", "Pragmático"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 9
        pregunta: "Procuro estar al tanto de lo que ocurre aquí y ahora.",
        respuestas: {
            a: ["DE ACUERDO", "Activo"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 10
        pregunta: "Disfruto cuando tengo tiempo para preparar mi trabajo y realizarlo a conciencia.",
        respuestas: {
            a: ["DE ACUERDO", "Reflexivo"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 11
        pregunta: "Estoy a gusto siguiendo un orden, en las comidas, en el estudio, haciendo ejercicio regularmente.",
        respuestas: {
            a: ["DE ACUERDO", "Teórico"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 12
        pregunta: "Cuando escucho una nueva idea enseguida comienzo a pensar cómo ponerla en práctica.",
        respuestas: {
            a: ["DE ACUERDO", "Pragmático"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 13
        pregunta: "Prefiero las ideas originales y novedosas aunque no sean prácticas.",
        respuestas: {
            a: ["DE ACUERDO", "Activo"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 14
        pregunta: "Admiro y me ajusto a las normas sólo si me sirven para lograr mis objetivos.",
        respuestas: {
            a: ["DE ACUERDO", "Pragmático"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 15
        pregunta: "Normalmente encajo bien con personas reflexivas y me cuesta sintonizar con personas demasiado espontáneas, imprevisibles.",
        respuestas: {
            a: ["DE ACUERDO", "Teórico"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 16
        pregunta: "Escucho con más frecuencia que hablo.",
        respuestas: {
            a: ["DE ACUERDO", "Reflexivo"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 17
        pregunta: "Prefiero las cosas estructuradas a las desordenadas.",
        respuestas: {
            a: ["DE ACUERDO", "Teórico"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 18
        pregunta: "Cuando poseo cualquier información, trato de interpretarla bien antes de manifestar alguna conclusión.",
        respuestas: {
            a: ["DE ACUERDO", "Reflexivo"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 19
        pregunta: "Antes de hacer algo estudio con cuidado sus ventajas e inconvenientes.",
        respuestas: {
            a: ["DE ACUERDO", "Reflexivo"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 20
        pregunta: "Crezco con el reto de hacer algo nuevo y diferente.",
        respuestas: {
            a: ["DE ACUERDO", "Activo"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 21
        pregunta: "Casi siempre procuro ser coherente con mis criterios y sistemas de valores. Tengo principios y los sigo.",
        respuestas: {
            a: ["DE ACUERDO", "Teórico"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 22
        pregunta: "Cuando hay una discusión no me gusta ir con rodeos.",
        respuestas: {
            a: ["DE ACUERDO", "Pragmático"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 23
        pregunta: "Me disgusta implicarme afectivamente en mi ambiente de trabajo. Prefiero mantener relaciones distantes.",
        respuestas: {
            a: ["DE ACUERDO", "Teórico"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 24
        pregunta: "Me gustan más las personas realistas y concretas que las teóricas.",
        respuestas: {
            a: ["DE ACUERDO", "Pragmático"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 25
        pregunta: "Me gusta ser creativ@, romper estructuras.",
        respuestas: {
            a: ["DE ACUERDO", "Teórico"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 26
        pregunta: "Me siento a gusto con personas espontáneas y divertidas.",
        respuestas: {
            a: ["DE ACUERDO", "Activo"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 27
        pregunta: "La mayoría de las veces expreso abiertamente cómo me siento.",
        respuestas: {
            a: ["DE ACUERDO", "Activo"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 28
        pregunta: "Me gusta analizar y dar vueltas a las cosas.",
        respuestas: {
            a: ["DE ACUERDO", "Reflexivo"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 29
        pregunta: "Me molesta que la gente no se tome en serio las cosas.",
        respuestas: {
            a: ["DE ACUERDO", "Teórico"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 30
        pregunta: "Me atrae experimentar y practicar las últimas técnicas y novedades.",
        respuestas: {
            a: ["DE ACUERDO", "Pragmático"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 31
        pregunta: "Soy cautelos@ a la hora de sacar conclusiones.",
        respuestas: {
            a: ["DE ACUERDO", "Reflexivo"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 32
        pregunta: "Prefiero contar con el mayor número de fuentes de información.	Cuanto más datos reúna para reflexionar, mejor.",
        respuestas: {
            a: ["DE ACUERDO", "Reflexivo"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 33
        pregunta: "Tiendo a ser perfeccionista.",
        respuestas: {
            a: ["DE ACUERDO", "Teórico"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 34
        pregunta: "Prefiero oír las opiniones de los demás antes de exponer la mía.",
        respuestas: {
            a: ["DE ACUERDO", "Reflexivo"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 35
        pregunta: "Me gusta afrontar la vida espontáneamente y no tener que planificar todo previamente.",
        respuestas: {
            a: ["DE ACUERDO", "Activo"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 36
        pregunta: "En las discusiones me gusta observar cómo actúan los demás participantes.",
        respuestas: {
            a: ["DE ACUERDO", "Reflexivo"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 37
        pregunta: "Me	siento	incómod@	con	las	personas	calladas	y demasiado analíticas.",
        respuestas: {
            a: ["DE ACUERDO", "Activo"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 38
        pregunta: "Juzgo con frecuencia las ideas de los demás por su valor práctico.",
        respuestas: {
            a: ["DE ACUERDO", "Pragmático"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 39
        pregunta: "Me agobio si me obligan a acelerar mucho el trabajo para cumplir un plazo.",
        respuestas: {
            a: ["DE ACUERDO", "Reflexivo"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 40
        pregunta: "En las reuniones apoyo las ideas prácticas y realistas.",
        respuestas: {
            a: ["DE ACUERDO", "Pragmático"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 41
        pregunta: "Es mejor gozar del momento presente que deleitarse pensando en el pasado o el futuro.",
        respuestas: {
            a: ["DE ACUERDO", "Activo"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 42
        pregunta: "Me molestan las personas que siempre desean apresurar las cosas.",
        respuestas: {
            a: ["DE ACUERDO", "Reflexivo"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 43
        pregunta: "Aporto ideas nuevas y espontáneas en los grupos de discusión.",
        respuestas: {
            a: ["DE ACUERDO", "Activo"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 44
        pregunta: "Pienso	que	son	más	conscientes	las	decisiones fundamentales en un minucioso análisis que las basadas en la intuición.",
        respuestas: {
            a: ["DE ACUERDO", "Reflexivo"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 45
        pregunta: "Detecto frecuentemente la inconsistencia y puntos débiles en las argumentaciones de los demás.",
        respuestas: {
            a: ["DE ACUERDO", "Teórico"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 46
        pregunta: "Creo que es preciso saltarse las normas muchas veces que cumplirlas.",
        respuestas: {
            a: ["DE ACUERDO", "Activo"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 47
        pregunta: "A menudo caigo en cuenta de que otras formas mejores y más prácticas de hacer las cosas.",
        respuestas: {
            a: ["DE ACUERDO", "Pragmático"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 48
        pregunta: "En conjunto hablo más que escucho.",
        respuestas: {
            a: ["DE ACUERDO", "Activo"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 49
        pregunta: "Prefiero distanciarme de los hechos y observarlos desde otra perspectiva.",
        respuestas: {
            a: ["DE ACUERDO", "Reflexivo"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 50
        pregunta: "Estoy convencid@ de que debe imponerse la lógica y el razonamiento.",
        respuestas: {
            a: ["DE ACUERDO", "Teórico"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 51
        pregunta: "Me gusta buscar nuevas experiencias.",
        respuestas: {
            a: ["DE ACUERDO", "Activo"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 52
        pregunta: "Me gusta experimentar y aplicar las cosas.",
        respuestas: {
            a: ["DE ACUERDO", "Pragmático"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 53
        pregunta: "Pienso que debemos llegar pronto al grano, al meollo de las cosas.",
        respuestas: {
            a: ["DE ACUERDO", "Pragmático"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 54
        pregunta: "Siempre trato de conseguir conclusiones e ideas claras.",
        respuestas: {
            a: ["DE ACUERDO", "Teórico"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 55
        pregunta: "Prefiero discutir cuestiones concretas y no perder tiempo con charlas vacías.",
        respuestas: {
            a: ["DE ACUERDO", "Reflexivo"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 56
        pregunta: "Me impaciento cuando me dan explicaciones irrelevantes e incoherentes.",
        respuestas: {
            a: ["DE ACUERDO", "Pragmático"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 57
        pregunta: "Compruebo antes si las cosas funcionan realmente.",
        respuestas: {
            a: ["DE ACUERDO", "Pragmático"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 58
        pregunta: "Hago varios borradores antes de la redacción definitiva de un trabajo.",
        respuestas: {
            a: ["DE ACUERDO", "Reflexivo"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 59
        pregunta: "Soy consciente de que en las discusiones ayudo a mantener a los demás contrados en el tema, evitando divagaciones.",
        respuestas: {
            a: ["DE ACUERDO", "Pragmático"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    }, 
    {   //Pregunta 60
        pregunta: "Observo que, con frecuencia, soy un@ de los más objetiv@s y desapasionad@s en las discusiones.",
        respuestas: {
            a: ["DE ACUERDO", "Teórico"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 61
        pregunta: "Cuando algo va mal le quito importancia y trato de hacerlo mejor.",
        respuestas: {
            a: ["DE ACUERDO", ""],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 62
        pregunta: "Rechazo ideas originales y espontáneas si no las veo prácticas.",
        respuestas: {
            a: ["DE ACUERDO", "Pragmático"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 63
        pregunta: "Me gusta sopesar diversas alternativas antes de tomar una decisión.",
        respuestas: {
            a: ["DE ACUERDO", "Reflexivo"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 64
        pregunta: "Con frecuencia miro hacia adelante para prever el futuro.",
        respuestas: {
            a: ["DE ACUERDO", "Teórico"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 65
        pregunta: "En los debates y discusiones prefiero desempeñar un papel secundario antes de ser el/la líder o el/la que mas participa.",
        respuestas: {
            a: ["DE ACUERDO", "Reflexivo"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 66
        pregunta: "Me molestan las personas que no actúan con lógica.",
        respuestas: {
            a: ["DE ACUERDO", "Teórico"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 67
        pregunta: "Me resulta incómodo tener que planificar y prever las cosas.",
        respuestas: {
            a: ["DE ACUERDO", "Activo"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 68
        pregunta: "Creo que el fin justifica los medios en muchos casos.",
        respuestas: {
            a: ["DE ACUERDO", "Pragmático"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 69
        pregunta: "Suelo reflexionar sobre los asuntos y problemas.",
        respuestas: {
            a: ["DE ACUERDO", ""],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 70
        pregunta: "El trabajar a consciencia me llena de satisfacción y orgullo.",
        respuestas: {
            a: ["DE ACUERDO", "Reflexivo"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 71
        pregunta: "Ante los acontecimientos trato de descubrir los principios y teorías en las que se basan.",
        respuestas: {
            a: ["DE ACUERDO", "Teórico"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 72
        pregunta: "Con tal de conseguir el objetivo que pretendo soy capaz e herir sentimientos ajenos.",
        respuestas: {
            a: ["DE ACUERDO", "Pragmático"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 73
        pregunta: "No me importa hacer todo lo necesario para que sea afectivo mi trabajo.",
        respuestas: {
            a: ["DE ACUERDO", "Pragmático"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    }, 
    {   //Pregunta 74
        pregunta: "Con frecuencia soy una de las personas que más anima las fiestas.",
        respuestas: {
            a: ["DE ACUERDO", "Activo"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 75
        pregunta: "Me aburro enseguida con el trabajo metódico y minucioso.",
        respuestas: {
            a: ["DE ACUERDO", "Activo"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    }, 
    {   //Pregunta 76
        pregunta: "La gente con frecuencia cree que soy poco sensible a sus sentimientos.",
        respuestas: {
            a: ["DE ACUERDO", "Pragmático"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 77
        pregunta: "Suelo dejarme lleva por mis intuiciones.",
        respuestas: {
            a: ["DE ACUERDO", "Activo"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    }, 
    {   //Pregunta 78
        pregunta: "Si trabajo en grupo procuro que se siga un método y un orden.",
        respuestas: {
            a: ["DE ACUERDO", "Teórico"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    },   
    {   //Pregunta 79
        pregunta: "Con frecuencia me interesa averiguar lo que piensa la gente.",
        respuestas: {
            a: ["DE ACUERDO", "Reflexivo"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    }, 
    {   //Pregunta 80
        pregunta: "Esquivo los temas subjetivos y poco claros.",
        respuestas: {
            a: ["DE ACUERDO", "Teórico"],
            b: ["EN DESACUERDO",""],
        },
        tipoRespuesta: "radio",
    }, 
];


let numtest2 = "test2";


// (2) 
//Enlazar Elementos necesarios
const test2_contenedor = document.getElementById(numtest2);
const test2_botonRes = document.getElementById(numtest2+"_boton");
const test2_resultado = document.getElementById(numtest2+"_resultado");

// (3) 
//Mostrar test
mostrar_test(test2_preguntas,numtest2,test2_contenedor)

// (4) 
//Añadir evento click al boton de resultados       
test2_botonRes.addEventListener("click", valida_test2);

// (5) 
//Funcion para validar resultados
function valida_test2(){
    let respuestas = validarRespuestas (test2_preguntas,numtest2,true);
    let respuestas_Formato = formatoImprimirResultado_test2(respuestas);
    let mensaje = "Frecuencia en los resultados:";

    mostrarResultado(respuestas_Formato, test2_resultado, mensaje, numtest2);
}


// (6) 
//Funcion personalizada para formato de impresion del test2
function formatoImprimirResultado_test2 (resultado){
        if (resultado){        
            let max;

            for (i in resultado){
                max = resultado[i];
                break;
            }
           
            let mayores = "<div id='resulMax' > ";
            let menores = "";
            
            for(valor in  resultado){
                if (resultado[valor] === max)
                    mayores += `<p>  ${valor}: ${resultado[valor]}</p>`;
                else
                    menores += `<p>  ${valor}: ${resultado[valor]}</p>`;
            }

            return mayores + "</div>" + menores;
        }else
            return null;
}