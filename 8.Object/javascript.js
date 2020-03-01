function print(string) {
    document.write(string + "<br>");
}

function rand(start, end) { // 2 , 9
    var rnd = start + Math.floor(Math.random() * (end - start));
    return rnd;
}



/*var carBrand = "BMW",
            carModel = "X3",
            carName = carBrand + " " + carModel,
            carID = "bmw334345",
            carColor = "White",
            carOptions = ['airbags', 'sunroof', 'abs', 'ebd', '...'];

    function goForward(carID) {
        nicePrint("Car " + carID + " : go Forward !")
    }

    function TurnRight(carID) {
        nicePrint("Car " + carID + " : Turn Right !")
    }

    function printCarOptions(carOptions){
        nicePrint("-----Car Options-----")
        for(var i in carOptions){
            nicePrint(carOptions[i]);
        }
        nicePrint("-------------------------")
    }

    goForward(carID);
    TurnRight(carID);
    printCarOptions(carOptions);*/




//TODO : نحوه استفاده از حلقه برای پیمایش در ویژگی ها و مقادیر ویژگی ها در یک شی که از کلاس اختصاصی که خودمان تعریف کردیم
/*#NOTE : در اینجا با استفاده از شرط ادامه، از چاپ شدن متود ها جلوگیری کردیم*/
/*function Khodro() {
    this.Brand = " BMW";
    this.Model = "X3 ";
    this.Name = this.Brand + " " + this.Model;
    this.ID = "bmw334345";
    this.Color = "White";
    this.GoForward = function () {
        alert(this.Name + " is going to forward");
    }
    this.PrintCatalog = function () {
        for (var i in this) {
            if (this[i] == this.GoForward || this[i] == this.PrintCatalog) {
                continue;
            }
            print(i + " : " + this[i]);
        }

    }
}

var car1 = new Khodro();
car1.PrintCatalog();*/




//TODO : ساخت دکمه ای که با کلیک کردن بر روی آن باعث ایجاد دکمه هایی با پس زمینه و متون رنگی مختلف شود

function btnGnarator() {
    var btn = document.createElement("button");
    var text = document.createTextNode("btn" + rand(0, 20));
    btn.appendChild(text);
    btn.className = "pure-button";
    btn.style.margin = "1%";
    var randomBgColor = "rgb(" + rand(0, 255) + "," + rand(0, 255) + "," + rand(0, 255) + ")";
    var randomColor = "rgb(" + rand(0, 255) + "," + rand(0, 255) + "," + rand(0, 255) + ")";
    btn.style.backgroundColor = randomBgColor;
    btn.style.color = randomColor;
    document.body.appendChild(btn);
}
