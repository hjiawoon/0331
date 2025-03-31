let img01;
let imgad;
let imgproduct;
let imgbar;
let imgicon;
let imggreen;

let state=0;

function preload(){
  img01=loadImage('01.png');
  imgad=loadImage('02.png');
  imgproduct=loadImage('03.png');
  imgbar=loadImage('04.png');
  imgicon=loadImage('05.png');
  imggreen=loadImage('06.png');
}

function setup() {
  createCanvas(393, 852);
}

function draw() {
  background(255);
  if(state==0){
    image(img01,0,0,393,128);
    image(imgad,0,128,393,284);
    image(imgproduct,0,402,393,402);
    image(imgbar,0,764,393,88);
    image(imgicon,320,688,60,60);
  }else if(state==1){
    image(img01,0,0,393,128);
    image(imgad,0,128,393,284);
    image(imgproduct,0,402,393,402);
    image(imggreen,0,612,393,152);
    image(imgbar,0,764,393,88);
    image(imgicon,320,688,60,60);
  }
}

function mouseClicked(){
  if(mouseX>=320&&mouseX<=380){
    if(mouseY>=688&&mouseY<=748){
      if(state==0){
        state=1;
      }else if(state==1){
        state=0;
      }
    }
  }
}