var m = 0, f = -1, FM = 0, previous = 0;

// 選女角
function choose0() {
    FM = 0;
    document.getElementById("character_select").style.display = 'none';
    document.getElementById("mainP").style.display = 'initial';
    document.getElementById("td0").src = 'image/F.gif';
    document.getElementById("td0").className += 'inverseI';
    document.getElementById("td0").style.width = '35%';
}

// 選男角
function choose1() {
    FM = 1;
    document.getElementById("character_select").style.display = 'none';
    document.getElementById("mainP").style.display = 'initial';
    document.getElementById("td0").src = 'image/M.gif';
    document.getElementById("td0").className += 'inverseI';
    document.getElementById("td0").style.width = '35%';
}

// 隨機
function randomP() {
    if (f != -1) {
        var n = Math.floor(Math.random() * 16);
        m++;
        document.getElementById("fate").innerHTML = '第 ' + m + ' 抉擇 <span class="glyphicon glyphicon-refresh"></span>';
        if (n == 15) {
            final();
        } else if (n == previous && n != 14) {
            description(n + 1);
        } else if (n == previous && n == 14) {
            description(n - 1);
        } else {
            description(n);
        }
    } else {
        window.alert("請至少先到一個地方看看！");
    }
}

// 上一頁
function prev() {
    previous = f;
    if (f == 0) {
        window.alert("不要只會回頭！");
    } else if (f == 15) {
        window.alert("往事不堪回首！");
    } else {
        f--;
        description(f);
    }
}

// 下一頁
function next() {
    previous = f;
    if (f == 15) {
        window.alert("你已沒有未來！");
        location.reload();
    } else if (f == 14) {
        f++;
        final();
    } else {
        f++;
        description(f);
    }
}

// 開啟介紹頁
function description(stage) {
    $("#myCarousel").slideUp("fast");
    $("#start").slideUp("fast");
    document.getElementById("updown").style.display = 'initial';
    document.getElementById("gotop").style.display = 'initial';
    f = stage;
    showP(f);
    jQuery("html,body").animate({
        scrollTop: 0
    }, 700);
    var x = stage + 1;
    figure(x);
    previous = f;
}

// 介紹頁
function showP(which) {
    var allP = new Array;
    allP[0] = document.getElementById("d1");
    allP[1] = document.getElementById("d2");
    allP[2] = document.getElementById("d3");
    allP[3] = document.getElementById("d4");
    allP[4] = document.getElementById("d5");
    allP[5] = document.getElementById("d6");
    allP[6] = document.getElementById("d7");
    allP[7] = document.getElementById("d8");
    allP[8] = document.getElementById("d9");
    allP[9] = document.getElementById("d10");
    allP[10] = document.getElementById("d11");
    allP[11] = document.getElementById("d12");
    allP[12] = document.getElementById("d13");
    allP[13] = document.getElementById("d14");
    allP[14] = document.getElementById("d15");

    allP[previous].style.display = 'none';
    allP[which].style.display = 'initial';
}

// 人物走動
function figure(character) {
    var mapGameT = document.getElementById("mapGameT");
    var prevc = previous + 1;
    mapGameT.rows[0].cells[0].innerHTML = '<img src="image/circle.jpg" />';
    mapGameT.rows[0].cells[prevc].innerHTML = '<img src="image/circle.jpg" />';
    console.log(FM);
    if (FM == 0) {
        mapGameT.rows[0].cells[character].innerHTML = '<img src="image/F.gif" class="inverseI" style="width:35%; padding: 0 0 8% 0" />';
    } else if (FM == 1) {
        mapGameT.rows[0].cells[character].innerHTML = '<img src="image/M.gif" class="inverseI" style="width:35%; padding: 0 0 8% 0" />';
    }
}

// 終點
function final() {
    document.getElementById("d15").style.display = 'none';
    var prevc = previous + 1;
    mapGameT.rows[0].cells[prevc].innerHTML = '<img src="image/circle.jpg" />';
    mapGameT.rows[0].cells[0].innerHTML = '<img src="image/circle.jpg" />';
    if (FM == 0) {
        mapGameT.rows[0].cells[16].innerHTML = '<img src="image/F.gif" class="inverseI" style="width:50%; padding: 0 0 12% 0" />';
    } else if (FM == 1) {
        mapGameT.rows[0].cells[16].innerHTML = '<img src="image/M.gif" class="inverseI" style="width:50%; padding: 0 0 12% 0" />';
    }
    window.alert("恭喜你抵達終點\n但你甚麼也沒有得到\n哈哈~");
    location.reload();
}