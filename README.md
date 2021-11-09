# manga
소스는 상업적 목적이 아닌 이상 어디에든 사용해도 상관없습니다. 다만 다른이들이 참고하고 정보를 공유할 수 있도록 출처는 남겨주세요  
출처 : 만갤 여주학대만화(rmh0102) or 이 깃허브의 링크  

    https://github.com/shangus1012/manga
<코드 정보>  
nav태그는 nav.js로, table태그는 makeT.js로 동적생성하였습니다  
list.js에 난수 버젼을 붙이는 makeVer.js를 사용하여 업데이트가 편리합니다  
nav태그는 재귀함수의 형태를 띄고 있으며, nav태그에서 makeT 함수를 호출합니다  
  
만화 링크들은 iframe.html을 사용해 별도의 파일에서 불러 옵니다  
iframe.js에서는 동기식 함수 호출을 사용해 iframe의 높이를 조절합니다  
부트스트랩 4.0을 적용했습니다  
https://shangus1012.github.io/manga/
