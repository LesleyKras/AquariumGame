/// <reference path="../gameObject.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Bait = (function (_super) {
    __extends(Bait, _super);
    function Bait(x, y) {
        _super.call(this);
        this.div = document.createElement("bait");
        this.x = x;
        this.y = y;
        this.width = 2;
        this.height = 2;
        Game.getInstance().ocean.appendChild(this.div);
    }
    Bait.prototype.draw = function () {
        this.y += 1;
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    return Bait;
}(GameObject));
//# sourceMappingURL=bait.js.map