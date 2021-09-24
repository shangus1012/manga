function copyToClipboard(i) { //copy 함수
    const t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = deleteETC(arrT[i]);
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);
  }

function deleteETC(str) { //복사할 텍스트에서 설명문을 지우기 위한 함수
    var temp = str.replace("~", "").split("(");
    alert("복사됨 [" + temp[0] + "]");
    return temp[0];
}


/*
    source : https://github.com/shangus1012/manga
    제작자 : 만갤 여주학대만화추천(rmh0102)
    모든 소스코드는 직접 작성한 것이고, 출처는 지워도 상관 없습니다.
    누군가 물어본다면 정보 공유를 위해서 출처를 표기해 주세요. 감사합니다.
*/