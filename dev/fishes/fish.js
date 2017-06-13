/// <reference path="../gameObject.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Fish = (function (_super) {
    __extends(Fish, _super);
    function Fish() {
        var _this = this;
        _super.call(this);
        this.fishSpeed = 5;
        this.x = Math.floor(Math.random() * 600) + 1;
        this.y = Math.floor(Math.random() * 500) + 1; //500 max
        this.directionRight = true;
        setInterval(function () {
            _this.coin = new Coin(_this);
        }, 10000);
    }
    Fish.prototype.draw = function () {
        this.behavior.draw();
        if (this.coin) {
            this.coin.draw();
        }
    };
    return Fish;
}(GameObject));
//# sourceMappingURL=fish.js.map