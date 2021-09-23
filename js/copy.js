function copyToClipboard(i) { //copy 함수
    const t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = deleteETC(arr[i]);
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);
  }

function deleteETC(str) { //복사할 텍스트에서 설명문을 지우기 위한 함수
    var temp = str.replace("~", "").split("(");
    alert("복사됨 [" + temp[0] + "]");
    return temp[0];
}