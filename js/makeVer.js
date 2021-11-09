//list.js 파일을 로드할 때 랜덤한 version을 붙이는 과정. 캐시를 불러오지 않게 하기 위해 사용한다
var script = document.getElementById("script");
linkStr = "js/list.js?ver=" + Math.floor(Math.random() * 100) + 1;
script.setAttribute('src', linkStr);


/*
    source : https://github.com/shangus1012/manga
    제작자 : 만갤 여주학대만화추천(rmh0102)
    모든 소스코드는 직접 작성한 것이고, 출처는 굳이 지워야만 한다면 상관 없습니다.
    누군가 물어본다면 정보 공유를 위해서 출처를 표기해 주세요. 감사합니다.
*/