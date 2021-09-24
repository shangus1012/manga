/**
 * nav 태그를 출력해 주는 자바스크립트파일
 */
 var nav, div1, div2;

 //=====================================================================================
 function button() {//반응형 웹페이지 구현
    var button = document.createElement("button");
    button.setAttribute('type', 'button');
    button.setAttribute('class', 'navbar-toggler');
    button.setAttribute('type', 'button');
    button.setAttribute('data-toggle', 'collapse');
    button.setAttribute('data-target', '#navbarNav');
    button.setAttribute('aria-controls', 'navbarNav');
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Toggle navigation');
    button.innerHTML += "<span class='navbar-toggler-icon'></span>"
    nav.appendChild(button);
 }
 
 function pageList(pageNum) {//탭목록 구현
    var div = document.createElement('div');
    div.setAttribute('class', 'collapse navbar-collapse');
    div.setAttribute('id', 'navbarNav');
    var ul = document.createElement('ul');
    ul.setAttribute('class', 'nav nav-tabs mr-auto');
    var all = document.createElement('li');
    var bbsA = document.createElement('li');
    var bbsB = document.createElement('li');
    var bbsC = document.createElement('li');
    var bbsD = document.createElement('li');
    all.setAttribute('class', 'nav-item');
    bbsA.setAttribute('class', 'nav-item');
    bbsB.setAttribute('class', 'nav-item');
    bbsC.setAttribute('class', 'nav-item');
    bbsD.setAttribute('class', 'nav-item');
 
    all.innerHTML += "<a class='nav-link' href='javascript:void(0);' onclick='createNav(1)'>전체</a>";
    bbsA.innerHTML += "<a class='nav-link' href='javascript:void(0);' onclick='createNav(2)'>약피폐</a>";
    bbsB.innerHTML += "<a class='nav-link' href='javascript:void(0);' onclick='createNav(3)'>연재</a>";
    bbsC.innerHTML += "<a class='nav-link' href='javascript:void(0);' onclick='createNav(4)'>낙태</a>";
    bbsD.innerHTML += "<a class='nav-link' href='javascript:void(0);' onclick='createNav(5)'>완결</a>";
 
    if (pageNum == 1) {//전체
       all.innerHTML = "<a class='nav-link active' href='javascript:void(0);' onclick='createNav(1)'>전체</a>";
       setup(1);
    }
    else if (pageNum == 2) {//약피폐
       bbsA.innerHTML = "<a class='nav-link active' href='javascript:void(0);' onclick='createNav(2)'>약피폐</a>";
       setup(2);
    }
    else if (pageNum == 3) {//연재
       bbsB.innerHTML = "<a class='nav-link active' href='javascript:void(0);' onclick='createNav(3)'>연재</a>";
       setup(3);
    }
    else if (pageNum == 4) {//낙태
       bbsC.innerHTML = "<a class='nav-link active' href='javascript:void(0);' onclick='createNav(4)'>낙태</a>";
       setup(4);
    }
    else if (pageNum == 5) { //완결
       bbsD.innerHTML = "<a class='nav-link active' href='javascript:void(0);' onclick='createNav(5)'>완결</a>";
       setup(5);
    }
    else {
       alert("error! pageNum = " + pageNum);
    }
 
    ul.appendChild(all);
    ul.appendChild(bbsA);
    ul.appendChild(bbsB);
    ul.appendChild(bbsC);
    ul.appendChild(bbsD);
    div.appendChild(ul);
 
 
    nav.appendChild(div);
 }
 //==================================================================================
 
 function createNav(pageNum) { // nav를 생성하는 함수
    nav = document.getElementById("nav");
    nav.innerHTML = "";
    nav.setAttribute('class', 'navbar navbar-expand-lg navbar-light fixed-top');
 
    nav.innerHTML += "<a class='navbar-brand' href='https://github.com/shangus1012/manga'>학대만화</a>";
    button();//function
 
    pageList(pageNum);//function
 }

 /*
    source : https://github.com/shangus1012/manga
    제작자 : 만갤 여주학대만화추천(rmh0102)
    모든 소스코드는 직접 작성한 것이고, 출처는 지워도 상관 없습니다.
    누군가 물어본다면 정보 공유를 위해서 출처를 표기해 주세요. 감사합니다.
*/