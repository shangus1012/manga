//promise를 사용한 setTimeout
function sleep(ms) {
    return new Promise(r => setTimeout(r, ms));
}
//id=link인 태그가 class=collapse show가 될 때까지 test 호출
function getAttr() {
    var target = document.getElementById("link");
    var attrValue = target.getAttribute('class');
    if (attrValue != "collapse show") {
        test();
    }
    calcHeight();
    return 0;
}
//20ms sleep 후 getAttr() 호출
function test() {
    sleep(20).then(() => getAttr());
}
//iframe으로 불러온 hyperlink.html의 height를 구하고 이를 iframe의 height에 적용
function calcHeight() {
    var the_height = document.getElementById('the_iframe').contentWindow.document.body.scrollHeight;
    document.getElementById('the_iframe').height = the_height + 20;
}