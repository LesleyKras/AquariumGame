/// <reference path="fish.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var LightFish = (function (_super) {
    __extends(LightFish, _super);
    function LightFish() {
        _super.call(this);
        var ocean = Game.getInstance().ocean;
        this.div = document.createElement("fish");
        this.behavior = new Swimming(this);
        this.fishSpeed = 5;
        this.width = 40;
        this.height = 40;
        ocean.appendChild(this.div);
    }
    return LightFish;
}(Fish));
//# sourceMappingURL=lightFish.js.map