// Example 1
var Greeter = (function () {
    function Greeter(element) {
        this.element = element;
    }
    Greeter.prototype.greet = function (msg) {
        this.element.innerHTML = msg;
    };
    return Greeter;
}());
// Example 2
var Greeter_2 = (function () {
    function Greeter_2(element) {
        this.element = element;
    }
    Greeter_2.prototype.greet = function (msg) {
        this.element.innerHTML = msg;
    };
    return Greeter_2;
}());
