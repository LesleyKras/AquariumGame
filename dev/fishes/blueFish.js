/// <reference path="fish.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BlueFish = (function (_super) {
    __extends(BlueFish, _super);
    function BlueFish() {
        _super.call(this);
        var ocean = Game.getInstance().ocean;
        this.div = document.createElement("fish2");
        this.behavior = new Swimming(this);
        this.fishSpeed = 1;
        this.width = 32;
        this.height = 32;
        ocean.appendChild(this.div);
    }
    return BlueFish;
}(Fish));
//# sourceMappingURL=blueFish.js.map