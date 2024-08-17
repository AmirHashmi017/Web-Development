function info(name) {
    console.log("Hey " + name + " You are CEO of TaskLyft");
    console.log("Hey " + name + " You studied at UET Lahore ");
}
info("Amir");
info("Ashir");
info("Ahmad");
function sum(a, b) {
    return a + b;
}
console.log("3+5= " + sum(3, 5));
//Giving default parameters to function
function diff(b,a=3)
{
    return a-b;
}
console.log("3-1= " + diff(1));