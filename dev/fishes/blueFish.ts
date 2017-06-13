/// <reference path="fish.ts" />


class BlueFish extends Fish {

    constructor(){
        super()
        let ocean = Game.getInstance().ocean;
        this.div = document.createElement("fish2");
        this.behavior = new Swimming(this);
        this.fishSpeed = 1;
        this.width = 32;
        this.height = 32;
        ocean.appendChild(this.div);
    }

}