//TODO =گرفتن فاصله اسکرول از بالای صفحه به هنگام رویداد اسکرول کردن صفحه 

function scrolltop1(){
   return "distance from top is " + document.documentElement.scrollTop + " px ";
}
function scrollpos(){
    return document.getElementById('ba').innerHTML= scrolltop1();
}
window.addEventListener("scroll",scrollpos);