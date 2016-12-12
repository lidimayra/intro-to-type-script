// Named function
function displayOutput(msg) {
    document.body.innerHTML = msg;
}
// Anonymous function with Type Inference
var add = function (x, y) {
    return x + y;
};
// Anonymous function without Type Inference
var add = function (x, y) {
    return x + y;
};
// Lambda function
var $ = function (id) { return document.getElementById(id); };
// Class function
var Calc = (function () {
    function Calc() {
    }
    Calc.prototype.add = function (x, y) {
        return x + y;
    };
    return Calc;
}());
