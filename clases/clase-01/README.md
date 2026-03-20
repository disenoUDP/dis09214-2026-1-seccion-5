# Clase 01

- Presentación equipo docente

  Profesor: Matías Serrano <https://github.com/misaaaaaa>

  Ayudante: Santiago Gaete <https://github.com/santiagoClifford>

- Horarios de asistencia: Se pasará a las 14:40. Receso a las 15:40
- Programa del curso en repo principal
- Bitácoras (inicialmente en p5.js, luego en GitHub)
- Calendario está comprimido

## Encargo previo

- Revisión sobre el artista [Sol Lewitt](https://es.wikipedia.org/wiki/Sol_LeWitt)
  - Encontrar alguna obra y comentar el proceso de trabajo y su relevancia (1 párrafo)
  - Incluir un comentario personal ¿qué te llama la atención? ¿por qué?
  - Citar fuente donde se encontró la obra. Incluir título de libro o página web, autor, fecha de publicación, número de página (libro físico) o URL (página web)
  - Completar en un documento de Google Docs en su propia cuenta de Drive. Las instrucciones de entrega se darán en la primera clase.

## Ejercicios para clase

- Aprender a navegar el entorno de p5.js
- Mis primeros códigos
  - Hola Mundo
  - Primitivas
  - Modificación de primitivas
  - Color

- Referencias visuales libro constructivismo ruso: [constructivismo.md](constructivismo.md)


## apuntado por stgo

# sesion-01

DIS09214

2026-03-20

primera clase kemosión

Rep180. Lab 12

## presentacion

matías es sonididasta, y magister en artes 
mediales. Ahora en proceso de codctorado en artes y humanidades.

Hace clases en artes y en diseño.

## cátedra

el diseño, como disciplina, es una cajita estática en la que uno se mueve? cerrada para otras áreas? en realidad es una manera de pensar, flexible y pemreable a otra disciplinas, pueden moverse.

En el area solemos usar GitHub. Es una web donde se alojan repos, siendo repo = carpetas. En ellas tu puedes meter toda la info y archivos de un proyecto. este semestre tendremos un repo del curso.

En este curso trabajaremos con el [editor p5js](https://editor.p5js.org)

### formalidades

tendremos 2 solemnes y un examen.

hay muchos feriados y receso y cosas los viernes, así que iremos en modo pro.

- solemne-01 - 10 de abril:

se entrega fuera de clases. Hay solo 2 clases para preparar la solemne-01

- solemne-02 - 29 de mayo:

interrogación oral. La idea de esto es comprobar que la información relevante se integre en la mente de los estudiantes.

- examen - 26 de junio

Todas las solemnes serán evaluadas en conjunto con sus entregas anteriores, a modo de bitácora individual.

Es importante acreditar procesos, trackear avances y esto es parte del curso. Se tendrá en cuenta esto para las evaluaciones.

Por parte del equipo docente, toda la docuemntación estará disponible en el [repo del curso](https://github.com/disenoUDP/dis09214-2026-1-seccion-5).

## pensamiento computacional

¿porqué se llama así?

el foco está en el sujeto de la frase, "pensamiento". LO importante es adquirir herramientas reflexivas. La computación puede entenderse como una manera de pensar.

Libro How to speak machine (John Maeda): cuenta la hstoria de la programación, antes, el computador era un oficio, una persona que computaba cálculos. La computación tiene que ver ocn eso.

Es importante que aprendadn por el contextp histórico actual en el que vivimos.

Google images, instagram, youtube, el excell de la lista, los estudiantes en la sala ¿Qué tienen en común? Están organzados en formato de grilla.

Para la U, somos nuestro rut, el curso es un códigio(DIS09214), para que la U considere que pasaste un curso, necesita un dato, una nota. Y así es como funciona el mundo computacional. Todo son datos

Ejemplo, las imágenes son una tabla. Están hecha por pequeños datos llamados pixeles.

Casi todas la estrucutras sociales de la actualidad son tablas de excel. Pero sí existen cosas más allá de eso, todo lo que asociamos con lo "humano".

#### lógica computacional

¿qué es un algoritmo?

es un método de resolución de problemas. El hecho de planificar es algorítmico. Ejemplo planificar cómo irse a la casa es un algoritmo: salir de un edificio, tomar la micro, caminar, parar en el semáforo, etc.

etimologicamente viene de "al-Khwārizmī" un matemático de alrededor del año 800. (es el que sale en la portada de la algebra de baldor)

los algoritmos tienen mucho que ver con la estadística, y de ahí podemos interpretar que viene la palabra Estado. El ente que regula la información organizada

#### antecedente de la computación

La máquina de jacquard: una de las primera implementaciones de la lógica del código, fue con fines textiles.

Una lógica similar fue utilizada con la máquina de Turing, que aparece en la película "Código Enigma"

ada lovelace: una matemática hija del poeta lord byron. Tuvo mucho que ver con la implementación de las primeras calculadora. Imaginó cómo funcionarían los algoritmos décadas antes de que sus ideas pudieran ser implementadas.

Los computadores son la implemetancion electrica de la lógica de los algoritmos.

### sol lewitt

qué descubrieron?

respuestas:

- hacía instrucciones, no la obra en sí
- concepto
- sistemas de módulos

él trabajaba en un estudio de sieño y se dio cuenta que en el arte él tenía que hacer las cosas, pero se comparaba con los arquitectos, quienes hacen la planificación y luego otres ejecutaban la obra. ¿Porqué yo tengo que relaizar mi propia obra?¿Por qué no puedpo ser como una compsitora o un coreógrafo?

analizamos la obra de los cubos. La cual inspiró problemas matemáticos.

Sol lewitt, tiene muchas series, con obras enumeradas.

wall drawing 118: conjunto de instrucciones precisas.

![instrucciones de wall drawng 118](./imgs/walldrawing-118-instruction.png)

esto recuerda a un poema. La lógica de líneas es algo muy computacional. SI lo vemos es como un prompt pero separado por lineas, un prompt siendo más "vibe".

![instrucciones wall drawing 1136](./imgs/lewitt-1118-instructions.jpg): esta obra cambia, busca ser plasmada de forma óptima independiente del lugar. SImepre es distinta pq se adapta a la arquitectura.

Sol lewitt implementaba mucho en el papel, y que la ejecució fuera por humanos. Esto fue aprox en los 60's. En esa época había mucha lógica relacionada al concepto.

## post break

hablamos del LID, del server de discord, a tarea fue meterse al discord y saludar con su nombre real y su sección.

En el pasado, cuando querías ir al internet, ibas. Ahora se te cruza aunque no quieras.

En el canvas hay una tarea, deben subir el link de tu tarea de hoy.

Trabajaremos con un software que existe en el navegador. P5js es un entorno de programación y ala vez una librería de javascript. UN lenguaje de prog es texto que me permite acceder al computador por medios más similares al lenguaje natural.

En el entorno p5js es similar a las instrucciones de Sol Lweitt, pero en vez de estudiantes de arte o espectadores, lo hace el computador,

Sintaxis: es una forma de escribir. En los computadores es MUY ESTRICTO. tiene el obejtivo de corrdinarnos con el lenguaje binario. Sí podríamos escribir en binario, pero sería mucho mas complejo y locura.

Photoshop por ejemplo, también funciona de esta manera, solo es distinta la interfaz. Esto es lo que se entiende como "niveles de lenaguaje". Mientras más lejano a los 0 y 1 más de "alto nivel" se le considera. Ejemplo de alto nivel(las ias generativas en base a prompts). Un ejemplo de bajo nivel sería "BASIC" o "ASSEMBLY".

Uno de los lenguajes más famosos es C.

a través del entorno de p5 podemos emplear el pensamiento computacional. Este no es un curso de p5.

p5 es gratuito y opensource. Creado por Lauren Mcarthy.

### en p5js

Al lado izquierdo vemos el código, donde escribimos lo que queremos que pase.

Arriba tenemos el botón de play y stop.

un lenguaja de prgrmación siempre lee en orden las líneas que escribas.

realizaciones:

1. print: aprendizajes: lo que sale en la cosnola no va a  aparecer en canvas
2. orden de las líneas: se ejecutan de arriba hacia abajo
3. comentarios: libertad para escribir, el códgio se lo salta
4. guardar y nombrar: esto es solo texto guardado en un link, en tu "nube" del usuario de p5.js, no se guarda en tu pc. es muy liviano
5. compartir: link de ver y editar, lo usaremos para bitácora por hoy
6. funciones: las funciones tienen argumentos, cosas que te "pide" TODO agregar links
    1. `createCanvas(ancho, alto)`: debe estar dentro del setup. Con este creamos el tamaño del lienzo
    2. colores: RGB, 1 argumento vs 3 argumentos. 1 argumento es para escala de grises `background(0-255)`, 3 argumentos es para RGB `background(0-255,0-255,0-255)`
    3. `line();` : puntos de origen y punto de destino. `line(x1, y1, x2, y2);`
    4. `ellipse();`: formas cuyos puntos todos estan a la misma dist del centro. `ellipse(centro x,centro y,ancho,alto)`
    5. `square(centro x, centro y, tamaño lado)`
    6. `fill()`; color en RGB de relleno de figuras
    7. `noFill()`; deja sin relleno la figura
    8. `stroke()`; ajusta color de borde
    9. `strokeWeight()`; ajusta ancho de borde
    9. `noStroke()`; borde transparente
    9. algunas funciones tienen argumentos opcionales. Revisar en referencia
7. documentación "diccionario" p5js para encontrar funciones y argumentos <https://p5js.org/reference/>

## De qué se tratará la primera solemne?

Combinaremos en un afiche estático creado con p5.js, referencias visuales del constructivismo/suprematismo ruso, con frases sacadas de algún manifiesto sacado de <https://designmanifestos.org>cuña constructivismo ruso. Crear un skecth usando esto y el suprematismo como referentes.

Ejemplo: ["Golpead a los blancos con la cuña roja - El Lissitsky](https://historia-arte.com/obras/golpead-a-los-blancos-con-la-cuna-roja)

### links relevantes

- [sitio específico](https://www.composition.gallery/ES/glosario/qu-es-el-arte-de-sitio-especfico/)
- [videomapping](https://en.wikipedia.org/wiki/Projection_mapping)
- [amy goodchild](https://www.amygoodchild.com)
- [amy goodchild - sol lewitt - chatgpt](https://www.amygoodchild.com/blog/chatgpt-sol-lewitt-wall-drawings)
- [fluxus](https://es.wikipedia.org/wiki/Fluxus)
- [Vera Molnar](https://en.wikipedia.org/wiki/Vera_Molnár)arte computacional en los 60, geométrico, psiccodélico.
- [Mamfred Mohr](https://www.emohr.com): cubos , similar a SOl Lewitt
- [blog de referentes de arte computacional de los 50 y 60](https://www.amygoodchild.com/blog/computer-art-50s-and-60s)
- [arte algorítmico](https://es.wikipedia.org/wiki/Arte_algorítmico)

### Registro clase

<https://youtu.be/dqclBmR6HLc>

### Código visto en clase 

Todas las clases estarán publicadas en la colección

<https://editor.p5js.org/matilov/collections/N3cjerrON>

```javascript
function setup() {
  //Esto es una función llamada createCanvas();
  //una función usualmente tiene argumentos
  //createCanvas(tamaño-horizontal, tamaño vertical)
  createCanvas(400, 300);
}

function draw() {
  //background es una función que asigna un color de
  //fondo
  // el argumento de background da el color
  // donde 0 es negro y 255 es blanco
  // se puede colocar en el argumento un color
  //en R G B, separando cada uno por coma
  background(255,150,150);
  
  //voy a generar mi primera linea
  //función line (x origen, y origen, x destino, y destino)
  line(100,100,300,200);
  line(100,80,330,50);
  line(300,100,150,200);
  
  //para hacer una ellipse, le decimos a la función
  //ellipse(centro X, centro Y, ancho, alto);
  
  //para cambiar el color de relleno, uso fill
  //este debe ir ANTES de la figura que quiero rellenar
  //se completa con el color en escala de grises (0-255)
  //o en RGB
  fill(0,150,150);
  ellipse(51,200, 100,55);
  
  //para hacer un cuadrado
  //se usa square (centroX, centro Y, tamaño lado)
  //las variables en corchete son opciones, y en este caso
  //significan redondeo de esquinas
  //square(x, y, s, [tl], [tr], [br], [bl])
  
  //para no rellenar nada, se usa noFill();
  noFill();
  square(350, 255, 30);
  
  //para hacer un triangulo, cada vertice, se indica de pares
  //x, y de la siguiente manera
  //triangle(x1, y1, x2, y2, x3,y3);
  fill(130, 180,180);
  //el color del contorno es con stroke(r,g,b);
  stroke(190,0,0);
  //para cambiar el grosor del contorno se utiliza
  //strokeWeight(tamaño en px)
  strokeWeight(8);
  triangle(300, 80, 200, 200, 300,250);
  
}
```