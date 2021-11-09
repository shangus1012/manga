var strA = "";
var strB = "";
var strC = "";
var strD = "";
var strAll = "";

var arrA;
var arrB;
var arrC;
var arrD;
var arrAll;

var arrT;

//탭에 맞는 list를 불러오기 위한 함수
function setup(n) { 
    if (n == 1) {
        maketable(arrAll);
    }
    else if(n == 2) {
        maketable(arrA);
    }
    else if (n == 3) {
        maketable(arrB);
    }
    else if (n == 4) {
        maketable(arrC);
    }
    else if (n == 5) {
        maketable(arrD);
    }
}

// 테이블을 생성하는 함수
function maketable(arr) { 
    var tbody = document.getElementById("table");
    tbody.innerHTML = "";
    for (i = 0; i < arr.length; i++) {
        var temp = "<tr onclick='copyToClipboard(" + i +");'><td>" + i + "</td>" + "<td>" + arr[i] + "</td></tr>";
        tbody.innerHTML += temp;
    }
    arrT = arr;
}

/*
    source : https://github.com/shangus1012/manga
    제작자 : 만갤 여주학대만화추천(rmh0102)
    모든 소스코드는 직접 작성한 것이고, 출처는 굳이 지워야만 한다면 상관 없습니다.
    누군가 물어본다면 정보 공유를 위해서 출처를 표기해 주세요. 감사합니다.
*/