// (1) 
// Arreglo de objetos con las preguntas y opciones de respuesta
const test3_preguntas = [
    {   //Pregunta 1
        pregunta: "A la hora de tomar decisiones en tu vida, como proponer cosas nuevas en el trabajo, iniciar alguna actividad de ocio o elegir un color nuevo para pintar tu casa, ¿sueles buscar la aprobación o el apoyo de las personas que te rodean?",
        respuestas: {
            a: ["No, consideras que tu opinión sea buena y que la de los demás no tenga por qué serlo siempre-", "Cuatro"],
            b: ["Si, pero sólo ante las decisiones que consideras demasiado importantes como para actuar precipitadamente.","Dos"],
            c: ["Si, siempre que puedes consultas con los demás. Te equivocas con frecuencia y quieres hacer las cosas bien.","Uno"],
            d: ["Depende  de la decisión.	Sueles tener claro lo que vas a hacer, pero consideras las posibilidades que te ofrecen los demás.","Tres"],
        },
        tipoRespuesta: "radio",
    }, 
    {   //Pregunta 2
        pregunta: "Imagina que estás en una reunión social o familiar importante; adviertes que no vas vestido para la ocasión y que desentonas con los demás, ¿cómo te comportas?",
        respuestas: {
            a: ["No le das importancia, te comportas con naturalidad y si alguien te lo comenta haces una broma al respecto.", "Tres"],
            b: ["Te da mucha vergüenza. Procuras situarte en algún lugar discreto y pasar desapercibido.","Uno"],
            c: ["Te sientes incómodo, pero tratas de no pensar en ello, te integras en la reunión y das alguna excusa por tu error.","Cuatro"],
            d: ["No te importa nada en absoluto, aunque no lleves la ropa adecuada tienes estilo y sabes llevar bien cualquier cosa.","Dos"],
        },
        tipoRespuesta: "radio",
    },
    {  //Pregunta 3
        pregunta: "Tienes muchas ganas de irte a comprar ropa y le pides a algún amigo que te acompañe. Esta persona es más alta y más atractiva que tú, y todo lo que se prueba le queda mucho mejor que a ti.",
        respuestas: {
            a: ["Admiras el estilo de tu acompañante, al final compras un par de prendas necesarias pero muy simples en cuanto a forma y color.", "Dos"],
            b: ["No estás dispuest@ a que te gane, decides comprar varias prendas muy modernas y bastante caras.","Cuatro"],
            c: ["Admiras su estilo, pero eres muy consciente del tuyo, compras la ropa que mejor te sienta y que necesitas, y pasaste un rato ameno probándose cosas diferentes.","Tres"],
            d: ["A su lado te sientes bastante poca cosa, te quita las ganas de probarte algo y mucho más de comparar. Pones una excusa y te marchas.","Uno"],
        },
        tipoRespuesta: "radio",
    },
    {   //Pregunta 4
        pregunta: "Un día conoces a alguien nuevo y muy interesante, estás charlando animadamente y llega el momento de hablar de ti, ¿cuál de las siguientes opciones se ajusta mejor a lo que cuentas?",
        respuestas: {
            a: ["No crees que tengas mucho que contar, tu trabajo es muy corriente, tus amigos son normales y tus aficiones también. Prefieres que esta persona te cuente su vida.", "Uno"],
            b: ["Tu trabajo te gusta y aunque sea corriente, siempre lo enfocas desde una perspectiva interesante, tus aficiones son tu pasión y disfrutas hablando de ellas, también hablas de tus proyectos futuros.","Tres"],
            c: ["Hablas en líneas generales de tu trabajo y tus aficiones, sobre todo hablas de tus amigos y de lo más interesante de sus vidas.","Dos"],
            d: ["Más que de tu trabajo actual, hablas de tus proyectos y tus objetivos, y de lo que vas a hacer para lograrlos, de lo buenas que son tus amistades y lo poco usual de tus aficiones. Te gusta hablar de ti.","Cuatro"],
        },
        tipoRespuesta: "radio",
    },
    {  //Pregunta 5
        pregunta: "En tu lugar de trabajo o de estudios, se está explicando algo que es completamente nuevo para ti. Llega un momento en que te das cuenta que no has entendido casi nada, ¿qué haces?",
        respuestas: {
            a: ["Paras la explicación y requieres que se empiece de nuevo, si tu no lo entiendes habrá mucha gente que tampoco lo haga", "Cuatro"],
            b: ["Si hay más gente que pregunte tú también lo haces, si no, buscas a parte al ponente para que te aclare las dudas.","Dos"],
            c: ["Te  da  mucha  vergüenza  preguntar  y  demostrar  así  que  no  entiendes.	Más tarde preguntarás a un amigo o intentarás informarte por tu cuenta.","Uno"],
            d: ["Tomas nota de lo que no entiendes para preguntarlo al finalizar la charla, si sigues con dudas pedirías información complementaria para prepárate mejor.","Tres"],
        },
        tipoRespuesta: "radio",
    },
    { //Pregunta 6
        pregunta: "Tener un trabajo bien remunerado y que nos guste es algo difícil de conseguir, si tuvieras que valorar tu empleo o tu situación laboral, ¿cómo la definirías?",
        respuestas: {
            a: ["Satisfactoria, tratas de buscar el lado positivo de las cosas y nunca te faltan proyectos y objetivos que perseguir", "Tres"],
            b: ["Horrible, no obstante, sabes que las cosas están mal y que tienes que aguantar lo que sea. Estas muy agradecido por tener trabajo.","Uno"],
            c: ["No te preocupa especialmente el tema, tienes un montón de proyectos más importantes y con tu valía lo alcanzarás.","Cuatro"],
            d: ["Has logrado que no te afecte, consideras más importante tu vida personal y privada y por eso es por lo que luchas.","Dos"],
        },
        tipoRespuesta: "radio",
    },
    {  //Pregunta 7
        pregunta: "Has tenido un día duro, has trabajado con más ahínco para finalizar una tarea en la oficina, has hecho todas las gestiones que tenías pendientes, has resuelto un par de problemas domésticos y encima le has hecho un favor a un amigo ¿qué haces al llegar a casa?",
        respuestas: {
            a: ["Prefieres no pensarlo, el día ha sido duro para ti, no es algo nuevo. Sólo pides dormir bien y que mañana sea un día más tranquilo.", "Dos"],
            b: ["Se lo cuentas a todo el mundo, te gusta que se te reconozca cuando haces las cosas bien y exiges en casa que te mimen por haberte esforzado tanto.","Cuatro"],
            c: ["Estás muy satisfecho y decides darte un capricho, darte un baño de espuma y ver una buena película, o comprarte un regalito que hace tiempo querías.","Tres"],
            d: ["Te preocupa que se te haya olvidado algo o haber hecho algo mal por la prisa, repasas mentalmente las actividades y al día siguiente esperas no tener queja de nadie.","Uno"],
        },
        tipoRespuesta: "radio",
    },
    {  //Pregunta 8
        pregunta: "En tu trabajo están buscando a una persona que represente a la empresa en un concurso del ramo. Piden una persona que cumpla unos requisitos, entre ellos, explicar bien tu trabajo y que haga una demostración práctica del mismo.",
        respuestas: {
            a: ["No te planteas ser voluntario, hay mil personas más capacitadas que tú para la demostración y no se te da bien hablar en público.", "Uno"],
            b: ["Te presentas voluntario, puede ser una experiencia interesante y si sales elegido puedes hacer una presentación innovadora.","Tres"],
            c: ["No te presentas, serías capaz de hacerla bien, pero crees que hay gente mejor preparada y más original que tú.","Dos"],
            d: ["Te presentas y estás casi seguro que te elegirán, haces buenos proyectos y darás una buena imagen de la empresa.","Cuatro"],
        },
        tipoRespuesta: "radio",
    },
    {  //Pregunta 9
        pregunta: "¿Con cuál de las siguientes frases sobre la buena fortuna estás más de acuerdo?",
        respuestas: {
            a: ["La buena suerte puede tocarle a todo el mundo, yo me considero una persona afortunada a la que la vida le sonríe.", "Cuatro"],
            b: ["Para tener buena suerte hay que trabajar duro, sólo los muy afortunados la tienen sin apenas esfuerzo.","Dos"],
            c: ["Yo no tengo suerte, tanto los premios como las cosas especiales sólo les pasan a los demás.","Uno"],
            d: ["La suerte respecto a los premios es una cuestión de probabilidad, y respecto a las cosas de la vida, siempre depende de cómo se perciban.","Tres"],
        },
        tipoRespuesta: "radio",
    },
    {   //Pregunta 10
        pregunta: "En una fiesta en la que no conoces a nadie excepto a los anfitriones, te presentan a un grupo de personas de aspecto interesante ¿cuál es tu actitud?",
        respuestas: {
            a: ["Te interesa conocerlos no sólo para pasar un buen rato en la reunión sino porque puede ser una forma de iniciar una amistad.", "Tres"],
            b: ["Esperas causarles una buena impresión y decir cosas que les puedan interesar.","Uno"],
            c: ["Te gustaría llevarles a tu terreno en la conversación para así poder hablar de los temas que más te interesan.","Cuatro"],
            d: ["Antes de iniciar una conversación escuchas lo que dicen, y esperas para hablar a que lo que hagan de temas que tu conozcas.","Dos"],
        },
        tipoRespuesta: "radio",
    },
    
];




