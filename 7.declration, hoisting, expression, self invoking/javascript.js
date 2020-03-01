/*function print(string) {
    document.write(string + "<br>");
}*/

function rand(start, end) { // 2 , 9
    var rnd = start + Math.floor(Math.random() * (end - start));
    return rnd;
}



//TODO : تابع چاپ حاصل جمع اعضای آرایه های دو بعدی بصورت مستقل از هم  

/*#note : با صدا کردن تابع مورد نظر و دادن یک آرایه دوبعدی به عنوان آرگومان تابع, حاصل جمع اعضای هر آرایه دوبعدی را به صورت مستقل از هم چاپ میکند */

/*function arraysum(array) {
    for (var i = 0; i < array.length; i++) {
        var x = "";
        for (x in array) {
            x = array[i];
            var total = 0;
            for (var z in x) {
                total += x[z];
            }
        }
        print(total);
    }
}

var s1 = [[1, 2, 3, 10], [20, 40], [100, 50]];
arraysum(s1);*/



//TODO :تابع چاپ حاصل جمع اعضای یک ارایه تک بعدی

/*#note : پارامتر ورودی لازم به تعریف شدن نیست*/

/*
var x =0;
function arraysum1(array){
    for(var i in array){
        x += array[i];
    }
    print(x);
}
var s2 =[1,2,3,4,5,8];
arraysum1(s2);
*/



//TODO : تابع چاپ میانگین اعضای یک ارایه تک بعدی


/*function avgsum(array) {
    var total = 0;
    for (var i in array) {
        total += array[i];
    }
    print(total / array.length);
}
var s1 = [6, 10, 4];
avgsum(s1);*/



//TODO : تابع مخصوص برای نمایش میانگین آرایه های داخلی از نوع دوبعدی

/*
function avgsum2D(array) {
    for (var i in array) {
        var x = "";
        for (x in array) {

            x = array[i];
            var total = 0;
            for (var z in x) {
                total += x[z];
            }
        }
        print("index of array " + i + " sum array is = " + total);
        print("average of array = " + total / array[i].length);
    }
}


var s1 = [[1, 2, 3], [10, 20]];
avgsum2D(s1);
*/



//TODO : Expression function (عبارت تابعی)

/*#note : مرسوم است که از توابع انومینوس فانکشن یا در واقع از توابع بدون نام برای ایجاد اکسپرس فانکشن استفاده کرد*/

/*var b1 = function (a,b){
    return a+b;
}
print(b1(2,7));*/



//TODO: self invoking function(تابع خود صدا زننده)

/*#note :  توابع خود صدازننده در هنگام صدا زدنشان در اخر تعریف تابع، نمیتوان با نامشان صدا زد*/

/*(function call2(name1, color) {
    print("<span style='font-weight:bold'>hi</span> mr <span style='color:" + color + "'>" + name1 + "</span>")
}("hamed", "red"));*/



//TODO : مقدار دهی پیشفرض به پارامتر های ورودی در صورت تعریف نشدن تعداد کافی از آرگومان

/*#NOTE : در اینجا به اندازه پارامتر های ورودی که در تعریف تابع ایجاد کردیم ، مقدار دهی پیشفرض انجام دادیم که اگر یوزر در هنگام صدا زدن فقط یک آرگومان بکار ببرد، تداخلی در محاسبه ایجاد نشود*/

/*function sum3(a,b,c){
    if(a === undefined){
       a = 0;
       }
    if(b===undefined){
                b = 0;
                }
   if(c===undefined){
       c=0;
   }
    return a+b+c;
}
print(sum3(20,10));*/



//TODO : ایجاد امکان استفاده از تعداد آرگومان های نامحدود حتی با تعریف یک پارامتر ورودی در تابع

/*#NOTE : در این تابع به وسیله شی ارگومنت و گذاشتن آن در حلقه، این امکان وجود دارد که به هر مقدار دلخواه ارگومان به تابع داد تا حاصل جمع را بدست آورد*/

/*
function sumUnlimited(a) {
    var total = 0;
    for (var i in arguments) {
        total += arguments[i];
    }
    return total;
}
print(sumUnlimited(10, 20, 30, 40, 20));
*/



//TODO : تابع مخصوص برای نمایش اعضای داخلی هرتعداد آرگومانی که به تابع داده میشود

/*function print2() {
    for (var i in arguments) {
        var total = "";
        for (var x in arguments) {
            total = arguments[i];
            var total2 = "";
            for (var z in total) {
                total2 += total[z] + "<br/>"
            }
        }
        document.write(total2);
    }

}
var s1 = [1, 2, 3, 4, [10]];
var s2 = [5, 6, 7, 8];
print2(s2);*/



//TODO : تابع مخصوص برای نمایش ارگومان هایی که به صورت مستقیم در تابع قرار داده می شوند

