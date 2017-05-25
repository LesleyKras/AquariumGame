/// <reference path="fish.ts" />


class LightFish extends Fish {

    constructor(){
        super()
        let ocean = Game.getInstance().ocean;
        this.div = document.createElement("fish");
        this.behavior = new Swimming(this);
        this.fishSpeed = 5;
        this.width = 40;
        this.height = 40;
        ocean.appendChild(this.div);
    }

}