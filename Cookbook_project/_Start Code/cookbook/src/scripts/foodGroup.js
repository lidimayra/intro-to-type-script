var FoodGroup = (function () {
    function FoodGroup() {
    }
    Object.defineProperty(FoodGroup.prototype, "name", {
        get: function () { return this.name; },
        set: function (name) { this._name = name; },
        enumerable: true,
        configurable: true
    });
    return FoodGroup;
}());
//# sourceMappingURL=foodGroup.js.map