/*function print3(String) {
    var total = "";
    for (var i in arguments) {
        total += arguments[i] + "<br/>";

    }
    document.write(total);
}
print3(1, 2, 3);*/




//TODO : (#1) تابع مخصوص برای نمایش هر تعداد آرگومان از هر نوع

/*function print2(s) {
    for (var i in arguments) {
        var total = "";
        for (var x in arguments) {
            total = arguments[i];
            var total2 = "";
            for (var z in total) {
                total2 += total[z] + "<br/>"
            }
        }
        if (typeof arguments[i] === 'number') {
            var total = "";
            total += arguments[i] + "<br/>";
            document.write(total);
        } else if (typeof arguments[i] === 'string') {
            var total = "";
            total += arguments[i]
            document.write(total);
        } else {
            document.write(total2);
        }
    }

}
var s1 = [1, 2, 3, 4, [10]];
var s2 = [5, 6, 7, 8];
print2(s1);
print2(1, 2, 3);
print2("SALAM");*/




//TODO : تابع مخصوص برای ایجاد یک پرینت کننده همه کاره که بتوانید هر نوع ارگومانی که بهش میدهی را چاپ یا نمایش بدهد

/*function printAll() {
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
printAll({  name: "hamed", age: 25}, 1, 2, 3, true, "hamed");*/




//TODO : Function Override in javascript ? window.print!
   
/* var originalPrint = print;
    print = function () {
        if (confirm("Are You Sure to Print This Page ?")) {
            return originalPrint();
        }
    }
    print();*/






//TODO : Recursive functional 

/*
function factorial(n) {
    if (n == 1) {
        return 1
    }
 return n * factorial(n - 1)
}
alert(factorial(6));
*/




//TODO : (#2) باز نویسی تابع پرینت با اضافه کردن اجازه گرفتن برای نمایش    

/*function myPrint(n) {
    if (confirm("حامد جان مطمعن هستی که میخوای نمایش تابع پرینت رو ببینی؟") === true) {
        document.write("دمت گرم")
        return window.print()
    } else {
        alert(n)
    }

}
myPrint("im sorry");*/


/*var originalPrint = print;
    var mPrint = function () {
        if (confirm("Are You Sure to Print This Page ?")) {
            return originalPrint();
        }
        return false;
    }
    mPrint();*/


//TODO :(#3) تابع مخصوص برای به توان رساندن دو آرگومانی که میگیرد، این تابع از طریق تابع بازگشتی ساخته شده است

function tavan(a, b) {
    if (b == 1) {
        return a
    }
    return a * tavan(a, b - 1);
}
alert(tavan(2, 3));



//TODO : ترسیم فلوچارت تابع بازگشتی مخصوص برای به توان رساندن


/*function tavan(a, b) {
    if (b == 1) {
        return a
    }
    return a * tavan(a, b - 1);
}
alert(tavan(3, 5));

5! == >                                                                                                                                3 *81 = 243 
        5 * 4! ==>                                                                                                     3 *27  = 81            
                    4*3! ==>                                                                           3 *9 = 27 
                                3*2!==>                                                 3 * 3 = 9
                                            2*1! = 1  ===> return 1 ====>       3*1 = 3
                                                                              
                                                          */






//TODO : تابع مخصوص برای نمایش مقادیر آرگومان ها به همان شکل خود به صورت تفکیک از هم در یک خط
/*
#NOTE : در این تابع شما میتوانید هر تعداد متغییری که حاوی آرایه دوبعدی می باشد قرار دهید، که خواهی دید که این تابع، مقادیر متغییر ها را به صورت مستقل از هم به همان شکل که هستند نمایش می دهد
*/

/*function edghamSepArr() {

    for (var i in arguments) {
        var total = "";
        for (var x in arguments) {
            total = arguments[i];
            var total2 = "";
            for (var z in total) {
                total2 += "[" + total[z] + "]"
            }
        }
        document.write("[" + total2 + "]" + ",");
    }

}
var s1 = [[1, 2], [3]];
var s2 = [[4, 5], [7]];
edghamSepArr(s1, s2);*/





//TODO :تابع مخصوص برای الحاق ارایه های دوبعدی به صورت یک ارایه تک بعدی

/*
function edghamArr() {
    var fullStak = ""
    for (var i in arguments) {
        var total = "";
        for (var x in arguments) {
            total = arguments[i];
            var total2 = "";
            for (var z in total) {
                total2 += total[z] + ",";
            }
        }
        fullStak += total2;
    }
    fullStak = fullStak.substring(0, fullStak.length - 1);
    document.write(fullStak + "]");
}
var s1 = [[1, 2], [3]];
var s2 = [[4, 5], [7]];
var s3 = [[8, 9], [10]]
document.write("[");
edghamArr(s1, s2, s3);
*/
