let t = 0; //variable para controlar la frecuencia horizontal del ruido
// variable de tiempo del noise

function setup() {
  createCanvas(500, 500);
  background(255);
}

function draw() {
  background(0, 5); //para "desvanecer" el fondo con una baja opacidad, lo que crea un efecto de trazo persistente

  let x = map(noise(t), 1, 0, 0, width);
  let y = map(noise(t + 5), 1, 0, 0, height); //modificando la entrada que se utiliza para calcular el valor del ruido de Perlin en un momento dado. La función

  let tmn = map(noise(t), 1, 0, 0, 100); //La función noise(¿) genera un valor de ruido Perlin en función de la variable xoff, el varlor del perlin se trnaforma gracias la multiplicacion en 100.
  let tmnI = map(noise(t + 10), 1, 0, 0, 50); // Tamaño de la pelota interior,  la variable t se incrementa en cada fotograma con la línea, A medida que t aumenta, la entrada en la función noise() cambia. Como resultado, el valor de ruido generado también cambia, creando un efecto de animación en constante cambio.

  let r = map(noise(t + 10), 1, 0, 0, 255); //modifica la entrada de la función, lo que a su vez afecta la suavidad y la variación del ruido de Perlin. Esto es lo que permite que los elementos (en este caso, las elipses) se muevan y cambien de color de manera aparentemente aleatoria
  let g = map(noise(t + 15), 1, 0, 0, 255);
  let b = map(noise(t + 20), 1, 0, 0, 255);

  push(); // Guardar la configuración de transformación actual
  translate(x, y); // Mover el origen de coordenadas al centro de la figura

  if (y < height / 2) {
    rotate(radians(frameCount)); // Rotar el círculo
    noFill();
    stroke(r, g, b);
    strokeWeight(5);
    ellipse(0, 0, tmn, tmn);
  } else if (y < (2 * height) / 3) {
    rotate(radians(frameCount)); // Rotar el cuadrado
    noFill();
    stroke(r, g, b);
    strokeWeight(5);
    rectMode(CENTER);
    rect(0, 0, tmn, tmn);
  } else {
    rotate(radians(frameCount)); // Rotar el triángulo
    noFill();
    stroke(r, g, b);
    strokeWeight(5);
    triangle(-tmn / 2, tmn / 2, 0, -tmn / 2, tmn / 2, tmn / 2);
  }

  pop(); // Restaurar la configuración de transformación anterior

  fill(r, g, g); // Relleno para la pelota interior
  noStroke();
  ellipse(x, y, tmnI, tmnI);

  t = t + 0.01;
}
