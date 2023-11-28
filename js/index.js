console.log("The js and html are linked.");

// need to use querySelector("canvas") to select
const anime = document.querySelector("canvas");
const context = anime.getContext('2d');


// context.fillStyle = "green";
// // Add a rectangle at (10, 10) with size 100x100 pixels
// context.fillRect(10, 10, 100, 100);


  
// function setup() {
//     createCanvas(400, 400);
//   }
  

  function draw() {

  //sky
  background(100, 200, 250);
  noStroke();
  //clouds
  fill(255, 255, 255);
  var c1X=220; //cloud right, goes right
  // var c1Y=70
  var c2X=100; //cloud left, goes left
  // var c2Y=150
  
  //cloud right
  ellipse(c1X,70,105,120);
  ellipse(c1X-40,70,80,60);
  ellipse(c1X+40,90,70,70);
  //cloud left
  ellipse(c2X,150,70,70);
  ellipse(c2X+20,145,90,40);
  ellipse(c2X-10,160,80,40);
  
  //clouds drift
  var speed=0;
  if(c1X > 400){
   speed = -3;
  }
  if(c1X < 0){
   speed = 3;
  }
  c1X = c1X + speed
    
    
  //asphalt
  fill(80, 80, 80);
  rect(0,280,400,120);
  
    
  //building orange
  fill(240,100,20);
  rect(280,80,95,205);
  //windows
  for(var wr=290; wr<370; wr+=8){
      for(var wwr=100; wwr<265; wwr+=10){
          fill(240,240,220);
          rect(wr,wwr,4,4);
      }}
    
  //building blue
  fill(10,120,150);
  rect(205,100,90,195);
  //windows
  for(var wr2=215; wr2<290 ;wr2+=10){
      for(var wwr2=125; wwr2<260; wwr2+=12){
          fill(200,250,250);
          ellipse(wr2, wwr2, 6, 6);
      }}
    
  }; //function draw
    

  