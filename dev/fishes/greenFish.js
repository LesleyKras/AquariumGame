/// <reference path="fish.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GreenFish = (function (_super) {
    __extends(GreenFish, _super);
    function GreenFish() {
        _super.call(this);
        var ocean = Game.getInstance().ocean;
        this.div = document.createElement("fish3");
        this.behavior = new Swimming(this);
        this.fishSpeed = 2;
        this.width = 30;
        this.height = 30;
        ocean.appendChild(this.div);
    }
    return GreenFish;
}(Fish));
//# sourceMappingURL=greenFish.js.map