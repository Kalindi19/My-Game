class Form{
    constructor(){
        this.title=createElement('h1');
        this.input=createInput("Name");
        this.button=createButton("Play");
        this.greeting=createElement('h2');
        this.reset=createButton("Reset");
    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    } 

    display(){
      
        this.title.html("Treasure Hunt Game!");
        this.title.position(width/2-50,0);
        
        this.input.position(width/2-40,height/2-80);
        
        this.button.position(width/2+30,height/2);
        this.button.mousePressed(
             ()=> {
                this.input.hide();
                this.button.hide();

                 player.name=this.input.value();
                playerCount+=1;
                player.index=playerCount;

                player.update();
                player.updateCount(playerCount);

                imageMode(CENTER);
                image(rules,width/2,height/2,width-500,height-100)

                this.greeting.html(" Hello "+player.name + " Welcome!");
                this.greeting.position(width/2-70,height/2);
            
            }
        )

        this.reset.position(width-100,20);
        this.reset.mousePressed(
            ()=> {
                game.updateState(0);
                player.updateCount(0);
                Player.updateCarsAtEnd(0);
            }
        )
    }
}