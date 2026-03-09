# Apuntes del profesor para el curso

## Trabajo con tipografías

```js
// fuente: 
// https://www.w3schools.com/cssref/css_websafe_fonts.php

// tipografías genéricas css
let serif;
let sansSerif;
let monospace;

// tipografías web-safe
let Arial;
let Verdana;
let Tahoma;
let TrebuchetMS;
let TimesNewRoman;
let Georgia;
let Garamond;
let CourierNew;
let BrushScriptMT;

let fontSize = 32;


function preload() {
serif = 'serif';
sansSerif = 'sans-serif';
monospace = 'monospace';

Arial = 'Arial';
Verdana = 'Verdana';
Tahoma = 'Tahoma';
TrebuchetMS = 'Trebuchet MS';
TimesNewRoman = 'Times New Roman';
Georgia = 'Georgia';
Garamond = 'Garamond';
CourierNew = 'Courier New';
BrushScriptMT = 'Brush Script MT';
}


function setup() {
  createCanvas(650, 600);
}

function draw() {
  background(220);

  textSize(15);
  text("Fuentes por defecto", 50, 30);

   textSize(15);
  text("Básicas de CSS", 50, 50);

  textSize(15);
  text("Web safe", 300, 50);

  // Fuentes genéricas CSS

  textFont(serif);
  textSize(fontSize);
  text('Serif', 50, 100);

  textFont(sansSerif);
  textSize(fontSize);
  text('Sans Serif', 50, 150);

  textFont(monospace);
  textSize(fontSize);
  text('Monospace', 50, 200);

  // Fuentes web-safe

  textFont(Arial);
  textSize(fontSize);
  text('Abc Arial', 300, 100);

  textFont(Verdana);
  textSize(fontSize);
  text('Abc Verdana', 300, 150);

  textFont(Tahoma);
  textSize(fontSize);
  text('Abc Tahoma', 300, 200);

  textFont(TrebuchetMS);
  textSize(fontSize);
  text('Abc Trebuchet MS', 300, 250);

  textFont(TimesNewRoman);
  textSize(fontSize);
  text('Abc Times New Roman', 300, 300);

  textFont(Georgia);
  textSize(fontSize);
  text('Abc Georgia', 300, 350);

  textFont(Garamond);
  textSize(fontSize);
  text('Abc Garamond', 300, 400);

  textFont(CourierNew);
  textSize(fontSize);
  text('Abc Courier New', 300, 450);

  textFont(BrushScriptMT);
  textSize(fontSize);
  text('Abc Brush Script MT', 300, 500);

  noLoop();

}

```