let numTest3 = "test3";


// (2) 
//Enlazar Elementos necesarios
const test3_contenedor = document.getElementById(numTest3);
const test3_botonRes = document.getElementById(numTest3+"_boton");
const test3_resultado = document.getElementById(numTest3+"_resultado");
const test3_resultadoTexto = document.getElementById(numTest3+"_texto");

// (3) 
//Mostrar test
mostrar_test(test3_preguntas,numTest3,test3_contenedor,true)

// (4) 
//Añadir evento click al boton de resultados       
test3_botonRes.addEventListener("click", valida_test3);

// (5) 
//Funcion para validar resultados
function valida_test3(){
    let respuestas = validarRespuestas (test3_preguntas,numTest3,true);
    let respuestas_Formato = formatoImprimirResultado_test3(respuestas);
    let mensaje = "Frecuencia en los resultados:";

    mostrarResultado(respuestas_Formato["resultado"], test3_resultado, mensaje, numTest3);
    if(respuestas_Formato)
        mostrarResultado(respuestas_Formato["texto"], test3_resultadoTexto, "", numTest3);
}


// (6) 
//Funcion personalizada para formato de impresion del test3
function formatoImprimirResultado_test3 (resultado){
        if (resultado){        
            let max;

            //obteniendo el mayor (es el primer elemento por estar en orden)
            for (i in resultado){
                max = resultado[i];
                break;
            }
           
            // los valores mayores son envueltos por un div para que sean colocados al mismo nivel en pantalla
            let mayores = "<div id='resulMax' > ";
            let menores = "";
            let texto="";
            
            for(valor in  resultado){
                if (resultado[valor] === max){
                    mayores += `<p> ${valor}: repeticiones ${resultado[valor]}</p>`;
                    texto += "<p class='resaltar'>" + textoResultado[valor] + "</p>";
                }else{
                    menores += `<p>  ${valor}: repeticiones ${resultado[valor]}</p>`;
                    texto += "<p class='noResaltar'>" + textoResultado[valor] + "</p>";
                }
            }

            return { 
                "resultado" : mayores + "</div>" + menores,
                "texto" : texto
                };


        }else
            return "";
}


