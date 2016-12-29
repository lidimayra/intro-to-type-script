var Plant = (function () {
    function Plant(Genus, Species, Region, Name) {
        this.Genus = Genus;
        this.Species = Species;
        this.Region = Region;
        this.Name = Name;
    }
    Plant.prototype.content = function () {
        var str = "I have an " + this.Name + "tree. It is of the genus " +
            this.Genus + " and of the species " + this.Species +
            ". It is primarly grown in the " + this.Region + ".";
        return str;
    };
    return Plant;
}());
var myPlant;
myPlant = new Plant("Malus", "Domestica", "Northern Hemisphere", "Orchard Apple");
alert(myPlant.content());
