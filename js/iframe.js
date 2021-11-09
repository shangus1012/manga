//sleep
function sleep(ms) {
    return new Promise(function (resolve) {
        return setTimeout(resolve, ms);
    });
}
//#link의 class가 collapse show면 resolve, 아니면 reject
function isOpen() {
    return new Promise(function (resolve, reject) {
        var target = document.getElementById("link");
        var attrValue = target.getAttribute('class');
        if (attrValue != "collapse show") {
            reject();
        }
        resolve();
    });
}
//1ms 쉬고 isOpen 호출, isOpen으로부터 resolve 받으면 calcHeight 호출, reject 받으면 test 호출
function test() {
    sleep(1).then(() => isOpen())
    .then(() => calcHeight())
    .catch(() => test());
}


//iframe으로 불러온 hyperlink.html의 height를 구하고 이를 iframe의 height에 적용
function calcHeight() {
    var the_height = document.getElementById('the_iframe').contentWindow.document.body.scrollHeight;
    document.getElementById('the_iframe').height = the_height + 20;
    return 1;
}

function toggle() {
    var target = document.getElementById("btn");
    if(target.innerHTML == "만화 링크 열기 ▶") {
        target.innerHTML = "만화 링크 닫기 ▼";
    }
    else {
        target.innerHTML = "만화 링크 열기 ▶";
    }
}

 /*
    source : https://github.com/shangus1012/manga
    제작자 : 만갤 여주학대만화추천(rmh0102)
    모든 소스코드는 직접 작성한 것이고, 출처는 굳이 지워야만 한다면 상관 없습니다.
    누군가 물어본다면 정보 공유를 위해서 출처를 표기해 주세요. 감사합니다.
*/