// Named function
function displayOutput(msg: string) {
    document.body.innerHTML = msg;
}


// Anonymous function with Type Inference
var add = function (x: number, y: number) : number {
    return x + y;
}


// Anonymous function without Type Inference
var add: (x: number, y: number) => number =
    function (x:number, y:number): number {
        return x + y;
    };


// Lambda function
var $ = (id) => document.getElementById(id);


// Class function
class Calc {

    add(x: number, y: number): number {
        return x + y;
    }

}
