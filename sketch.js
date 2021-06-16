var gameState=0;
var playerCount=0;
var database;
var form,player,game;
var allPlayers;
var players=[];
var bg,player1,player2,player3,player4,rules;

function preload(){
    bg=loadImage("images/bg.jpg");
    rules=loadImage("images/rules.jpg");

}

function setup(){
    createCanvas(displayWidth-20,displayHeight-120);
    database=firebase.database();
    
    game=new Game();
    game.getState();
    game.start();
}

function draw(){
    if(playerCount==4){
        game.updateState(1);
    }

    if(gameState==1){
        clear();
        game.play();
    }
    else if(gameState===2){
        game.end();
    }
}