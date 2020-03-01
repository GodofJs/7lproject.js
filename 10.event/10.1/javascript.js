//TODO = گرفتن عرض و ارتفاع پنجره مرورگر به هنگام رویداد اتمام لود شدن صفحه و تغییر سایز پنجره و نمایش آن در دکمه
/*#NOTE : قاعده کلی در رویداد نوشتن : به هنگام رویداد اسکرول کردن، فانکشنی اجرا شود که ان فانکشن میگوید درکجا چه چیزی اجرا شود، که برای اینکه مشخص کنیم چه چیزی اجرا شود به صورت جدا گانه یک تابع دیگر نوشتیم */


function getDimentionSample(){
    return "window size is " + window.outerWidth + " x " +  window.outerHeight ;
}
function getDimentionDynamic(){
    document.getElementById('ba').innerHTML=getDimentionSample()
}
window.addEventListener('resize',getDimentionDynamic)