# Clase 06

## Clase

Para agregar imágenes, usamos esta estructura

```
![descripcion de la imagen](./direccionImagen)

![meme nervioso](./img/nervioso.jpg)
```

![meme nervioso](./img/nervioso.jpg)

## Info Solemne 2 (22 de mayo)

### Sobre encargos

- encargo-04: Compartir enlace de repositorio github (en canvas)
- encargo-05: Comentar película en un archivo en su repositorio (archivo encargo-05.md en github). Compartir enlace en Canvas
- encargo-06: Exploración de variables y tiempo (archivo encargo-06.js en github). Compartir enlace en Canvas
- encargo-07: Agregar a proyecto de solemne-01 línea para exportar sketch. Compartir enlace de p5.js de imagen de sus repositorios.
- encargo-08: editar código Akriila (archivo encargo-08.js en github). Compartir enlace de p5.js

### Grupos o individual

Se realizará en parejas o individualmente.

### Formato de entrega

Subir [aquí](https://github.com/disenoUDP/dis09214-2026-1-seccion-5/tree/main/clases/entregas/solemne-02) archivo llamado "solemne-02.md" basado en la [plantilla](https://github.com/disenoUDP/dis09214-2026-1-seccion-5/tree/main/clases/entregas/solemne-02.md).

Producir una imagen en movimiento basada en la estética de un álbum de música chilena (referencias visuales, videoclips, letras, instrumentación, atmósfera, contexto histórico, etc.).

Al final de este documento encontrarán webs para hallar referentes de música chilena.

### Descripción del disco

1. ⁠Álbum
2. ⁠Nombre del álbum, año
3. ⁠Artista(s)
4. ⁠Tracklist
5. ⁠¿Qué aspecto del álbum te interesa desarrollar en tu código y por qué? (premisa)

### ⁠ ⁠Conclusión del proceso

- ⁠¿Cómo se compara lo que querían desarrollar con el resultado final?
- ⁠¿Lograste desarrollar los aspectos que querías? Si no, ¿cuáles?
- ⁠¿Qué aspectos emergieron?

### ⁠ Explicación del código

Selecciona 3 secciones de tu código y comenta cómo funcionan.

### ⁠Uso de IA (autorizado)

- Mencionar ⁠IA's utilizada(s)

- ⁠Qué problema querían resolver

- ⁠Qué prompt usaron

- ⁠Qué resultado les dio la IA

### ⁠Código

Deben ocurrir como mínimo 3 tipos de variación o transformación a través del tiempo:

•⁠  ⁠tamaño
•⁠  ⁠posición
•⁠  ⁠rotación
•⁠  ⁠color
•⁠  ⁠forma
•⁠  ⁠emergencia
•⁠  ⁠opacidad
•⁠  ⁠movimiento lineal o discontinuo.

- Si incluyen interacción (mouse, teclado), debe estar explícita e incluir una instrucción o invitación hacia la interacción.

### Evaluación y formato de entrega

Al igual que solemne 1, se revisarán entregas de proceso anteriores, según las tareas de canvas indicadas.

Se revisará en la clase del 22 de mayo con una interrogación oral para dar cuenta de aprendizaje a través de entendimiento de código.

### Referentes

- ⁠Sello Alerce <https://es.wikipedia.org/wiki/Alerce,_la_otra_m%C3%BAsica>

- ⁠Pueblo Nuevo <https://pueblonuevo.cl/>

- Página de música nacional ⁠<https://www.musicapopular.cl>

- Blog con música de Chile ⁠<https://discotecanacionalchile.blogspot.com>

- Libro "Casete Nacional" <https://www.libreriadelgam.cl/libro/casete-nacional_108435>

### Plantilla

[./plantilla-solemne02.md](plantilla-solemne02.md)

---

## Introducción

Hablamos del encargo para la solemne-2, se entrega el próximo viernes 22 de mayo: un sketch basado en un **disco** de música chilena.

¿Qué es un disco? Dentro de ese contexto, existen singles, EP y LP, llamados en base al tamaño del vinilo que necesitan para caber enteros.

- **Single**: una sola canción
- **EP** (extended play): aprox. 4-5 canciones
- **LP** (long play): un álbum completo

El requisito es que en la página donde lo encuentren, diga que es un álbum. **NO un EP**.

## Pseudocódigo

Un pseudocódigo es la descripción simplificada y estructurada de un programa. Ejemplo:

```
// un fondo de color verde musgo
// una elipse al medio que sea más ancho que alto
// que la elipse se mueva lentamente hacia la izquierda
// que la elipse gire 90 grados, de modo que quede más alta que ancha
// el relleno de la elipse debe cambiar de color a un lila
```

Así pueden programar sin saber de código, y los resultados que les dé la IA serán basados en su planificación y no en la base de datos de la IA.

## Cátedra

### Ciclo for

El ciclo `for` nos permite repetir una acción una cantidad determinada de veces, cambiando una de sus características (posición, color, etc.). Por ejemplo, en vez de escribir 100 veces una línea de código que coloque una elipse, puedes generar las 100 elipses con un ciclo for.

La sintaxis es la siguiente:

```javascript
for(qué, cómo va cambiando, cuándo se detiene){
    ellipse(posicion en x, posicion en y, ancho, alto);
}
```

```javascript
for(let i = 0; i < 100; i++){
    ellipse(i, 0, 200, 200);
}
```

### Arrays

Un array es un listado que contiene múltiples variables. Cuando en un código tenemos múltiples variables, podemos dejarlas dentro de un array.

La ventaja de usar `for` en conjunto a un array es que con el for puedes ir cambiando qué elementos del listado estás llamando. Por ejemplo, en un array de palabras, gracias al for puedo ir llamando a los distintos elementos a medida que pasa el tiempo.

```javascript
// defino los elementos dentro de mi array
let personajes = ["condorito", "papelucho", "mampato", "tulio", "mateo", "segurito"];

// por cada "vuelta" al loop, suma 1 a la variable
for(let i = 0; i < 10; i = i + 1){
    text(personajes[i], width/2, height/2);
}
// al inicio escribe condorito, a la siguiente vuelta escribe papelucho,
// a la siguiente vuelta escribe mampato, y así.
```

### Relevante

- [Ejemplo sin, cos](https://editor.p5js.org/clifford1one/sketches/U8Wjx86Fl)
- ![animación seno y coseno](./imgs/Sine_and_cosine_animation.gif)
- [Documentación ciclo for](https://p5js.org/reference/p5/for/)
- [Documentación arrays](https://p5js.org/reference/p5/Array/)
