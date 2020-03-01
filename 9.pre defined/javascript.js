function sum1(a,b){
    return a+b;
}

function printAll() {
    for (var i in arguments) {
        var temp = arguments[i];
        if (typeof temp == "object") {
            document.write(" { ");
            for (var j in temp) {
                document.write(j + " : " + temp[j]);
                if (j != temp.length - 1) {
                    document.write(" , ");
                }
            }
            document.write(" } ");
        } else {
            document.write(temp + "&nbsp" + "&nbsp")
        }
    }
    document.write("<br/>")
}


//TODO : eval
/*#NOTE : تابع ایول میتواند چندین مقدار رشته ای را بگیرد و با آنها به صورت عدد رفتار کند، برای جدا ساختن دستورات، بایستی از سیمکالن استفاده کرد*/

/*var s1 = eval(prompt("یک عدد وارد کنید"));
var s2 = eval(prompt("دومین عدد خود را وارد کنید"));
alert(sum1(s1,s2));*/



//TODO : Number
/*#NOTE : این تابع نیز به مانند تابع ایول، مفادیر رشته ای را به عدد تبدیل میکند */

/*var s1 = Number(prompt("یک عدد وارد کنید"));
var s2 = Number(prompt("دمین عدد خود را وارد کنید"));
alert(sum1(s1,s2));*/



//TODO : parseint
/*#NOTE : این تابع نیز به مانند تابع ایول و نامبر، مفادیر رشته ای را به عدد تبدیل میکند */

/*var s1 = parseInt(prompt("یک عدد وارد کنید"));
var s2 = parseInt(prompt("دمین عدد خود را وارد کنید"));
alert(sum1(s1,s2));*/



//TODO : parsefloat
/*#NOTE : این تابع مفادیر رشته ای از نوع اعشاری را به عدد اعشاری تبدیل میکند */

/*var s1 = parseFloat(prompt("یک عدد وارد کنید"));
var s2 = parseFloat(prompt("دمین عدد خود را وارد کنید"));
alert(sum1(s1,s2));*/



//TODO : srting
/*#NOTE : این تابع مفادیر عددی را به مقادیر رشته ای تبدیل میکند  با این تفاوت که محسابات عددی را انجام میدهد ولی در نهایت نوع داده رشته ای میشود */

/*var s1 = 1
var s2 = 2
alert(typeof String(s1+s2));*/



//TODO : encodeURL & decodeURL

/*var url = "https://www.varzesh3.com/newspaper/Piroozi/1398-06-02/%D9%BE%DB%8C%D8%B1%D9%88%D8%B2%DB%8C";
document.write("URL : "+url + "<br/>");
var encode = encodeURI(url);
document.write("encodeURL : "+encode +"<br/>");
"<br/>"
var decode = decodeURI(url);
document.write("decodeURL : "+decode);*/



//TODO : isfinite
/*#NOTE : اگر عدد محدود بگیرد ترو برمیگرداند ولی اگر پارامتر غیر عددی و یا عدد نامحدود بگیرد، فالز برمیگرداند*/

/*var s1 = -10;
var s2 = "salam";
alert(isFinite(s1));*/



//TODO : isNaN
/*#NOTE : اگر پارامتری که بهش میدهیم غیر عدد باشد، ترو بر میگرداند و در غیر اینصورت مقدار فالز را بر میگرداند*/

/*var s1 = -10;
var s2 = "salam";
alert(isNaN(s2));*/




//TODO : round
/*#NOTE : این تابع میاد اعداد اعشاری رو میگیره و با توجه به قسمت اعشاری که به کدام عدد نزدیک هست ، گرد یا رند میکند*/

/*document.write(Math.round(2.50)+"<br/>");
document.write(Math.round(2.49)+"<br/>");*/



//TODO :floor
/*#NOTE : عدد اعشاری را میگیرد و به یک عدد صحیح که به کف رسیده است، تبدیل می کند */

/*document.write(Math.floor(2.50)+"<br/>");
document.write(Math.floor(2.49)+"<br/>");*/



//TODO : abs
/*#NOTE :  قدر مطلق یک عدد را برمیگرداند به عبارت دیگر ، هر عدد منفی را به مثبت تبدل می کند */ 

/*document.write(Math.abs(-3)+"<br/>");*/



//TODO : pow
/*#NOTE : دو پارامتر عددی میگیرد، عدد اول را به توان عدد دوم میرسانذ*/

/*document.write(Math.pow(2,3)+"<br/>");*/



//TODO : max & min
/*#NOTE : مجموعه اعدادی که بهش دادیمو میاد بزرگترین عدد و کوچکترین عدد را می گرداند*/

/*document.write(Math.max(2,3,6,8,9)+"<br/>");
document.write(Math.min(2,3,6,8,9)+"<br/>");*/



//TODO : random
/*#NOTE : متود رندوم میاد یک عدد را بین صفر تا یک انتخاب میکند، ما در اینجا حاصل تابع رندوم را ضرب در صد کردیم که بجای اینکه سمت چپ اعشار، صفر ایجاد شود، یک عدد دورقمی ایجاد شود*/ 

/*document.write(Math.random()*100+"<br/>");*/



//TODO : toString
/*#NOTE : یک مقدار بولین و یا نامبر را به مقداری از نوع رشته ای تبدیل میکند*/

/*var s1 = true;
document.write(s1.toString()+"<br/>");
document.write(typeof s1.toString()+"<br/>");
document.write(typeof s1+"<br/>");*/



