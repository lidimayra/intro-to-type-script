module ModuleWithExport {
    export class Hello {
        constructor() {
            console.log('Hello ');
            console.log(
                'Calling into World class constructor from '+
                'ModuleWithExport.Hello.'
            );

            var world = new World();
        }
    }
    class World {
        constructor() {
            console.log('World');
        }
    }
}
var world;
world = new ModuleWithExport.Hello();

// aliasing
import Hello = ModuleWithExport.Hello;
world = new Hello();
