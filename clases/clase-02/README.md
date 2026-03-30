# sesion-02

2026-03-27

GRABACIONES

- <https://youtu.be/j7lGxQFhupc>
- <https://youtu.be/LskLhX4_668>

SKETCH de p5.js
- <https://editor.p5js.org/matilov/sketches/_tVpLK3LN>

## inicio

Recordatorio discord: Subiremos un link de invitación al discord para que se metan. Lo usaremos para pasarnos código, conversar cosas o organizar entregas.

Revisamos algunos avances de lo que encargamos explorar la semana pasada.

el mati creó una carpeta de p5 donde va air metiendo proyectos

1. solemne-01
    - Sol Lewitt
    - Exploración primitiva(pueden mandar hasta el domingo hasta las 23:59)
    - Avance del afiche(se puede enviar durante la semana de receso)
    - Afiche Suprematista
        - aplicación de recurso aprendidos en calse
        - composición visual
        - comentarios en el código
        - cita al manifiesto
        - coherencia de los recurso con la frase propuesta

### introducción

Uno de los referentes principales del surematismo es El Lisitsky.

Conocido por sus afiches políticos.

En la carpeta sesion-01, hay un archivo de referencias del constructivismo ruso. 

#### manifiestos

Tiene que ver com abrir y compartir una forma de pensar.

Buscan darse a conocer, por lo que tienden a ser sencillos y fáciles de comprender.

- futurismo italiano
- manifiesto comunista
- suprematismo ruso
- manifiesto futurista

[desgin manifiestos](https://designmanifestos.org)

#### camelCase

los espacios, programación se usan para separar cosas, por lo que si quieres que una variable o función sea una palabra compuesta, hay convenciones de cómo hacerlo legible

- camelCaseEsCuandoLaPrimeraLetraDeCadaPalabraEsMayúscula
- kebab-es-cuando-se-reemplazan-los-espacios-por-guiones
- snake_case_es_cuando_se_reemplazan_los_espacios_por_guiones_bajos

## código

### repaso

- createCanvas
- background

### nuevo

#### color

con 1 argumento, genera una color es escala de gris.
con 3 argumentos, genera un color RGB

Además del RGB, existen otros modos de usar el color:

- RGB: red, green, blue
- CMYK: cyan, magenta, yellow, black
- HSB: hue, saturation, brightness

##### HSB[A]

Hue, Saturation , Brightness, Alpha

Tono, saturación, brillo, opacidad

la ventaja de este es que, a diferencia del RGB el tono se almacena en 1 sola variable.

##### colorMode()

con colorMode puedes definir que tipo de modo de color quieres usar.

Además, puedes agregar variables que dicten el máximo de cada variables, de esta forma:

colorMode(HSB, 360, 100, 100, 100);

de este modo, lo valores del HUE pueden ir del 0-360, el brillo de 0-100, la saturación de 0-100 y la opacidad de 0-100.

#### formas y posición

#### ¿como colocar cosas al centro?

para colocar una forma al centro de la pantalla, podemos poner su posición en la mitad de lo que mide el canvas. Esto puede llevar a complicaciones, en caso de querer ajustar posteriormente el tamaño del canvas.

##### parametrización

Si queremos colocar un elementos en el canvas, cuya posición sea relativa al tamaño del canvas

Hay variables nativas de p5js que se crean en conjunto al createCanvas. Cuando se crea el canvas, la variable *width* pasa a ser igual al tamaño de tu canvas, y la variable *height* pasa a ser igual al largo del canvas

createCanvas(*width*,*height*);

puedes usar estas variables y sus divisores para colocar elementos en una grilla imaginaria

ejemplo: circle(*width*/2, *height*/2, 100);

este código genera un círculo en el centro del canvas, de tamaño 100.

de esto se desglosa que además de dividir las variables, podemos hacer sumas o restas. Por ejemplo para ir ajustando la posición de tu figura puedes usar:

circle(200-10, 100+20, 100);

otro ejemplos útiles

- *width* *3/4
- *height* - *height*/8
- *width* * 0.2
- *height*/4 + 25

##### formas no regulares

- [beginShape();](https://p5js.org/reference/p5/beginShape/)
- [vertex();](https://p5js.org/reference/p5/vertex/)
[- endShape();](https://p5js.org/reference/p5/endShape/)

con estas funciones podemos hacer formas irregulares y complejas.

Cuando haces una figura, debes tener en cuenta que si no duplicas el punto de inicio al final, el stroke de la forma no se cerrará. Esto se puede arreglar, o duplicando el punto de inicio, o añadiendo CLOSE dentro del closeShape:

- endShape(CLOSE);

#### windowWidth, windowHeight

son variables que permite que tu canvas se ajuste automáticamente al tamaño de la pantalla donde se está corriendo

#### texto

- [text("texto", x, y);](https://p5js.org/reference/p5/text/)

el texto debe ir entre comillas

para cambiar el tamaño del texto:

- [textSize();](https://p5js.org/reference/p5/textSize/)

para cambiar la alineación del texto:

- [textAlign();](https://p5js.org/reference/p5/textAlign/)

para cambiar al tipografía:

- [textFont();](https://p5js.org/reference/p5/textFont/)

hay algunas tipografías ya cargadas en el programa, pero si lo deseas puedes cargar tus propias tipografías. Puedes usar también las palabras clave: serif, sans-serif, monospace.

para cambiar el estilo de fuente:

- [textStyle();](https://p5js.org/reference/p5/textFont/)

admite BOLD, ITALIC, y BOLDITALIC.

### post-break

#### rect

- [rect();](https://p5js.org/reference/p5/rect/)

rect(x, y, w, h, corners);

el rect predeterminadamente se genera a partir de su esquina superior izquierda, esto se puede cambiar con rectMode:

#### rectMode;

- [rectMode(CENTER);](https://p5js.org/reference/p5/rectMode/)

admite: CENTER, CORNER, RADIUS

#### rotación;

dado que la rotación en grados, funciona no responde a las mismas lógicas del canvas, se usa RADIANS.

esto se puede cambiar con angleMode

##### angleMode;

- [angleMode();](https://p5js.org/reference/p5/angleMode/)

admite RADIANS y DEGREES. Por defecto viene en RADIANS.

##### rotate();

- [rotate();](https://p5js.org/reference/p5/rotate/)

cuando usas rotar, no rotas solo los elementos en el canvas, rotas el canvas entero. Esto genera que la figura no solo se rote, sino también, se cambia su posición.

Para que podamos rotar en torno a su centro y no entorno al centro del canvas, hay que colocarlo en el origen, y luego aplicarle un translate() y un rotate()

#### translate();

con esta función puede alterar cuál es el eje de coordenadas, al igual que rotate, no estás alterando la forma en sí, si no el canvas

#### push y pop();

son funciones utilizadas para aislar líneas de código, sin que afecte a lo que está fuera de ese push pop. Al inicio de la zona que quieres aislar usar push(); y al final pop();

- [push();](https://p5js.org/reference/p5/push/)
- [pop();](https://p5js.org/reference/p5/pop/)

#### arc();

- [arc();](https://p5js.org/reference/p5/arc)

arc(x, y, w, h, start, stop, [mode])

mode admite PIE, CHORD, OPEN.

### referentes de hoy

- [Corita Kent](https://es.wikipedia.org/wiki/Corita_Kent)
- [camelCase](https://es.wikipedia.org/wiki/Camel_case)
