const clock = document.querySelector("h2#clock"); // 시계 파트

function getClock() {
  // 날짜 불러오기
  const date = new Date(); //새로운 날짜 생성
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000); // 매 1초마다 실행
