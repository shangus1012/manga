//sleep
function sleep(ms) {
    return new Promise(function (resolve) {
        return setTimeout(resolve, ms);
    });
}

//1ms 쉬고 calcHeight() 호출, 비동기 함수이므로 이 함수가 본문에서 호출된 직후 그 다음 동작이 먼저 실행된다.
function test() {
    sleep(1).then(() => calcHeight());
}


//iframe으로 불러온 hyperlink.html의 height를 구하고 이를 iframe의 height에 적용
function calcHeight() {
    var the_height = document.getElementById('the_iframe').contentWindow.document.body.scrollHeight;
    document.getElementById('the_iframe').height = the_height + 20;
    return 1;
}

//클릭 시 버튼 텍스트 바꾸기
function toggle() {
    var target = document.getElementById("btn");
    var temp = document.getElementById("link");
    var attrValue = temp.getAttribute('class');
    if (attrValue != "collapsing") {
        if (target.innerHTML == "만화 링크 펼치기 ▶") {
            target.innerHTML = "만화 링크 숨기기 ▼";
        }
        else {
            target.innerHTML = "만화 링크 펼치기 ▶";
        }
    }
}

/*
   source : https://github.com/shangus1012/manga
   제작자 : 만갤 여주학대만화추천(rmh0102)
   모든 소스코드는 직접 작성한 것이고, 출처는 굳이 지워야만 한다면 상관 없습니다.
   누군가 물어본다면 정보 공유를 위해서 출처를 표기해 주세요. 감사합니다.
*/