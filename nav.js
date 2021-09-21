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
 
 function pageList(pageNum) {//페이지 목록 구현
 	 var div = document.createElement('div');
 	 div.setAttribute('class', 'collapse navbar-collapse');
 	 div.setAttribute('id', 'navbarNav');
     var ul = document.createElement('ul');
     ul.setAttribute('class', 'nav nav-tabs mr-auto');
     var alarm = document.createElement('li');
     var bbsA = document.createElement('li');
     var bbsB = document.createElement('li');
     var bbsC = document.createElement('li');
     var bbsD = document.createElement('li');
     alarm.setAttribute('class', 'nav-item');
     bbsA.setAttribute('class', 'nav-item');
     bbsB.setAttribute('class', 'nav-item');
     bbsC.setAttribute('class', 'nav-item');
     bbsD.setAttribute('class', 'nav-item');

 	 alarm.innerHTML += "<a class='nav-link' href='javascript:void(0);' onclick='createNav(1)'>전체</a>";
     bbsA.innerHTML += "<a class='nav-link' href='javascript:void(0);' onclick='createNav(2)'>약피폐</a>";
     bbsB.innerHTML += "<a class='nav-link' href='javascript:void(0);' onclick='createNav(3)'>연재</a>";
     bbsC.innerHTML += "<a class='nav-link' href='javascript:void(0);' onclick='createNav(4)'>낙태</a>";
     bbsD.innerHTML += "<a class='nav-link' href='javascript:void(0);' onclick='createNav(5)'>완결</a>";
     
     if (pageNum == 5) { //완결
        bbsD.innerHTML = "<a class='nav-link active' href='javascript:void(0);' onclick='createNav(5)'>완결</a>";
        setup(5);
        maketable();
     }
     else if (pageNum == 1) {//전체
        alarm.innerHTML = "<a class='nav-link active' href='javascript:void(0);' onclick='createNav(1)'>전체</a>";
        setup(1);
        maketable();
     }
     else if (pageNum == 2) {//약피폐
        bbsA.innerHTML = "<a class='nav-link active' href='javascript:void(0);' onclick='createNav(2)'>약피폐</a>";
        setup(2);
        maketable();
     }
     else if (pageNum == 3) {//연재
        bbsB.innerHTML = "<a class='nav-link active' href='javascript:void(0);' onclick='createNav(3)'>연재</a>";
        setup(3);
        maketable();
     }
     else if (pageNum == 4) {//낙태
        bbsC.innerHTML = "<a class='nav-link active' href='javascript:void(0);' onclick='createNav(4)'>낙태</a>";
        setup(4);
        maketable();
    }
    else {
    }
 
     ul.appendChild(alarm);
     ul.appendChild(bbsA);
     ul.appendChild(bbsB);
     ul.appendChild(bbsC);
     ul.appendChild(bbsD);
     div.appendChild(ul);
     
     
     nav.appendChild(div);
 }
 //==================================================================================
 
 function createNav(pageNum) {
     nav = document.getElementById("nav");
     nav.innerHTML = "";
     nav.setAttribute('class', 'navbar navbar-expand-lg navbar-light fixed-top');
 	
 	 nav.innerHTML += "<a class='navbar-brand'>학대만화</a>";
     button();//function
      
     pageList(pageNum);//function
 }