console.log("This is Promises");
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
    },3000)
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
        },2000)
    }
    })

    // prom1.then((a)=>
    // {
    //     console.log(a);
    // }).catch((err)=>
    // {
    //     console.log(err);
    // })
    // let p3=Promise.all([prom1,prom2])
    // p3.then((a)=>
    // {
    //     console.log(a);
    // }).catch((e)=>
    // {
    //     console.log(e);
    // })
    // 
    let p3=Promise.race([prom1,prom2])
    p3.then((a)=>
    {
        console.log(a);
    }).catch((e)=>
    {
        console.log(e);
    })
