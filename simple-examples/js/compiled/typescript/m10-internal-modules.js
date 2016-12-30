var ModuleWithExport;
(function (ModuleWithExport) {
    var Hello = (function () {
        function Hello() {
            console.log('Hello ');
            console.log('Calling into World class constructor from ' +
                'ModuleWithExport.Hello.');
            var world = new World();
        }
        return Hello;
    }());
    ModuleWithExport.Hello = Hello;
    var World = (function () {
        function World() {
            console.log('World');
        }
        return World;
    }());
})(ModuleWithExport || (ModuleWithExport = {}));
var world;
world = new ModuleWithExport.Hello();
// aliasing
var Hello = ModuleWithExport.Hello;
world = new Hello();
