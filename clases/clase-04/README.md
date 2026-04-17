# sesion-04

2026-04-17

sketches de hoy:

- [parte 1](https://editor.p5js.org/matilov/sketches/wrRadqqhi)
- [parte 2](https://editor.p5js.org/matilov/sketches/ErQY-wwZl)
- [parte 3 - reboot](https://editor.p5js.org/matilov/sketches/lmyFMVlxo)

videos de clase

- [parte 1](https://youtu.be/2RVkz5oEihI)
- [parte 2]()

## introducción

comenzamos conversando sobre el encargo de ver una de las películas de la lista

- código enigma
- matrix eso si la primera
- pi: fe en el caos
- una mente brillante
- summer wars
- her
- yo, robot
- primer
- 2 cap de black mirror
- ghost in the shell

extraído de:

- <https://github.com/pansitoaceituna/bitacora-de-pensamiento-computacional/blob/main/Clases/clase-03.md>

### desarrollo de la clase

hoy hablaremos de como dotar de movimiento a tu código, para ello, necesitamos entender como funciona el tiempo dentro de p5.js

#### setup()

- <https://p5js.org/reference/p5/setup/>

se ejecuta solo 1 vez en el código. UNa vez que ejecutó todo lo que hay dentro, se pasa al paso siguiente:

#### draw()

- <https://p5js.org/reference/p5/draw/>

se ejecuta línea por línea, y una vez que se ejecutó por completo, vuelve al inicio y comienza de nuevo.

#### tiempo

existen funciones que te indica el tiempo transcurrido a través de los frames mostrados, y funciones que te permiten controlar qué tan rápido pasan los frames.

##### frameCount()

te indica cuántos frames han existido desde que se inició el código.

##### frameRate()

permite modificar cuántos frames suceden por segundo.

#### variables

variables son palabras a las que le asignas un dato, ejemplo un numero.

lo poderoso de las variables, es que no son estáticas, una variable puede ir variando su valor a lo largo del código.

#### condicionales

nos permite que nuestro código sea responsivo a distintos estímulos.

Por ejemplo, si pasan más de 10 segundos, pon una alarma

la sintaxis para las variables es:

if(){}

if(la-condicion-que-tiene-que-cumplirse){qué-pasa-cuando-se-cumple-la-condicion}

ejemplo:

if(segundosQueHanPasado > 10){emitirAlarma}

#### variables nativas

- mouseX: esta variable siempre es equivalente a la posición en X de tu mouse.
<https://p5js.org/reference/p5/mouseX/>

- mouseY: esta variable siempre es equivalente a la posición en X de tu mouse.
<https://p5js.org/reference/p5/mouseY/>

- random(): genera valores aleatorios dentro de un rango
<https://p5js.org/reference/p5/random/>

## sintaxis

- **/n**, es un "enter" para el código, te permite hacer un salto de línea.

## relevantes

- [CUMASYSTEM](https://cumasystem.xyz)
- [Neil Harbisson](https://en.wikipedia.org/wiki/Neil_Harbisson)
- [teorema de pitágoras](https://es.wikipedia.org/wiki/Teorema_de_Pitágoras)

## encargo

hacer que figuras primitivas cambien alguna característica en base a variables nativas:

- frameCount()
- mouseX
- mouseY
- random()
- variable = variable + 1

qué variables se pueden cambiar:

- ancho del contorno
- color de relleno
- color de contorno
- ancho
- alto
- posición
