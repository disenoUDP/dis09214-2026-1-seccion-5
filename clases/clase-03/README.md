# sesion-03

2026-04-10

hoy clase chill

partimos viendo algunas entregas

## números binarios

para llamar un color en p5, usamos valores del 0-255.

Los colores son percepciones del reflejo de la luz procesados por nuestro cerebro.

### análogo y digital

las fotos que vemos en un pc o celular, está formada por pixeles. Es discreto

las imágenes analógicas no tiene pixeles. Es continuo.

Continuo hace referencia a una transición paulatina entre 2 partes o estados. Discreto es una transición repentina, como los pixeles.

En la vida real, los colores son continuos. A diferencia de los colores en un pc, que son pixeles, osea son discretos.

### contando aprendo a programar

de la manera en que entendemos los números, conocemos 10 dígitos distintos.

que pasa si queremos un onceavo miembro? usamos la combinación de los dígitos que ya conocemos.

cuando se acaban mis nueve dígitos, ocupo el 2do dígitos original(el 1) lo pongo como decena, y se resetea la cuenta.

00 - 01 - 02 - 03 - 04 - 05 - 06 - 07 - 08 - 09

luego ocupamos el 1 y hacemos la misma cuenta reemplazando los 0's por 1's

entonces con solo 10 dígitos, podemos crear infinitos números.

Esto no es parte de las leyes del universo, es algo creado, se decidió que fueran 10 dígitos, porque tenemos 10 dedos.

a Esto se llama el **sistema numérico en base a 10**

el sistema que utilizamos para la hora, es un **sistema numérico en base a 12**

#### binarizar

si tengo un espacio vacío, en el que puedo meter un 1 o 0, tengo 2 posibilidades

si tengo 2 espacios vacíos, tengo 4 posibilidades: 00 - 01 - 10 - 11

si tengo 3 espacios, tengo 8: 000 - 001 - 010 - 011 - 100 - 101 - 110 - 111

de esta manera, comienzo con varios 0 seguidos de un 1. Y se lo va a pasando al de su izquierda.

#### bits

a aquel espacio vació que puede 0 o 1, se le llama bit.

- Si tengo solo 1 bit, tengo 2 posibilidades

- si tengo 2 bits, tengo 4 posibilidades

- si tengo 3 bits, tengo 8 posibilidades

- si tengo 4 bits, tengo 16 posibilidades

- **si tengo 8 bits, tengo 256 posibilidades**

El hecho de que los colores sean de 0-255, quieres decir que para cada color (red, green, blue) ocupa 8bits. Es decir, para la suma de los 3, ocupa 24 bits.

dato: al conjunto de 8 bits, se le llama 1 byte.

Todos los dispositivos digitales trabajan en base a lenguaje binario. Por eso las memorias siempre son de 8, 16, 32, 64 gigabyte.

con 24 bits tenemos 16.777.216 de posibilidades. El ojo humano distingue aprox 10millones de colores.

## post-break

creamos usuarios de github, nuestro primer archivo, y a partir de ahora las bitácoras se entregan por ahí

al final tuvimos una pequeña sección de ejemplos de sketches y mostrarse al mundo.

## relevante

- [fenomenología](https://es.wikipedia.org/wiki/Fenomenología_(filosofía))
- [mapa de bits](https://es.wikipedia.org/wiki/Imagen_de_mapa_de_bits)
