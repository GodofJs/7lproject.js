// Function Declaration
function rand(start, end) { // 2 , 9
    var rnd = start + Math.floor(Math.random() * (end - start));
    return rnd;
}

function nicePrint() {
    for (var i in arguments) {
        var temp = arguments[i];
        if (typeof temp == "object") {
            document.write("{ ")
            for (var j in temp) {
                document.write(j + ":" + temp[j]);
                if (j != temp.length - 1) {
                    document.write(" , ");
                }
            }
            document.write(" }")
        } else {
            document.write(temp + " &nbsp; &nbsp; ");
        }
    }
    document.write("<br>");
}

function loadJsCss(fileUrl, fileType) {
    if (fileType == "js") {
        var elm = document.createElement('script')
        elm.setAttribute("type", "text/javascript")
        elm.setAttribute("src", fileUrl)
    } else if (fileType == "css") {
        var elm = document.createElement("link")
        elm.setAttribute("rel", "stylesheet")
        elm.setAttribute("type", "text/css")
        elm.setAttribute("href", fileUrl)
    }
    if (typeof elm != "undefined")
        document.getElementsByTagName("head")[0].appendChild(elm)
}

function getHexCode(ch) {
    return ch.charCodeAt(0).toString(16);
}

function arraySum(arr) {
    var i, arrSum = 0;
    for (i = 0; i < arr.length; i++) {
        arrSum += arr[i];
    }
    return arrSum;
}

function arrayAvg(arr) {
    return arraySum(arr) / arr.length;
}


// Fade Animations
function myFadeIn(elem) {
    var elemOpacity = Number(getComputedStyle(elem).opacity).toPrecision(2);
    elem.style.opacity = elemOpacity;
    if (elemOpacity >= 1) {
        return;
    }
    elem.style.opacity = Number(elemOpacity) + 0.01;
    setTimeout(function () {
        myFadeIn(elem)
    }, 10)
}

function myFadeOut(elem) {
    var elemOpacity = Number(getComputedStyle(elem).opacity).toPrecision(2);
    elem.style.opacity = elemOpacity;
    if (elemOpacity <= 0) {
        return;
    }
    elem.style.opacity = Number(elemOpacity) - 0.01;
    setTimeout(function () {
        myFadeOut(elem)
    }, 10)
}
Element.prototype.fadeIn = function () {
    myFadeIn(this);
}
Element.prototype.fadeOut = function () {
    myFadeOut(this);
}


// smoothScroll
function smoothScrollTo(yPos) {
    var step = 20;
    if (yPos < scrollY) {
        step *= -1;
    }
    if (Math.abs(yPos - scrollY) <= step) { // stop Condition
        return;
    }
    window.scrollBy(0, step);
    setTimeout(function () {
        smoothScrollTo(yPos)
    }, 3);
}
function print(string){
	document.write(string+"<br>");
}