//Texto
let textoResultado = {
             "Uno":   
                `<span>Mayoría de 1</span>. Tienes un nivel algo bajo de autoestima y se nota en la valoración que haces de ti mismo, de  tu fortuna en la vida. Una de las razones por las que percibimos más las cosas negativas es que estas son más destacables que las positivas. En la escuela o de niños en casa, siempre nos regañaban por lo malo, pero se olvidaban de felicitarnos por lo bueno.
                Para elevar el nivel de nuestra autoestima es necesario aceptarse tal como uno es y valorar más lo que somos y lo que tenemos. A veces puede parecer difícil, pero si practicas unos minutos diarios a pensar en las cosas positivas que tienes, irás poco a poco queriéndote más.`,

            "Dos":
                `<span>Mayoría de 2</span>. Tu nivel de autoestima es suficiente pero más a menudo de lo que te gustaría, te falla y te abandona. Los sucesos negativos que nos pasan absorben más nuestros sentidos pues son más desagradables que las cosas positivas, por ello les damos más importancia de la que merecen y no nos fijamos en lo bueno con igual intensidad. Todas las personas tenemos cosas positivas y todos cometemos errores o tenemos días flojos.
                La clave está en darle a cada cosa el justo valor que tiene, ver los errores como manera de aprendizaje y reconocer las cosas buenas que poseemos. También podemos aprender a querernos a nosotros mismos cuidándonos con más mimo y dándonos gustos.`,
            
            "Tres":
                `<span>Mayoría de 3</span>. Tu nivel de autoestima es muy bueno, sabes dar a las cosas el valor que merecen, reconoces lo bueno y no te dejas amilanar fácilmente por las adversidades. Eres una persona sensata y realista que tiene confianza en sí misma, tus objetivos no son irrealizables y te gusta luchar para conseguirlos. Has aprendido que las cosas no salen siempre como quieres ni cuando quieres, que todo requiere un esfuerzo y que es normal equivocarse. Cuando tienes un error procuras aprender lo que se te enseña y a evitarlo en futuras ocasiones.
                Un buen nivel de autoestima nos hace tener más ganas de luchar por las cosas, nos ayuda a no desistir en nuestro empeño de lograr algo y hace que la vida nos sea más amable y agradable.`,
            
            "Cuatro":
                `<span>Mayoría de 4</span>. Tienes un alto nivel de autoestima y mucha confianza y seguridad en ti mismo. Ambos sentimientos son muy positivos y necesarios para conseguir mucho más de lo que nos proponemos, sin embargo, es preciso ser cautelosos. Al igual que una baja autoestima, un exceso de esta puede hacernos perder la objetividad de nuestras acciones, hacernos creer demasiado buenos en algo y si sobreviene una decepción o un fracaso, hacernos sufrir más de lo razonable.
                También si nos creemos demasiado especiales podemos hacer daño a los demás minusvalorando su esfuerzo o no apreciándolo en lo que vale. Siempre conviene tener una dosis de modestia.`
            }