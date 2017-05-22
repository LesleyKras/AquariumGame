/// <reference path="fish.ts" />


class GreenFish extends Fish {

    constructor(){
        super()
        let ocean = Game.getInstance().ocean;
        this.div = document.createElement("fish3");
        this.behavior = new Swimming(this);
        this.fishSpeed = 2;
        this.width = 30;
        this.height = 30;
        ocean.appendChild(this.div);
    }

}