var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;
var bg;
var logo, logoImage;
var googleApps, googleAppsImage;
var submit, submitImage

function preload(){
  bg = loadImage("bg.jpg");
  logoImage = loadImage("logo.png");
  googleAppsImage = loadImage("GoogleApps.png");
  submitImage = loadImage("submit.png")
}


function setup(){
  canvas = createCanvas(1340,685);
  database = firebase.database();
  
  

  quiz = new Quiz();
  quiz.getState();
  quiz.start();

  
  logo = createSprite(1250, 50, 20, 20);
  logo.addImage(logoImage);
  logo.scale = 0.4
  logo.visible = true;

  googleApps = createSprite(265, 300, 20, 20);
  googleApps.addImage(googleAppsImage);
  googleApps.scale = 0.4
  googleApps.visible = true;

  submit = createSprite(725, 322, 20, 20);
  submit.addImage(submitImage);
  submit.visible = false;
}


function draw(){
  background(bg);
  if(contestantCount ===  10){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }

  drawSprites();
}
