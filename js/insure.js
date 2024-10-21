// nicescroll
 $(function() {  
     $("body").niceScroll({
         cursorcolor:"hsl(256, 26%, 20%)",
     });
 })
var iconhamburger=document.querySelector(".icon-hamburger");
var iconclose=document.querySelector(".icon-close");
var items=document.querySelector(".items");
iconhamburger.addEventListener("click",()=>{
    items.style.opacity="1";
    iconhamburger.style.display="none";
    iconclose.style.display="block";
})
iconclose.addEventListener("click",()=>{
    items.style.opacity="0";
    iconhamburger.style.display="block";
    iconclose.style.display="none";
})