var strA = "";
var strB = "";
var strC = "";
var strD = "";
var strAll = "";
var arr;

function setup(n) { //탭에 맞는 list를 set하기 위한 함수
    var temp;
    if (n == 1) {
        temp = strAll;
    }
    else if(n == 2) {
        temp = strA;
    }
    else if (n == 3) {
        temp = strB;
    }
    else if (n == 4) {
        temp = strC;
    }
    else if (n == 5) {
        temp = strD;
    }
    arr = temp.split("/");
    maketable(arr); //list set 후 테이블 생성
}

function maketable(arr) { // 테이블을 생성하는 함수
    var tbody = document.getElementById("table");
    tbody.innerHTML = "";
    for (i = 0; i < arr.length; i++) {
        var temp = "<tr onclick='copyToClipboard(" + i +");'><td>" + i + "</td>" + "<td>" + arr[i] + "</td></tr>";
        tbody.innerHTML += temp;
    }
}

/*
    source : https://github.com/shangus1012/manga
    제작자 : 만갤 여주학대만화추천(rmh0102)
    모든 소스코드는 직접 작성한 것이고, 출처는 지워도 상관 없습니다.
    그러나 정보 공유를 위해 누군가 물어본다면 출처를 표기해 주세요. 감사합니다.
*/