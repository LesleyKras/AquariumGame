class Swimming implements Behavior{

    fish:Fish;

    constructor(f: Fish){
        this.fish = f;
    }

    public draw(){
        if(this.fish.directionRight){
            this.fish.x += this.fish.fishSpeed;
            if(this.fish.x >= document.getElementById("container").clientWidth){
                this.fish.directionRight = false;
            }
            this.fish.div.style.transform ="translate("+this.fish.x+"px,"+this.fish.y+"px)";
        }
        else{
            this.fish.x -= this.fish.fishSpeed;
            if(this.fish.x <= 1){
                this.fish.directionRight = true;
            }
            this.fish.div.style.transform ="translate("+this.fish.x+"px,"+this.fish.y+"px) scaleX(-1)";
        }
        
    }

}