//TODO : valueOf
/*#NOTE : مقدار یک متغییر که از نوع بولین و نامبر باشد را میدهد */
/*var s1 = true;
document.write(s1.valueOf()+"<br/>");
document.write(typeof s1.valueOf()+"<br/>");*/



//TODO : toFixed
/*#NOTE : از متود های کلاس نامبر میباشد که مشخص میکند عدد با چه تعداد ارقام اعشار نمایش داده شود*/

/*var s1 = Math.random()*100;
document.write(s1+"<br/>");
document.write(s1.toFixed(2));*/



//TODO : charAt
/*#NOTE : یکی از متود های شی استرینگ میباشد که با گرفتن ایندکس عددی، کاراکتر متناسب با ایندکس آن شی رشته ای را میدهد*/

/*var s = "hamed";
alert(s.charAt(0));*/



//TODO : charCodeAt
/*#NOTE : یکی از متود های شی استرینگ میباشد که با گرفتن ایندکس عددی، کد کاراکتر آن حرف از مقدار رشته ای در استاندارد کد اسکی را می دهد،*/

/*var s = "hamed";
alert(s.charCodeAt(0));*/




//TODO : concat
/*#NOTE : یکی از متود های شی رشته ای و ارایه ها که کارش الحاق کردن مقدار یک متغییر به مقدار یک متغییر دیگر می باشد */

/*var s = "we love";
printAll(s.concat(" www.7learn.com"));

var s1 =["hamed","amir","ali"];
var ages =[26,12,18];
printAll(s1.concat(ages));*/




//TODO : push
/*#NOTE : به انتهای آرایه میتواند اعضایی را اضافه کند */ 

/*var s1 =["hamed","amir","ali"];
s1.push("sara","zahra")
printAll(s1);*/



//TODO : unshift
/*#NOTE :  به ابتدای آرایه میتواند اعضایی را اضافه کند*/

/*var s1 =["hamed","amir","ali"];
s1.unshift("mohammad");
printAll(s1);*/



//TODO : fromCharCode
/*#NOTE : این متود با شی استرینگ می اید. یک کد اسکی میگیرد و کاراکتر مربوطه را نسان می دهد */

/*printAll(String.fromCharCode(100));*/



//TODO : indexOf , search
/*#NOTE :  به همراه متغیر رشته ای میاد ، وظیفش این هست که کاراکتری که بهش میدی رو میاد داخل متغییر رشته ای میگرده و ایندکس آن را برمیگرداند. اگر ان کاراکتر وجود خارجی نداشته باشد، مقدار 1- را بر میگرداند*/

/*var s = "we love";
printAll(s.indexOf("w"));*/



//TODO : replace
/*#NOTE : یکی از متود های ارایه و استرینگ میباشد که دو مقدار میگیرد، مقدار دوم جایگزین مقدار اول که در مقدار متقغییر موجود است میشود */

/*var s = "www.7learn.com";
printAll(s.replace("7learn","google"));*/



//TODO : slice
/*#NOTE : تکه ای از مقدار متغییر را جدا میکند ، به وسیله دو ایندکسی که میگیرد */

/*var s = "hamedalavi";
printAll(s.slice(0,4));*/



//TODO : split
/*#NOTE : این متود میاد مقداری که میگیرد رو در متغیر جستجو میکند و با هر بار پیدا کردن آن مقداری که بهش دادیم، یکی به آرایه اظافه میکند و یعدش یک علامت کاما میگذارد*/

/*var s = "hamedalavi*maryamheydari*alinajafi";
document.write(s.split("*");*/



//TODO : join
/*#NOTE : این متود براساس مقدار رشته ای که بهش میدیم میاد هر یک از اعضای ارایه رو با ان مقداری که دادیم جدا می کن ، ئدرواقع برعکس متود اسپلیت هست یعنی ارایه را به رشته تبدیل میکند*/ 

/*var s1 =["hamed","amir","ali"];
printAll(s1.join(" & "));*/



//TODO : substr
/*#NOTE : دو ایندکس میگرد و به واسطه دو ایندکس، که ایندکس اول شروع زیر مجموعه سازی رشته ای است و ایندکس دوم تعداد کاراکتری که از ایندکس اول باید به سمت جلو برود است */

/*var s = "hamedalavi";
printAll(s.substr(0,3));*/



//TODO : substring

/*var s = "hamedalavi";
printAll(s.substring(0,3));*/
               
 

//TODO : pop;
/*#NOTE : عضو اخر ارایه را از متغییر میگیرد یا به عیبارتی از متغییر حذف میکند */

/*var s1 =["hamed","amir","ali"];
s1.pop();
printAll(s1);*/



//TODO : shift
/*#NOTE : عضو اول آرایه را میگیرد یا به عبارتی از آرایه حذف میکند*/

/*var s1 =["hamed","amir","ali"];
s1.shift();
printAll(s1);*/



//TODO : reverse
/*#NOTE : از لحاظ موقعیتی، موقعیت اعضای ارایه رو معکوس میکند*/

/*var s1 =["hamed","amir","ali"];
s1.reverse();
printAll(s1);*/



//TODO : trim
/*#NOTE : فضای های خالی بیهوده در دو طرف مقدار متغیر رشته ای را حذف میکند */

/*var s = "    hamed alavi !    ";
printAll(s.trim());*/



//TODO : toUpperCase
/*#NOTE : تمام کاراکتر های متغییر رشته ای را به حروف بزرگ تبدیل مییکند*/

/*var s = "hamedalavi";
printAll(s.toUpperCase());*/






