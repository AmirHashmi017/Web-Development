// console.log("This is Promises");
let prom1=new Promise((resolve,reject)=>
{
    let a=Math.random();
    if(a<0.5)
    {
        reject("No the random number was not generated");
    }
    else{
    setTimeout(()=>
    {
        console.log("Yes I am Done")
        resolve("amir");
    },100)
}
})
let prom2=new Promise((resolve,reject)=>
    {
        let a=Math.random();
        if(a<0.5)
        {
            reject("No the random number was not generated 2");
        }
        else{
        setTimeout(()=>
        {
            console.log("Yes I am Done2")
            resolve("amir2");
        },100)
    }
    })

    prom1.then((a)=>
    {
        console.log(a);
    }).catch((err)=>
    {
        console.log(err);
    })
    let p3=Promise.all([prom1,prom2])
    p3.then((a)=>
    {
        console.log(a);
    }).catch((e)=>
    {
        console.log(e);
    })
    
    let p8=Promise.race([prom2,prom1])
    p8.then((a)=>
    {
        console.log("passed");
    }).catch((e)=>
    {
        console.log("Failed");
    })
    //Then will execute if all given promises are resolved otherwise catch will be executed.
    let p4=Promise.all([prom1,prom2])
    p4.then((m)=>{
        console.log("Successed");}
    ).catch((err)=>{
    console.log("Failed");})
    let p6=Promise.allSettled([prom1,prom2])
    p6.then((a)=>
    {
        console.log(a);
    }).catch((err)=>
    {
        console.log(err);
    })
    let p7=Promise.any([prom1,prom2])
    p7.then((a)=>
    {
        console.log("Success");
    }).catch((err)=>
    {
        console.log("Fail");
    })
