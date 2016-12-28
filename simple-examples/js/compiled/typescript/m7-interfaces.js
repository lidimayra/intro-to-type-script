// Example 1
var Plant = (function () {
    function Plant() {
    }
    return Plant;
}());
// This works because the definitions of IPlant and Plant are identical
var p;
p = new Plant();
// Example 2
var trees = (function () {
    function trees() {
    }
    return trees;
}());
