let obj={
    name:"amir",
    discipline:"BSCS"
}
console.log(obj);
class Animal{
    constructor(name)
    {
        this._name=name;
        console.log("Cat is created");
    }
    get name()
    {
        return this._name;
    }
    set name(newname){
this._name=newname;
    }
    eats()
    {
        console.log("Kha raha hoo");
    }
    jumps()
    {
        console.log("jump kar raha hoo");
    }
}
let cat=new Animal("Meow");
console.log(cat);
cat.eats();
console.log(cat.name);
class Lion extends Animal
{
    constructor(name)
    {
        super(name);
        console.log("Lion is created");
    }
     runn()
    {
        console.log("Lion is running fast");
    }
    static runs()
    {
        console.log("Lion is running");
    }
    eats()
    {
        super.eats();
        console.log("Shera kha lete");
    }
}
let lion=new Lion("Shera");
console.log(lion);
lion.name="Wah Shera";
lion.eats();
console.log(lion.name);
lion.runn();
console.log(lion instanceof Animal);
console.log(cat instanceof Lion);
Lion.runs();