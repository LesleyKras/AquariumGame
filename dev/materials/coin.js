/// <reference path="../gameObject.ts" />
/// <reference path="../fishes/fish.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Coin = (function (_super) {
    __extends(Coin, _super);
    function Coin(f) {
        var _this = this;
        _super.call(this);
        this.fish = f;
        this.x = this.fish.x;
        this.y = this.fish.y + 20;
        var ocean = Game.getInstance().ocean;
        this.div = document.createElement("coin");
        this.falling = true;
        ocean.appendChild(this.div);
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
        this.div.addEventListener("click", function () {
            Game.getInstance().addGold(10);
            ocean.removeChild(_this.div);
        });
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
        else {
            this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
        }
    };
    return Coin;
}(GameObject));
//# sourceMappingURL=coin.js.map