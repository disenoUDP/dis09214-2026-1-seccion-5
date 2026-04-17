//vamos a crear una variable
//para la posición de la pelotita
// declaramos la variable
// voy a crear una cajita llamada posx que vale 400
// y una cajita llamda posy que vale 150
let posx = 400;
let posy = 150;

//para cambiar el sentido creamos una variable de sentido
// let es el tipo de variable, que quiere decir
//tipo de cajita
// solo se usa al crear la variable
let sentidox = 1;
let sentidoy = 1;

// diametro de pelotita
let diametro = 100;

function setup() {
  createCanvas(800, 600);
  
  // puedo alterar la velocidad de reproducción
  //que por defecto es 60
  frameRate(60);
}

function draw() {
  background(220);
  
  // con frameCount accedo a la cantidad de frames que han ocurrido desde que se ejecutó el código
  
  // texto de referencia
  textAlign(CENTER, CENTER);
  textSize(40);
  // con \n creo una nueva línea en el mismo comando
  text("desde que se ejecutó" + "\n han pasado" + "\n " + frameCount + "\n frames", width/2, height/2);
  
  //vamos a usar esta información para alterar una pelotita
  
  //vamos a hacer nuestra primera iteración
  //en este punto se actualiza posx 
  posx = posx + 10 * sentidox;
  posy = posy + 10 * sentidoy;
  
  
  //vamos a plantear una condición límite
  // por medio de if (si)
  // se declara 
  //if (condicion) { lo que sea que pase }
  
  //rebote en x
  if (posx > width - diametro/2){ //si se cumple esta condición
    //ademas cambie el sentido
    sentidox = -1;
    //diametro = diametro + 2;
  }
  
  if (posx < 0 + diametro / 2){ //si se cumple esta condición
    //posx = 400; //pasa esto
    //ademas cambie el sentido
    sentidox = 1;
    //diametro = diametro + 10;
  }
  
  //rebote en y
  if (posy > height - diametro/2){ //si se cumple esta condición
    //ademas cambie el sentido
    sentidoy = -1;
    //diametro = diametro + 2;
  }
  
  if (posy < 0 + diametro / 2){ //si se cumple esta condición
    //posy = 400; //pasa esto
    //ademas cambie el sentido
    sentidoy = 1;
    //diametro = diametro + 10;
  }
  //diametro = frameCount;
  
  push();
  //ajustamos la posición de la ellipse a posx y posy
    translate(posx, posy);
    noFill();
    ellipse(0,0,diametro,diametro);
  pop();
  
}









