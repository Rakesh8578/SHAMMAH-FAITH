const songs = {

  1: `తార వెలిసింది ఆ నింగిలో ధరణి మురిసింది
దూత వచ్చింది సువార్తను మాకు తెలిపింది (2)

రాజులకు రాజు పుట్టాడని
యూదుల రాజు ఉదయించాడని (2)         ||తార||

మందను విడచి మమ్మును మరచి
మేమంతా కలిసి వెళ్ళాములే
ఆ ఊరిలో ఆ పాకలో
స్తుతి గానాలు పాడాములే (2)

సంతోషమే ఇక సంబరమే
లోక రక్షణ ఆనందమే
స్తోత్రార్పణే మా రారాజుకే
ఇది క్రిస్మస్ ఆర్భాటమే         ||తార||`,

  2: `యేసయ్య నామములో శక్తి ఉంది
యేసయ్య ప్రేమలో రక్షణ ఉంది`,

  3: `ప్రభువా నీ కృప అపారం
నీ ప్రేమ శాశ్వతం`
};

/* SHOW SONG */
function showSong(number) {
  const lyrics = songs[number];
  document.getElementById("lyrics").innerText = lyrics;

  history.pushState({ page: "song" }, "", "#song");
  localStorage.setItem("lastSong", lyrics);
}

/* SEARCH (TELUGU + ENGLISH) */
function searchSongs() {
  const input = document.getElementById("searchBox").value.toLowerCase();
  const buttons = document.querySelectorAll("#songButtons button");

  buttons.forEach(btn => {
    const text =
      btn.innerText.toLowerCase() + " " +
      btn.dataset.search.toLowerCase();

    btn.style.display = text.includes(input) ? "block" : "none";
  });
}

/* DOWNLOAD TXT */
function downloadPDF() {
  const lyrics = document.getElementById("lyrics").innerText;

  if (!lyrics || lyrics.includes("పాటను ఎంచుకోండి")) {
    alert("ముందుగా పాటను ఎంచుకోండి");
    return;
  }

  const pdfContent = `
<!DOCTYPE html>
<html lang="te">
<head>
<meta charset="UTF-8">
<title>Shammah Faith Lyrics</title>
<style>
  body {
    font-family: Noto Sans Telugu, Arial, sans-serif;
    white-space: pre-wrap;
    font-size: 16px;
    padding: 20px;
  }
</style>
</head>
<body>
${lyrics.replace(/\n/g, "<br>")}
</body>
</html>
`;

  const blob = new Blob([pdfContent], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "shammah-faith-lyrics.pdf";
  document.body.appendChild(a);
  a.click();

  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/* BACK / ESC */
function goHome() {
  document.getElementById("lyrics").innerText = "పాటను ఎంచుకోండి 👆";
  localStorage.removeItem("lastSong");

  document.querySelectorAll("#songButtons button")
    .forEach(b => b.style.display = "block");
}

window.onpopstate = goHome;

document.addEventListener("keydown", e => {
  if (e.key === "Escape") goHome();
});

/* RESTORE */
window.onload = () => {
  const saved = localStorage.getItem("lastSong");
  if (saved) document.getElementById("lyrics").innerText = saved;
};
      



