const clock = document.querySelector("#clock"); // 시계 파트
const todayInfo = document.querySelector("#today-info"); // 날짜 파트

function getToday() {
  // 날짜 불러오기
  const date = new Date(); //새로운 날짜 생성
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  const yy = date.getFullYear();
  const mm = date.getMonth() + 1;
  const dd = date.getDate();
  const days = date.getDay();

  const week = ["일", "월", "화", "수", "목", "금", "토"];

  clock.innerText = `${hours} : ${minutes} : ${seconds}`;
  todayInfo.innerText = `${yy}년 ${mm}월 ${dd}일 ${week[days]}요일`;
}

getToday();
setInterval(getToday, 1000); // 매 1초마다 실행
