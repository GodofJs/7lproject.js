function print(string) {
    document.write(string + "<br>");
}

function rand(start, end) { // 2 , 9
    var rnd = start + Math.floor(Math.random() * (end - start));
    return rnd;
}


//TODO : while

/*var num = 1;

while(num < 20){
    print(num);
    num++;
}*/


//TODO : do while

/*var num = 20;

do{
    print(num);
    num--;
}while( num > 1);*/


//TODO : for

/*for(var x = 1 ; x <= 25 ; x++ ){
    print(x);
}*/

//TODO : for in

/*var arr = [5 , 8 , 4 , 2 , 1];
for(i in arr){
    print(arr[i] + '*');
}*/


//TODO : break

/*while(1){
    var num = rand(2,9);
    alert(num);
    if(num == 2){
        break;
    }
    //or can you write alerct
}*/


//TODO : continue (چاپ اعداد فرد آرایه)

/*var arr = [5 , 8 , 4 , 2 , 1 , 7 , 6 , 3];
for( i in arr){
    if(arr[i] % 2 == 0){
        continue;
    }
        alert(arr[i]);
}*/


//TODO : Mini Project Loop(نمایش حاصل ضرب هریک از اعضای ارایه های دوبعدی در ده)

/*var arr = [[1, 2, 3, 4],[10, 20, 5],[30, 10]];
var i,j ;
 
for(i=0 ; i<arr.length; i++){
    document.write("<div class='div'>");
    for(j=0 ; j<arr[i].length ; j++){
        arr[i][j] *= 10;
        document.write("<span class='span'>"+ arr[i][j] +"</span>");
    }
    document.write("</div>");
}*/


//TODO : Mini project Loop 1 (نمایش حاصل جمع هر یک از آرایه های دو بعدی با حلقه فور این)

var arr = [[1, 2, 3, 4],[10, 20, 5],[30, 10]];
var i ;
 
for(i=0 ; i<arr.length; i++){
    var x ;
    for(x in arr){
        x = arr[i];
        var total = 0;
        for(var z in x){
            total += x[z];
        }
    }
    print(total);
}


//TODO : Mini project Loop 2 (نمایش حاصل جمع هر یک از آرایه های دو بعدی با حلقه فور)

/*var arr = [[1, 2, 3, 4],[10, 20, 5],[30, 10]];
var i;

for(i = 0 ; i < arr.length; i++){
   var x = "";
   for( x = 0; x < arr[i].length; x++){
       x = arr[i];
       var total = 0;
       for(var z = 0; z < x.length; z++ ){
           total += x[z];
       }
   }
   print(total);
}*/


//TODO : Mini Project Loop 4( نمایش حاصل جمع و زوج و مفرد بودن هریک از ارایه های دوبعدی )

/*
var arr = [[1, 2, 3, 4], [10, 20, 5], [30, 10]];
var i;

for (i in arr) {
    var x = "";
    for (x in arr) {
        x = arr[i];
        var total = 0;
        for (var z in x) {
            total += x[z];

        }

    }
    if (total % 2 == 0) {
        print("is even");
    } else {
        print("is odd");
    }
    print(total);
}
*/


//TODO : Mini Project Loop 5( نمایش عضو آخر هریک از ارایه های دوبعدی )


/*var arr = [[1, 2, 3, 4], [10, 20, 5], [30, 10]];
var i;

for (i in arr) {
    var x = "";
    for (x in arr) {
        x = arr[i];
        // var total = 0;
        for (var z in x) {
            var total = 0;
            total += x[z];

        }

    }
    if (total % 2 == 0) {
        print("is even");
    } else {
        print("is odd");
    }
    print(total);
}*/
