/// <reference path="fishes/fish.ts" />
var Game = (function () {
    function Game() {
        var _this = this;
        this.fishArray = [];
        this.baitArray = [];
        this.goldAmount = 50;
        this.ocean = document.getElementById('container');
        this.ocean.addEventListener("dblclick", function (e) { return _this.createBait(e.pageX - 322, e.pageY - 86); });
        var button1 = document.createElement("button1");
        button1.innerHTML = "$10";
        this.ocean.appendChild(button1);
        button1.addEventListener("click", function (e) { return _this.createFish(1); });
        button1.style.transform = "translate(10px, 80px)";
        var button2 = document.createElement("button2");
        button2.innerHTML = "$20";
        this.ocean.appendChild(button2);
        button2.addEventListener("click", function (e) { return _this.createFish(2); });
        button2.style.transform = "translate(10px, 160px)";
        var button3 = document.createElement("button3");
        button3.innerHTML = "$50";
        this.ocean.appendChild(button3);
        button3.addEventListener("click", function (e) { return _this.createFish(3); });
        button3.style.transform = "translate(10px, 240px)";
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.addGold = function (a) {
        this.goldAmount += a;
    };
    Game.prototype.createBait = function (x, y) {
        if (this.goldAmount >= 5) {
            var bait = new Bait(x, y);
            this.baitArray.push(bait);
            this.goldAmount -= 5;
        }
        else {
            document.getElementById('info').innerHTML = "Not Enough Money!";
        }
    };
    Game.prototype.createFish = function (n) {
        document.getElementById('info').innerHTML = "";
        console.log(n);
        if (n == 1) {
            if (this.goldAmount >= 10) {
                var fish = new GreenFish();
                this.fishArray.push(fish);
                this.goldAmount -= 10;
            }
            else {
                document.getElementById('info').innerHTML = "Not Enough Money!";
            }
        }
        if (n == 2) {
            if (this.goldAmount >= 20) {
                var fish = new BlueFish();
                this.fishArray.push(fish);
                this.goldAmount -= 20;
            }
            else {
                document.getElementById('info').innerHTML = "Not Enough Money!";
            }
        }
        if (n == 3) {
            if (this.goldAmount >= 50) {
                var fish = new LightFish();
                this.fishArray.push(fish);
                this.goldAmount -= 50;
            }
            else {
                document.getElementById('info').innerHTML = "Not Enough Money!";
            }
        }
    };
    Game.getInstance = function () {
        if (!Game._instance) {
            Game._instance = new Game();
        }
        return Game._instance;
    };
    Game.prototype.gameLoop = function () {
        var _this = this;
        document.getElementById("cash").innerHTML = "$" + this.goldAmount + " ";
        this.fishArray.forEach(function (fish) {
            fish.draw();
        });
        this.baitArray.forEach(function (bait) {
            bait.draw();
        });
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
// load
window.addEventListener("load", function () {
    var g = Game.getInstance();
});
//# sourceMappingURL=game.js.map