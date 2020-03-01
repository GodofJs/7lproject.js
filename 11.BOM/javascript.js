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
var framee = window.frameElement;
var iframes = window.frames;
nicePrint(iframes[0].framee.id);
nicePrint(iframes[1].frameElement.id);
nicePrint(iframes[2].frameElement.id);