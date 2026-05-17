# Plantilla para solemne-02

- [Link a sketch de P5.js](https://editor.p5js.org/clifford1one/sketches/X0eY8py00)

## Integrantes del grupo

- (Santiago Gaete) [santiagoClifford](https://github.com/santiagoClifford)

## Descripción del disco

![Portada de álbum Ser Hümano!!](./img/ser-humano-tiro-de-gracia.jpg)

- (Ser humano!!)
- 1997
- Tiro de Gracia(Juan Sativo, Lenwa Dura, Zaturno)
- Tracklist:

```txt
    1. Ser Hümano
    2. Ser Hümano N°2
    3. El Juego Verdadero
    4. Clavo Y Martilleo
    5. Sombras Chineskas
    6. Dos Corazones
    7. Interpolación(Pacto Con las Ánimas)
    8. Corsario Universal
    9. Viaje Sin Rumbo
    10. Chupacabras
    11. Nuestra Fiesta (Okupa, Segura Y No Molesta)
    12. Melaza
    13. Opyo
    14. Bebedor
    15. Leyenda Negra
    16. Combo 10
```

- Aspecto del álbum a desarrollar (premisa)

> El proyecto busca representar la estética y actitud del álbum *Ser Humano!!* de Tiro de Gracia, inspirándose tanto en la personalidad de sus intérpretes como en la estética de las canciones y las instrumentales. Al escuchar el álbum imaginé una persona que avanza rápido y con seguridad, esquivando las dificultades de manera “smooth”, idea representada mediante una elipse que se mueve fluidamente entre obstáculos en constante desplazamiento. La paleta de colores está inspirada por la portada del disco y los tonos cálidos y opacos presentes en videos y fotografías antes de la llegada de las cámaras digitales. Además, incorporé una mesa DJ con vinilos girando como símbolo de la cultura hip hop clásica. En el centro de esta mesa aparece una figura irregular de múltiples puntas que cambia constantemente su forma, representando las variaciones abruptas de ritmo, tono y energía presentes en la forma de rapear de Juan Sativo, Lenwa Dura y Zaturno.

## Conclusión del proceso

- Distancia entre premisa y resultado

> El resultado final logró representar bastante bien la estética inspirada en el álbum. La combinación entre movimiento, grilla y colores ayudó a generar una atmósfera urbana y retro que recuerda a visuales videoclips de la época.
>
> Integré elementos de la cultura hiphop, y variaciones que resuenan con las personalidades y estéticas de los integrantes del grupo.

- Cosas no conseguidas

> Me hubiera gustado que el movimiento de la esfera fuera basada en ángulos rectos, esquivando paredes rectangulares en vez de elípticas.

- Descubrimientos al trabajar

> Aprendí que la función sin(); me permite mover la elipse de una manera mucho más sencilla que como planeaba hacerlo antes. Además el efecto de aceleración, aporta a la estética de seguridad e *impreocupación*.

## Explicación del código (3 aspectos)

### Bloque de código 1

```js
let posiciony =
  height / 2 +
  sin(angulo + HALF_PI) * 80;
```

Este bloque genera el movimiento vertical de las elipses del medio. Gracias a la funcion sin();, el movimiento se siente fluido.

### Bloque de código 2

```js
beginShape();

for (let i = 0; i < 10; i++) {

  let distancia = random(8, 25);
}
```

Este bloque crea una estrella abstracta dentro de la pantalla central. Sus puntas cambian aleatoriamente su distancia al centro en cada frame.

### Bloque de código 3

```js

function dibujargrilla() {

  stroke(colorgrilla);
  strokeWeight(1);

  for (let i = 0; i < width; i += 30) {
    line(i, 0, i, height);
  }

  for (let j = 0; j < height; j += 30) {
    line(0, j, width, j);
  }

}
```

Esta función, genera una grilla de fondo en el sketch, usando ciclos for. Un ciclo for para las lineas verticales, y otro para las horizontales. Esta función aparece al inicio del draw, lo que permite que se vea solo en el fondo más lejano, y es tapado por los obstáculos, lo que le da una sensación de profundidad.

### Declaración sobre el uso de IA

- IA utilizada(s) y tipo de licencia (pago, gratuita)

> Gemini - Versión gratuita

- Problema a resolver a través de la IA

> Hacer que la oscilación de la elipse del centro, calce con el camino que se iba armando con las "montañas" que pasan de izquierda a derecha.

- Prompts utilizados

> *pegar mi código de p5* Tengo este código en p5.js, donde unas elipses grandes pasan de derecha a izquierda formando un camino. Necesito que la elipse de al medio que oscila, esté sincronizada con los espacios que dejan las formas, para que parezca que esquiva los obstáculos de forma smooth.

> Ejemplo Prompt 2

> Ejemplo Prompt 3

- Secciones de código entregadas por la IA

```js
// movimiento sincronizado de la pelota

let angulo =
(frameCount * velocidad) *
(TWO_PI / distancia);

let posiciony =
height / 2 +
sin(angulo + HALF_PI) * 80;

fill(255);

circle(posicionx, posiciony, 20);
```

## Bibliografía

- <https://p5js.org/reference/p5/for/>
- <https://open.spotify.com/intl-es/album/3ncIAbJGUE2sQIu0J1TuE0>
- <https://es.wikipedia.org/wiki/Ser_humano!!>
- <https://www.600discoslatam.com/discos/chile/ser-humano-tiro-de-gracia/>
- <https://gemini.google.com>
- <https://p5js.org/reference/p5/color/>
