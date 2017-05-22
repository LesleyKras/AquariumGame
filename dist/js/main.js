var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GameObject = (function () {
    function GameObject() {
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
    }
    return GameObject;
}());
var Bait = (function (_super) {
    __extends(Bait, _super);
    function Bait(x, y) {
        var _this = _super.call(this) || this;
        _this.div = document.createElement("bait");
        _this.x = x;
        _this.y = y;
        _this.width = 2;
        _this.height = 2;
        Game.getInstance().ocean.appendChild(_this.div);
        return _this;
    }
    Bait.prototype.draw = function () {
        this.y += 1;
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    return Bait;
}(GameObject));
var Fish = (function (_super) {
    __extends(Fish, _super);
    function Fish() {
        var _this = _super.call(this) || this;
        _this.fishSpeed = 5;
        _this.x = Math.floor(Math.random() * 600) + 1;
        _this.y = Math.floor(Math.random() * 500) + 1;
        _this.directionRight = true;
        setInterval(function () {
            _this.coin = new Coin(_this);
        }, 10000);
        return _this;
    }
    Fish.prototype.draw = function () {
        this.behavior.draw();
        if (this.coin) {
            this.coin.draw();
        }
    };
    return Fish;
}(GameObject));
var BlueFish = (function (_super) {
    __extends(BlueFish, _super);
    function BlueFish() {
        var _this = _super.call(this) || this;
        var ocean = Game.getInstance().ocean;
        _this.div = document.createElement("fish2");
        _this.behavior = new Swimming(_this);
        _this.fishSpeed = 1;
        _this.width = 32;
        _this.height = 32;
        ocean.appendChild(_this.div);
        return _this;
    }
    return BlueFish;
}(Fish));
var Coin = (function (_super) {
    __extends(Coin, _super);
    function Coin(f) {
        var _this = _super.call(this) || this;
        _this.fish = f;
        _this.x = _this.fish.x;
        _this.y = _this.fish.y + 20;
        var ocean = Game.getInstance().ocean;
        _this.div = document.createElement("coin");
        _this.falling = true;
        ocean.appendChild(_this.div);
        _this.div.style.transform = "translate(" + _this.x + "px," + _this.y + "px)";
        _this.div.addEventListener("click", function () {
            Game.getInstance().addGold(10);
            ocean.removeChild(_this.div);
        });
        return _this;
    }
    Coin.prototype.draw = function () {
        var _this = this;
        if (this.falling) {
            this.y += 1;
        }
        if (this.y > Math.floor(Math.random() * 3) + 550) {
            this.falling = false;
            var timeOut = setTimeout(function () {
                Game.getInstance().ocean.removeChild(_this.div);
            }, 500);
        }
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    return Coin;
}(GameObject));
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
window.addEventListener("load", function () {
    var g = Game.getInstance();
});
var GreenFish = (function (_super) {
    __extends(GreenFish, _super);
    function GreenFish() {
        var _this = _super.call(this) || this;
        var ocean = Game.getInstance().ocean;
        _this.div = document.createElement("fish3");
        _this.behavior = new Swimming(_this);
        _this.fishSpeed = 2;
        _this.width = 30;
        _this.height = 30;
        ocean.appendChild(_this.div);
        return _this;
    }
    return GreenFish;
}(Fish));
var LightFish = (function (_super) {
    __extends(LightFish, _super);
    function LightFish() {
        var _this = _super.call(this) || this;
        var ocean = Game.getInstance().ocean;
        _this.div = document.createElement("fish");
        _this.behavior = new Swimming(_this);
        _this.fishSpeed = 5;
        _this.width = 40;
        _this.height = 40;
        ocean.appendChild(_this.div);
        return _this;
    }
    return LightFish;
}(Fish));
var Swimming = (function () {
    function Swimming(f) {
        this.fish = f;
    }
    Swimming.prototype.draw = function () {
        if (this.fish.directionRight) {
            this.fish.x += this.fish.fishSpeed;
            if (this.fish.x >= document.getElementById("container").clientWidth) {
                this.fish.directionRight = false;
            }
            this.fish.div.style.transform = "translate(" + this.fish.x + "px," + this.fish.y + "px)";
        }
        else {
            this.fish.x -= this.fish.fishSpeed;
            if (this.fish.x <= 1) {
                this.fish.directionRight = true;
            }
            this.fish.div.style.transform = "translate(" + this.fish.x + "px," + this.fish.y + "px) scaleX(-1)";
        }
    };
    return Swimming;
}());
var swimToBait = (function () {
    function swimToBait() {
    }
    swimToBait.prototype.draw = function () {
    };
    return swimToBait;
}());
//# sourceMappingURL=main.js.map