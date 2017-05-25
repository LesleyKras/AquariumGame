/// <reference path="../gameObject.ts" />

class Bait extends GameObject{

    constructor(x: number, y: number){
        super();
        this.div = document.createElement("bait");
        this.x = x;
        this.y = y;
        this.width = 2;
        this.height = 2;
        Game.getInstance().ocean.appendChild(this.div);
    }

    draw(){
        this.y += 1;
        this.div.style.transform ="translate("+this.x+"px,"+this.y+"px)";
    }

}