// real time function
function clock(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    //12 hour format 
    if(hours>12){
        hours = hours-12;

    }
    // console.log(hours,minutes,seconds);

    //assigning real time values to html
    let hrs = document.getElementById("hrs");
    hrs.innerHTML =`${hours} Hrs` ;
    let mins = document.getElementById("mins");
    mins.innerText =`${minutes} Min` ;
    let secs = document.getElementById("secs");
    secs.innerText =`${seconds} Sec` ;
}
setInterval(()=>{
    clock()
},1000)
// for am to pm convert 
let date = new Date();
let hours = date.getHours();

if(hours>=12){
    let ampm=document.getElementById("ampm");
    ampm.innerHTML ="PM"
}
if(hours<12){
    let ampm=document.getElementById("ampm");
    ampm.innerHTML ="AM"
}
// time greeting function 
let greeting = document.getElementById('greeting')

if(hours>=12 && hours<16){
    greeting.innerHTML ="GOOD AFTERNOON !! TAKE SOME SLEEP"
}
if(hours>=16 && hours<20){
    greeting.innerHTML ="GOOD EVENING !!"
}
if(hours>=20 && hours< 23){
    greeting.innerHTML ="GOOD NIGHT !!"
}
console.log(greeting)
// button hover function 
let button = document.getElementById('button');
    
button.addEventListener("mouseover", function(){
    console.log("mouse hover");
    this.innerText = "Party time"
})
button.addEventListener("mouseout", function(){
    this.innerText = "Set Alarm"
})

// button function 
button.addEventListener('click',function(){
    let date = new Date();
    let hours = date.getHours();

    let wakeup = document.getElementById('wakeup')
    let lunch = document.getElementById('lunchtime')
    let nap = document.getElementById('naptime')
    let night = document.getElementById('nighttime')

    if(parseInt(wakeup.value) === hours){
        document.getElementById('texttime').innerHTML="GRAB SOME HEALTHY BREAKFAST"
        document.getElementById('image')
    }
     else if(parseInt(lunch.value) === hours){
        document.getElementById('texttime').innerHTML="LETS HAVE SOME LUNCH !!"
        document.getElementById('image').src ="./Group 5183.png"
    }
    else if(parseInt(nap.value) === hours){
        document.getElementById('texttime').innerHTML="STOP YAWNING GET SOME TEA..ITS JUST EVENING!"
        document.getElementById('image').src ="./lunch_image.png"
    }
    else if(parseInt(night.value) === hours){
        document.getElementById('texttime').innerHTML="CLOSE YOUR EYES AND GO TO SLEEP"
        document.getElementById('image').src ="./Group 5194.png"
    }
    let timing =document.getElementsByClassName('time_show')

    timing[0].innerText =wakeup.options[wakeup.selectedIndex].text;
    timing[1].innerText =lunch.options[lunch.selectedIndex].text;
    timing[2].innerText =nap.options[nap.selectedIndex].text;
    timing[3].innerText =night.options[night.selectedIndex].text;
        console.log(timing[0])
        console.log(timing[1])
        console.log(timing[2])
        console.log(timing[3])
     
})
