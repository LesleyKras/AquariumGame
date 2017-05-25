/// <reference path="../gameObject.ts" />
/// <reference path="../fishes/fish.ts" />


class Coin extends GameObject {

    private fish:Fish;
    private falling: Boolean;

    constructor(f:Fish){
        super();
        this.fish = f;
        this.x = this.fish.x;
        this.y = this.fish.y + 20;
        let ocean = Game.getInstance().ocean;
        this.div = document.createElement("coin");
        this.falling = true;
        ocean.appendChild(this.div);
        this.div.style.transform ="translate("+this.x+"px,"+this.y+"px)";
        this.div.addEventListener("click", () => {
            Game.getInstance().addGold(10);
            ocean.removeChild(this.div);
        });
    }

    public draw():void{
        if(this.falling){
            this.y += 1;
        }

        if(this.y > Math.floor(Math.random() * 3) + 550){
            this.falling = false;
            let timeOut = setTimeout(() => {
                Game.getInstance().ocean.removeChild(this.div);
            }, 500);
        } else {
            // Adding this else statement removed a weird error I was getting in my console
            this.div.style.transform ="translate("+this.x+"px,"+this.y+"px)";
        }
    }
}