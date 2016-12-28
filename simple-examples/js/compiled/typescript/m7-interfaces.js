var Plant = (function () {
    function Plant() {
    }
    return Plant;
}());
// This works because the definitions of IPlant and Plant are identical
var p;
p = new Plant();
var trees = (function () {
    function trees() {
    }
    return trees;
}());
