let land = document.querySelector(".landing");
let dots = document.querySelectorAll(".landing .bullets li");
let dot1 = document.querySelector(".landing .bullets .one");
let dot2 = document.querySelector(".landing .bullets .two");
let dot3 = document.querySelector(".landing .bullets .three");
let goleft = document.querySelector(".landing .fa-angle-left");
let All=document.querySelectorAll(".portfolio .shuffle li");
let all=document.querySelector(".portfolio .shuffle .all");
let App=document.querySelector(".portfolio .shuffle .App");
let Photo=document.querySelector(".portfolio .shuffle .Photo");
let Web=document.querySelector(".portfolio .shuffle .Web");
let Print=document.querySelector(".portfolio .shuffle .Print");
let imgs=[document.querySelector(".portfolio .imgs-container .box0"),document.querySelector(".portfolio .imgs-container .box1"),document.querySelector(".portfolio .imgs-container .box2"),
document.querySelector(".portfolio .imgs-container .box3"),document.querySelector(".portfolio .imgs-container .box4"),document.querySelector(".portfolio .imgs-container .box5"),
document.querySelector(".portfolio .imgs-container .box6"),document.querySelector(".portfolio .imgs-container .box7")]
let goright = document.querySelector(".landing .fa-angle-right");
let hide=document.querySelector(".portfolio .hide");
let more=document.querySelector(".portfolio .more");
let deta=new Date();
let skills=document.querySelector(".our-skills")
let spans=document.querySelectorAll(".our-skills .prog-holder .prog span");
let services=document.querySelector(".services");
let scroll=document.querySelector(".scroll-to-top");
let b=[document.querySelector(".portfolio .imgs-container .a"),document.querySelector(".portfolio .imgs-container .b"),document.querySelector(".portfolio .imgs-container .c"),document.querySelector(".portfolio .imgs-container .d"),]
let foot=document.querySelector(".footer .copyright");
let plans=document.querySelector(".plans");
let plan=document.querySelectorAll(".plan .head span");
let start=false;
goright.onclick = function() {
    if (dot3.classList.contains("active") === true) {
        land.style.cssText = "background-image:url(../images/subscribe.jpg);";
        dot1.classList.add("active");
        dot2.classList.remove("active");
        dot3.classList.remove("active");
    } else if (dot2.classList.contains("active") === true) {
         
        land.style.cssText = "background-image:url(../images/mountainblackandwhite.jpg);";
        dot3.classList.add("active");
        dot2.classList.remove("active");
        dot1.classList.remove("active");
    } else if (dot1.classList.contains("active") === true) {
        land.style.cssText = "background-image: url(../images/landing.jpg);";
        dot2.classList.add("active");
        dot1.classList.remove("active");
        dot3.classList.remove("active");
    }
}
goleft.onclick = function () {
        
    if (dot3.classList.contains("active") === true) {
        land.style.cssText = "background-image:url(../images/landing.jpg);";
        dot2.classList.add("active");
        dot1.classList.remove("active");
        dot3.classList.remove("active");
    } else if (dot2.classList.contains("active") === true) {
        land.style.cssText = "background-image:url(../images/subscribe.jpg);";
        dot1.classList.add("active");
        dot2.classList.remove("active");
        dot3.classList.remove("active");
    } else if (dot1.classList.contains("active") === true) {
        land.style.cssText = "background-image: url(../images/mountainblackandwhite.jpg);";
        dot3.classList.add("active");
        dot1.classList.remove("active");
        dot2.classList.remove("active");
    }
}
all.onclick=function(){
    All.forEach((ele)=>ele.classList.remove("active"));
    all.classList.add("active");
    // imgs.classList.add("block");
    imgs[5].style.cssText="display:block;";
imgs[2].style.cssText="display:block;";
imgs[1].style.cssText="display:block;";
imgs[7].style.cssText="display:block;";
imgs[0].style.cssText="display:block;";
imgs[3].style.cssText="display:block;";
imgs[4].style.cssText="display:block;";
imgs[6].style.cssText="display:block;";
}
App.onclick=function(){
    All.forEach((ele)=>ele.classList.remove("active"));
    imgs[7].style.cssText="display:none;";
    imgs[0].style.cssText="display:none;";
    imgs[3].style.cssText="display:none;";
    imgs[4].style.cssText="display:none;";
    imgs[6].style.cssText="display:none;";
    // imgs.length=3;
    App.classList.add("active");
imgs[5].style.cssText="display:block;";
imgs[2].style.cssText="display:block;";
imgs[1].style.cssText="display:block;";
}
hide.style.cssText="display:none;";
Photo.onclick=function(){
    All.forEach((ele)=>ele.classList.remove("active"));
    Photo.classList.add("active");
    imgs[7].style.cssText="display:none;";
    imgs[1].style.cssText="display:none;";
    imgs[2].style.cssText="display:none;";
    imgs[5].style.cssText="display:none;";
    imgs[6].style.cssText="display:none;";
    document.querySelector(".portfolio .imgs-container .box0").style.cssText="display:block;";
    document.querySelector(".portfolio .imgs-container .box3").style.cssText="display:block;";
    document.querySelector(".portfolio .imgs-container .box4").style.cssText="display:block;";
}
Web.onclick=function(){
    All.forEach((ele)=>ele.classList.remove("active"));
    Web.classList.add("active");
    imgs[0].style.cssText="display:none;";
    imgs[2].style.cssText="display:none;";
    imgs[3].style.cssText="display:none;";
    imgs[5].style.cssText="display:none;";
    imgs[4].style.cssText="display:none;";
    document.querySelector(".portfolio .imgs-container .box1").style.cssText="display:block;";
    document.querySelector(".portfolio .imgs-container .box7").style.cssText="display:block;";
    document.querySelector(".portfolio .imgs-container .box6").style.cssText="display:block;";
}
Print.onclick=function(){
    All.forEach((ele)=>ele.classList.remove("active"));
    Print.classList.add("active");
    imgs[7].style.cssText="display:none;";
    imgs[1].style.cssText="display:none;";
    imgs[4].style.cssText="display:none;";
    imgs[5].style.cssText="display:none;";
    imgs[6].style.cssText="display:none;";
    document.querySelector(".portfolio .imgs-container .box0").style.cssText="display:block;";
    document.querySelector(".portfolio .imgs-container .box2").style.cssText="display:block;";
    document.querySelector(".portfolio .imgs-container .box3").style.cssText="display:block;";
}
more.onclick=function(){
    b[0].style.cssText="display:block;";
    b[1].style.cssText="display:block;";
    b[2].style.cssText="display:block;";
    b[3].style.cssText="display:block;";
hide.style.cssText="display:block;";
}
hide.onclick=function(){
    b[0].style.cssText="display:none;";
    b[1].style.cssText="display:none;";
    b[2].style.cssText="display:none;";
    b[3].style.cssText="display:none;";
hide.style.cssText="display:none;";

}
scroll.style.cssText="display:none;";
window.onscroll = function(){
if(window.scrollY>=services.offsetTop){
scroll.style.cssText="display:block;";
if(window.scrollY>=skills.offsetTop){
    spans.forEach((s)=>{s.style.width=s.dataset.progress})}
    if(window.scrollY>=plans.offsetTop-350){
    if(start==false){
    plan.forEach((p)=>starts(p));
    }
    start=true;
}
}


else{
scroll.style.cssText="display:none;";
}
}
scroll.onclick=function(){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
}
function starts(pl){
    let goal=pl.dataset.goal;
    let count = setInterval(() => {
        pl.textContent++;
        if (pl.textContent == goal) {
        clearInterval(count);
        }
    },2000/goal);
}

foot.innerHTML=`&copy; ${deta.getFullYear()} <span>Kasper</span> All Right Reserved`;
