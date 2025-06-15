function eligible_for_job(age) {
    return new Promise((resolve,reject) => {
        if (age >= 18) {
            setTimeout(() => { 
                resolve("Eligible") }, 2000)
        }
        else{
            reject("Not Eligible")
        }
    })
}
function eligible_for_scholarship(gpa)
{
    return new Promise((resolve,reject)=>
    {
        if (gpa>3.5)
        {
            setTimeout(()=>{resolve("Scholarship Granted")},3000)
        }
        else{
            reject("No Scholarship")
        }
    })
}

// eligible_for_job(18).then((value)=>
// {
//     console.log(value)
// }).catch((err)=>
// {
//     console.log(err)
// }).finally(()=>
// {
//     console.log("Promise Settled")
// })

// Promise.all([eligible_for_job(18),eligible_for_scholarship(3.6)]).then((val)=>
// {
//     console.log(val)
// }).catch((err)=>
// {
//     console.log(err)
// })
// Promise.all([eligible_for_job(18),eligible_for_scholarship(3.4)]).then((val)=>
// {
//     console.log(val)
// }).catch((err)=>
// {
//     console.log(err)
// })

// Promise.allSettled([eligible_for_job(17),eligible_for_scholarship(3.6)]).then((val)=>
// {
//     console.log(val)
// }).catch((err)=>
// {
//     console.log(err)
// })

// Promise.race([eligible_for_job(17),eligible_for_scholarship(3.6)]).then((val)=>
// {
//     console.log(val)
// }).catch((err)=>
// {
//     console.log(err)
// })

// Promise.any([eligible_for_job(17),eligible_for_scholarship(3.6)]).then((val)=>
// {
//     console.log(val)
// }).catch((err)=>
// {
//     console.log(err)
// })

//Promise Chaining
eligible_for_job(18).then((val)=>
{
    console.log(val)
    return val+" Congrats"
}).then((newval)=>
{
    console.log(newval)
})

//Async Await 
async function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Amir")
        },10000)
    })
}
async function displayData()
{
    console.log(await getData())
    console.log("Yes")
}
displayData()
console.log("Asynchronous operations are in backgorund")