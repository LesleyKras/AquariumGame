/// <reference path="fish.ts" />


class Game {

    private static _instance: Game;
    private fishArray:Array<Fish> = [];
    private baitArray:Array<Bait> = [];
    private goldAmount:number = 50;
    public ocean = document.getElementById('container');


    private constructor() {
        this.ocean.addEventListener("dblclick", (e: MouseEvent) => this.createBait(e.pageX-322, e.pageY-86));
        let button1 = document.createElement("button1");
        button1.innerHTML = "$10";
        this.ocean.appendChild(button1);
        button1.addEventListener("click", (e: MouseEvent) => this.createFish(1));
        button1.style.transform ="translate(10px, 80px)";

        let button2 = document.createElement("button2");
        button2.innerHTML = "$20";
        this.ocean.appendChild(button2);
        button2.addEventListener("click", (e: MouseEvent) => this.createFish(2));
        button2.style.transform ="translate(10px, 160px)";

        let button3 = document.createElement("button3");
        button3.innerHTML = "$50";
        this.ocean.appendChild(button3);
        button3.addEventListener("click", (e: MouseEvent) => this.createFish(3));
        button3.style.transform ="translate(10px, 240px)";



        requestAnimationFrame(() => this.gameLoop());
    }

    public addGold(a:number){
        this.goldAmount += a;
    }

    public createBait(x:number, y:number){
        if(this.goldAmount >= 5){
            let bait = new Bait(x,y);
            this.baitArray.push(bait);
            this.goldAmount -= 5;
        }
        else{
            document.getElementById('info').innerHTML = "Not Enough Money!";
        }

    }

    private createFish(n: number):void{
        document.getElementById('info').innerHTML = "";
        console.log(n);
        if(n == 1){
            if(this.goldAmount >= 10){
                let fish = new GreenFish();
                this.fishArray.push(fish);
                this.goldAmount -= 10;
            }
            else{
                document.getElementById('info').innerHTML = "Not Enough Money!";
            }    
        }
        if(n == 2){
            if(this.goldAmount >= 20){
                let fish = new BlueFish();
                this.fishArray.push(fish);
                this.goldAmount -= 20;
            }
            else{
                document.getElementById('info').innerHTML = "Not Enough Money!";
            }
        }
        if(n == 3){
            if(this.goldAmount >= 50){
                let fish = new LightFish();
                this.fishArray.push(fish);
                this.goldAmount -= 50;
            }
            else{
                document.getElementById('info').innerHTML = "Not Enough Money!";
            }
        }
    }

    public static getInstance():Game {
        if(!Game._instance) {
            Game._instance = new Game();
        }
        return Game._instance;
    }

    private gameLoop(){
        document.getElementById("cash").innerHTML = "$"+this.goldAmount+" ";
        this.fishArray.forEach(fish => {
            fish.draw();
        });
        this.baitArray.forEach(bait => {
            bait.draw();
        })
        requestAnimationFrame(() => this.gameLoop());
    }
} 


// load
window.addEventListener("load", function() {
    let g:Game = Game.getInstance();
});