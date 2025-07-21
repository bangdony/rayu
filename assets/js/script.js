const gombalanList = [
  "Kamu tahu nggak kenapa langit selalu biru? Karena Tuhan tahu kamu paling cocok jadi pelengkapnya 💙",
  "Kalau kamu jadi bintang, aku rela jadi malam agar selalu bisa bersamamu ✨",
  "Aku nggak butuh matahari, karena senyummu udah cukup menghangatkan hariku ☀️",
  "Ulang tahunmu jadi hari favoritku, karena itu hari dimulainya dunia jadi lebih indah 😘",
  "Setiap detik bersamamu adalah hadiah ulang tahun terbaik bagiku 💝"
];

function showGombalan() {
  const text = gombalanList[Math.floor(Math.random() * gombalanList.length)];
  document.getElementById("gombalText").innerText = text;
}