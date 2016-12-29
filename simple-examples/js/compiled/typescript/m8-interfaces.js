var Greeter = (function () {
    function Greeter(element) {
        this.element = element;
    }
    Greeter.prototype.greet = function (msg) {
        this.element.innerHTML = msg.greeting;
    };
    return Greeter;
}());
