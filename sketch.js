
// h 0-360, s 0-100, b 0-100
let mic;

// let r, g, b;
// let volBig;
let clicked = false;

function setup() {

  createCanvas(windowWidth,windowHeight);
  colorMode(HSB);

  mic = new p5.AudioIn();
  mic.start();

}


function draw() {

  noStroke();
  fill(0,0,100);
  rect(0,0,width,height);

  if (clicked){

    let vol = mic.getLevel();
    let volMap = map(vol,0,0.5,0,360);
    let volMapg = map(vol,0,0.25,0,360);
    let ellipseHeight = map(vol, 0, 1, 0.001,height)
    // let volMapb = map(vol,0,1,200,255);


    fill(volMap, 100, 80);
    ellipse(width/2, height/2 ,width, ellipseHeight); //THIS WORKS WELL - Size of mouth
    print(vol);
  }


}


function mousePressed(){

  getAudioContext().resume()

  clicked = true;
}
