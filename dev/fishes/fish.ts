/// <reference path="../gameObject.ts" />

class Fish extends GameObject{

    protected behavior: Behavior;
    public fishSpeed: number = 5;
    public directionRight: Boolean;
    protected coin:Coin;

    constructor(){
        super();
        
        this.x = Math.floor(Math.random() * 600) + 1 ;
        this.y = Math.floor(Math.random() * 500) + 1 ; //500 max
        this.directionRight = true;
        setInterval(() =>{
            this.coin = new Coin(this);
        }, 10000);
    }


    public draw():void {
        this.behavior.draw();
        if(this.coin){
            this.coin.draw();
        }
        
    } 
    

}