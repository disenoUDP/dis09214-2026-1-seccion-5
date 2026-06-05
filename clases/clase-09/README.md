# sesion-09

2026-06-05

Matías preparó un sketch de ejemplo de cómo hacer una máquina de estados.

- [Ejemplo máquina de estados](https://editor.p5js.org/matilov/sketches/rMnYDHPPY)

```mermaid
stateDiagram-v2
    [*] --> ROJO

    ROJO --> VERDE : mousePressed (click)
    VERDE --> AZUL : mouseWheel (scroll ↓)
    AZUL --> ROJO : keyPressed (tecla R)

    ROJO : Estado 0 · ROJO
    VERDE : Estado 1 · VERDE
    AZUL : Estado 2 · AZUL
```

## relevante

- <https://mariavaldebenitog-byte.github.io/micxvg/>

- [keyCode](https://p5js.org/reference/p5/keyCode/)

- [sketch clase de hoy](https://editor.p5js.org/matilov/sketches/S1OTCHPyJ)
