function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  // 🔐 ตั้งรหัสตรงนี้
  if (user === "พี่ดาวนี่" && pass === "201068") {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("loveBox").style.display = "block";
    document.getElementById("bgm").play();
  } else {
    document.getElementById("error").innerText = "ทำไมผิดแสดงว่าไม่ใช่แฟนเค้าเด้หนิ 💔";
  }
}

function showLove() {
  const texts = [
    "อ้วนคืออุนแม่คนที่สองของเค้า💜",
    "ขี้ดุ ขี้บ่น แต่เค้าก็รักอ้วนมากขึ้นทุกวัน 😊",
    "อยากเจออ้วนแย้ว อยากกอด อยากจุ้บจุ้บ อยากโดน. . .บ่น อิอิ🌈",
    "น้องอิ๋งรักพี่ดาวนี่ที่สุดในโลกใบนี้ รักนะคะเธอ💕"
  ];
  const r = Math.floor(Math.random() * texts.length);
  document.getElementById("loveText").innerText = texts[r];
}

function acceptLove() {
  document.getElementById("result").innerText =
    "เย้ ห้ามทิ้งน้องอิ๋งแยะน้าาา รักอุนแม่ดาวนี่💍💜";
}

function moveNo() {
  const btn = document.querySelector(".no");
  btn.style.position = "absolute";
  btn.style.left = Math.random() * 200 + "px";
  btn.style.top = Math.random() * 200 + "px";
}
