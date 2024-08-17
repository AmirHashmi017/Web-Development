console.log("I am a tutorial on Loops");
for (let i = 0; i < 3; i++) {
    console.log("Value is " + i);
}
let obj =
{
    name: "Amir",
    company: "Task Lyft",
    Role: "Founder and CEO"
}
for (const key in obj) {
    const element = obj[key];
    console.log(key, element);
}
for (const c of "Amir") {
    console.log(c);
}
let i = 10;
while (i > 7) {
    console.log(i);
    i--;
}
let n = 6;
do {
    console.log(n);
}
while (n > 7);