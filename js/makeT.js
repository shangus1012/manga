var arr;

function setup(n) {
    var temp;
    if(n == 2) {
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
    else if (n == 1) {
        temp = strA + "/" + strB + "/" + strC + "/" + strD;
    }
    arr = temp.split("/");
}

function maketable() {
    var tbody = document.getElementById("table");
    tbody.innerHTML = "";
    for (i = 0; i < arr.length; i++) {
        var temp = "<tr onclick='copyToClipboard(" + i +");'><td>" + i + "</td>" + "<td>" + arr[i] + "</td></tr>";
        tbody.innerHTML += temp;
    }
}

function copyToClipboard(i) {
    const t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = deleteETC(arr[i]);
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);
  }
  function copy() {
    copyToClipboard('Hello World');
    console.log('Copied!');
  }

function deleteETC(str) {
    var temp = str.replace("~", "").split("(");
    alert("복사됨 [" + temp[0] + "]");
    return temp[0];
}