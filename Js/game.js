class Game{
    constructor(){

    }
    getState(){
        database.ref("gameState").on("value",function (data){
            gameState=data.val();
        })
    }

    updateState(state){
        database.ref("/").update({
            gameState:state
        })
    }

    async start(){
        if(gameState==0){
            background(bg);

            player=new Player();
            var playerCountref=await database.ref('playerCount').once("value");
            if(playerCountref.exists()){
                playerCount=playerCountref.val();
                player.getCount();
            }

            form=new Form();
            form.display();
        }

        player1=createSprite(200,100);
        player1.addImage(player1IMG);
        player1.scale=0.3;
        player2=createSprite(200,200);
        player2.addImage(player2IMG);
        player2.scale=0.3;
        player3=createSprite(200,300);
        player3.addImage(player3IMG);
        player3.scale=0.3;
        player4=createSprite(200,400);
        player4.addImage(player4IMG);
        player4.scale=0.3;

        players=[player1,player2,player3,player4];
    }

    play(){

        form.hide();
        Player.getPlayerinfo();
        
        if(allPlayers!==undefined){
            background(bg2)
            image(bg2,0,-height*5,width*10,height);

           /* var index =0;
            index = index+1;
            if(index === player.index){
                text(allPlayers[plr].name,x-25,y+25);
              }*/
        }

        drawSprites();

                    fill("white");
                    textSize(20);
                    text("Score : ",750,50);
            
            if(frameCount % 100 === 0) {
                var obstacle = createSprite(1000,random(100,400),10,40);
                obstacle.velocityX = -8;
                obstacle.scale=0.2;
    
                var rand = Math.round(random(1,3));
                switch(rand) {
                  case 1: obstacle.addImage(obstacleImg1);
                          break;
                  case 2: obstacle.addImage(obstacleImg2);
                          break;
                  case 3: obstacle.addImage(obstacleImg3);
                          break;
                  default: break;
                }

                if(frameCount % 150 === 0) {
                    var coin = createSprite(1000,random(100,400),10,40);
                    coin.velocityX = -6;
                    coin.scale=0.2;
                    coin.addImage(coinImg)
                    }
           
                if(player.isTouching(coin)){
                    
                    players.score=+1;
                  }
                  
      
    }
}
      
 
    end(){
    if(players.isTouching(obstacle)){
        gameState===2
    }

        if(gameState===2){
        stroke("black");
        strokeWeight(5);
        fill(255,178,140);
        rectMode(CENTER);
        rect(width/2,players[player.index-1].y,300,300);
        fill("black");
        textSize(30);
        strokeWeight(2);
        text("Game-Over",width/2-80,players[player.index-1].y-50);
        text(player.name + ': '+ player.score,width/2-80,players[player.index-1].y+20);
        }

    }
}
