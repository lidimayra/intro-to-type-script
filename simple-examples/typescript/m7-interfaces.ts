// interface used in examples below
interface IPlant {
    name: string;
    genus: string;
    category: string;
}



// Example 1
class Plant {
    name: string;
    genus: string;
    category: string;
}
// This works because the definitions of IPlant and Plant are identical
var p: IPlant;
p = new Plant();



// Example 2
class trees implements IPlant {
    name: string;
    genus: string;
    category: string;
}
