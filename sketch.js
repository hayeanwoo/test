/*주소 : https://editor.p5js.org/HA/sketches/LRj8j00cw   */

let plag= 0 ;
let plag1 = 0 ;
function setup() {
  
 // rect(0,0, 500, 340);
  bt = createButton('week1');
  bt.mousePressed(show1);
  bt.position(50, 280);
   
  bt1 = createButton('week2');
  bt1.mousePressed(show2);
  bt1.position(50, 330);
   
  bt2 = createButton('week3');
  bt2.mousePressed(show3);
  bt2.position(50, 380);
   
  bt3 = createButton('week4');
  bt3.mousePressed(show4);
  bt3.position(50, 430);
   
  bt4 = createButton('week5');
  bt4.mousePressed(show5);
  bt4.position(50, 480);
   
  bt5 = createButton('ect');
  bt5.mousePressed(show_);
  bt5.position(50, 530);
}


function show1(){
 img_b = loadImage("20190318180819.png");
  img_b.size(430,100);
  img_b.position( 150, 250) ;
  img_b.size(300, 300);
  
}
function show2(){
  if ( plag ===0 ){
  img_b = loadImage("3주차 과제_ 결과1.png" );
  img_b.size(430,100);
  img_b.position( 150, 250) ;
  img_b.size(300, 300);
  plag = 1;
  }
  else {
  img_a = loadImage("3주차 과제_결과2.png");
  img_a.size(430,100);
  img_a.position( 150, 250) ;
  img_a.size(300, 300);
  plag = 0 ;
  }
}
function show3(){
  img_b = loadImage("4주차 과제 시도 2 (용그림).png");
  img_b.size(430,100);
  img_b.position( 150, 250) ;
  img_b.size(300, 300);
  
}
function show4(){
 img_b = loadImage("5주차 과제.png");
  img_b.size(430,100);
  img_b.position( 150, 250) ;
  img_b.size(300, 300);
  
}
function show5(){
 img_b = loadImage("6주차 실습_특강.gif");
  img_b.size(430,100);
  img_b.position( 150, 250) ;
  img_b.size(300, 300);
  
}


function show_(){
  img_b = createImg("https://postfiles.pstatic.net/MjAxOTA0MjVfNTEg/MDAxNTU2MjA0Mzk3MTkz.XkiFg8wHn7z3VSLHveyBngB3BTYl_1Xel3U0rYlv3SMg.kLQZL7q0WBfiqwX71JAVGzPVnw8TjvJlRRA1VPShup8g.PNG.hiu2332/20190425235914.png?type=w966" );
  img_b.size(430,100);
  img_b.position( 150, 250) ;
  img_b.size(300, 300);

canvas_ = createCanvas(300, 300);
 canvas_.position(150, 250);


frameRate(5);

 //배경- 바다 (깊은곳!)


  fill (2, 119, 139);

  stroke(2, 119, 139);

  rect (0, height/5*0, width, height/5);

  

  stroke(20, 137, 157);

  fill (20, 137, 157);

  rect (0, height/5*1, width, height/5);

  

  stroke(38, 155, 175);

  fill (38, 155, 175);

  rect (0, height/5*2, width, height/5);

  

  stroke(56, 173, 196);

  fill (56, 173, 193);

  rect (0, height/5*3, width, height/5);

  

    

  stroke(56, 173, 196);

  fill (72, 202, 225);

  rect (0, height/5*4, width, height/5);

  

  //==================== 얼굴

  stroke(255, 222, 169);

  fill (255, 222, 169);

  ellipse( width/2, height/2-height/5, 58,65);

  circle (width/2,height/2-height/5-10,30);

  

  // 눈썹

  strokeWeight(1.5);

  stroke(152, 0, 0);

  noFill();

  arc(  width/2-13-2, height/2-height/5-3, 20,20, PI + QUARTER_PI, 0-QUARTER_PI);

  //line (width/2-13-5, height/2-height/5-10,width/2-8, height/2-height/5-10);

  

   strokeWeight(1.5);

   stroke(152, 0, 0);

   noFill();

   arc(  width/2+13+1, height/2-height/5-3, 20,20, PI + QUARTER_PI, 0-QUARTER_PI);

 

  //line (width/2+8, height/2-height/5-10,width/2+13+5, height/2-height/5-10);

  

  

  strokeWeight(1);

  // 흰자 

    stroke(255, 255, 255);

    fill (255, 255, 255);

    arc(width/2-13, height/2-height/5, 15,13, HALF_PI + QUARTER_PI, QUARTER_PI, CHORD);

 // ellipse( width/2-13, height/2-height/5, 15,13);

 

  stroke(255, 255, 255);

  fill (255, 255, 255);

  arc(width/2+13, height/2-height/5, 15,13, HALF_PI + QUARTER_PI, QUARTER_PI, CHORD);

//  ellipse( width/2+13, height/2-height/5, 15,13);

  

  //눈동자

  fill(170,153,0);

  arc(width/2-13, height/2-height/5, 10,12, HALF_PI + QUARTER_PI, QUARTER_PI, CHORD);

  fill(170,153,0);

  arc(width/2+13, height/2-height/5, 10,12, HALF_PI + QUARTER_PI, QUARTER_PI, CHORD);

 

  //코

   fill(255, 196, 158);

  stroke(255, 196, 158);

   triangle(width/2, height/2-height/5-2+8, width/2-1-2+1.5, height/2-height/5+1+8,width/2+1+2-1.5, height/2-height/5+1+8);

    //입

  stroke (204, 61, 61);

  noFill();

  arc(width/2-4, height/2-height/5+14, 10,12, QUARTER_PI, HALF_PI + QUARTER_PI);

  arc(width/2+5, height/2-height/5+14, 10,12, QUARTER_PI, HALF_PI + QUARTER_PI);

  //볼

  stroke (255, 167, 167);

  fill(255, 167, 167);

   arc(width/2-21, height/2-height/5+21, 10,12, PI+QUARTER_PI, QUARTER_PI,CHORD);

    arc(width/2+22, height/2-height/5+20, 10,12, HALF_PI+QUARTER_PI, 0-QUARTER_PI,CHORD);

    plag1 = 1 ;
}

 function draw() {

  let tx, ty;

  let l = 10 ; // 마름모 길이

  let a,b,c;

  

  if (mouseIsPressed &&plag1 == 1){   // 인어  몸통_비 표현!!!

    tx = mouseX;

    ty = mouseY; 

 

    if (mouseY >= height/5*2 ){

    a = random(50, 200);

    b = random(50, 200);

    c = random(50, 500);

    

    fill( a, b, c, 80);

    stroke(a, b, c);

    quad (tx, ty-l-5, tx+l, ty, tx, ty+l+5, tx-l,ty);

    }


   // fill(random(50, 200), random(50, 200), random(50, 200));

  //triangle(tx-10, ty-10, tx+10, ty-10, tx, ty+14);

  

    else {  // 인어 머리 표현!!!

     strokeWeight(2);

    stroke(170, 18, 18);

    line (pmouseX, pmouseY, mouseX, mouseY);

    }
  }
}
