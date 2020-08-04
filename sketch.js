function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);
  angleMode(DEGREES);
}

function draw() {
  background(0);  
  translate(200,200);
  rotate(-90);
  var hr = hour();
  var sc = second();
  var mn = minute();

 // fill(255);
  //noStroke();
  //text(hr + ":" + mn + ":" + sc , 10 ,200);
 
  strokeWeight(8);
  noFill();
  stroke(255,100,150);
  var secondAngle = map(sc,0, 60, 0 ,360);
  arc(0,0,300,300,0,secondAngle);

//  push();
 // rotate(secondAngle);
  //stroke(255);
  //line(0,0,100,0);
  //pop();

  stroke(150,100,255)
  var minAngle = map(mn,0 ,60, 0 ,360);
  arc(0,0,280,280,0,minAngle);

 stroke(255,255,100)
  var hourAngle = map(hr %12 ,0 ,12, -90 ,360);
  arc(0,0,260,260,0,hourAngle);


  push();
  rotate(secondAngle);
  stroke(255,100,150);
  line(0,0,100,0);
  pop();

  push();
  rotate(minAngle);
  stroke(150,100,255);
  line(0,0,75,0);
  pop();

  push();
  rotate(hourAngle);
  stroke(150,255,100);
  line(0,0,50,0);
  pop();
  stroke(255);
  point(0,0);
//text(hr + ":" + mn + ":" + sc , 20,200 );
  drawSprites();
}