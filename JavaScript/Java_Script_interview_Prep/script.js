let a="Amir"
console.log(a+10)
console.log(typeof a)
const student={name:"Amir",age:18}
let key="email"
student[key]="amirhashmi017@gmail.com"
student.section="A"
console.log(student)

//For loop
console.log("For Loop")
for(let i=0;i<5;i++)
{
    console.log(i)
}
//while loop
console.log("While Loop")
n=0
while(n<3)
{
    console.log(n);
    n++;
}

//Do-While loop
console.log("Do While Loop")
n=0
do{
    console.log(n)
    n++;
}while(n<0)

let arr=[1,2,3,4,5]
//forin loop used for keys in object and also for indexes in array
console.log("for in loop")
for(let key in student){
    console.log(`${key}:${student[key]}`)
}
for (let index in arr)
{
    console.log (`Index:${index},value:${arr[index]}`)
}

//forof loop: used for values in iterables like array and string
console.log("for of loop")
for (let val of arr){
    console.log(val)
}
let myname="Amir"
for (let char of myname)
{
    console.log(char)
}


function add(a,b)
{
    return a+b
}
console.log(add(2,3))

str1="Amir"
str2="Ashir"

console.log(str1.length)
console.log(str1.toUpperCase())
console.log(str1.toLowerCase())
console.log(str1.trim())
console.log(str1.slice(1,4))
console.log(str1[0])
console.log(str1.concat(str2))
console.log(str1.replace("ir","mar"))

console.log("harr\"1".length)
console.log(str1.startsWith("Am"))
console.log(str1.endsWith("ir"))
console.log(str1.includes("mi"))

arr=[1,2,3,4,5]
arr2=[9,2,1]
console.log(arr.length)
arr.pop()
arr.push(6)
arr.shift()
arr.unshift(7)
console.log(arr)
console.log(arr.toString())
console.log(arr.join("_"))
arr.sort()
console.log(arr)
arr.reverse()
console.log(arr)
console.log(arr.slice(3,5))
newarr=arr.splice(2,2,23,25,22)
console.log(newarr)
console.log(arr.concat(arr2,[4,5]))

// For each just to perform operation by taking every rray element
arrnew=[1,2,3,4,5]
arrnew.forEach((value,index,array)=>
{
    console.log(`index:${index},value:${value},arr:${array}`)
})

//Map which performs a function to every element of array and returns new array
squares=arrnew.map((value)=>
{
    return value**2
})
console.log(squares)
//Filter for filtering out array on the basis of condition applying on every element
evens=arrnew.filter((value)=>
{
    return value%2==0
})
console.log(evens)

//Reduce reduces the array to single element by performing function
sum=arrnew.reduce((acc,val)=>
{
    return acc+=val
},0)
console.log(sum)

let timer_id=setTimeout(()=>{
    console.log("TIme out Function")
},10000)

letcontinuous_interval=setInterval(()=>
{
    console.log("Interval Set")
},2000)
