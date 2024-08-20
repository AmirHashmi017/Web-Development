function GenerateCard(image,title,channel,views,months,time)
{
//Method 1
let pichtml=`
<div class="card">
            <img class="imagee" src="${image}"/>
       <div class="text">${title}
       <p style="font-size: 15px;position: relative;top: -20px; font-weight: 100;">${channel} , ${views} , ${months} months ago</p>
    </div>
    <div class="watch">${time}</div>
        </div>
        `

document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML+pichtml

//Method 2
let card=document.createElement("div");
card.classList.add("card");
let pichtml2=`
<img class="imagee" src="${image}"/>
`
card.innerHTML=card.innerHTML+pichtml2;
let titlebox=document.createElement("div");
titlebox.innerHTML=title;
titlebox.classList.add("text");
card.append(titlebox);
let below=document.createElement("p");
below.classList.add("text");
let info=channel.concat(" , ",views," , ",months," months ago");
below.innerHTML=info;
below.setAttribute("style","font-size: 15px;position: relative;top: -20px; font-weight: 100;");
titlebox.append(below);
let timing=document.createElement("div");
timing.innerHTML=time;
timing.classList.add("watch");
card.append(timing);
document.querySelector(".container").append(card);
}
GenerateCard("https://i.ytimg.com/vi/mCx5aSEK8YE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD0nnsOR8c-HQ0AYnnFDHnrACrK0A","Javascript Exercise-13 Dynamic Website Builder | Sigma Web Development Course Tutorial#72","CodewithHarry","84K views",2,"39:50")
GenerateCard("https://i.ytimg.com/vi/mCx5aSEK8YE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD0nnsOR8c-HQ0AYnnFDHnrACrK0A","Javascript Exercise-13 Dynamic Website Builder | Sigma Web Development Course Tutorial#72","CodewithHarry","84K views",2,"39:50")
GenerateCard("https://i.ytimg.com/vi/mCx5aSEK8YE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD0nnsOR8c-HQ0AYnnFDHnrACrK0A","Javascript Exercise-13 Dynamic Website Builder | Sigma Web Development Course Tutorial#72","CodewithHarry","84K views",2,"39:50")