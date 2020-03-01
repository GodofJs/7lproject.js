function rand(start, end) { // 2 , 9
    var rnd = start + Math.floor(Math.random() * (end - start));
    return rnd;
}


function startGame() {
    var mosq = document.getElementById('mosq');
    var spider = document.getElementById('spider');
    mosq.style.top = rand(0, window.innerHeight - 50) + "px";
    mosq.style.left = rand(0, window.innerWidth - 200) + "px";
    spider.style.top = rand(0, window.innerHeight - 50) + "px";
    spider.style.left = rand(0, window.innerWidth - 200) + "px";
    alert("به بازی پشه کشی خوش اومدید!\nسعی کنید هر چه سریعتر پشه رو نابود کنید ")
}

function handleKeys(e) {
    if (e.keyCode === 37) {
        moveSpider('left')
    } else if (e.keyCode === 38) {
        moveSpider('up')
    } else if (e.keyCode === 39) {
        moveSpider('right')
    } else if (e.keyCode === 40) {
        moveSpider('down')
    }
    if (youWin()) {
        alert("شما برنده شدید، بنابراین بازی رفرش میشود");
        location.reload()
    }
}

function moveSpider(direction) {
    var spider = document.getElementById('spider');
    var d = 10;
    switch (direction) {
        case "left":
            spider.style.left = spider.offsetLeft - d + "px";
            if(spider.offsetLeft < 0){
                spider.style.left = window.innerWidth + "px";
               }
            break;
        case "up":
            spider.style.top = spider.offsetTop - d + "px";
            if(spider.offsetTop < 0){
                spider.style.top = window.innerHeight + "px";
               }
            break;
        case "right":
            spider.style.left = spider.offsetLeft + d + "px";
            if(spider.offsetLeft > window.innerWidth){
                spider.style.left = 0 + "px";
               }
            break;
        case "down":
            spider.style.top = spider.offsetTop + d + "px";
            if(spider.offsetTop > window.innerHeight){
                spider.style.top = 0 + "px";
               }
            break;
    }
}

function youWin() {
    var mosq = document.getElementById('mosq');
    var spider = document.getElementById('spider');
    if (Math.abs(mosq.offsetTop - spider.offsetTop) < 20 && Math.abs(mosq.offsetLeft - spider.offsetLeft) < 20) {
        mosq.style.backgroundColor = "#FC4C4C";
        return true
    }
    return false;
}
