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
function downloadLyrics() {
  const lyrics = document.getElementById("lyrics").innerText;

  if (lyrics.includes("ఎంచుకోండి")) {
    alert("ముందు పాటను ఎంచుకోండి");
    return;
  }

  const blob = new Blob([lyrics], { type: "text/plain" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "shammah-faith-lyrics.txt";
  a.click();
}

/* DOWNLOAD PDF */
function downloadPDF() {
  const lyrics = document.getElementById("lyrics").innerText;

  if (lyrics.includes("ఎంచుకోండి")) {
    alert("ముందు పాటను ఎంచుకోండి");
    return;
  }

  const win = window.open("", "", "width=800,height=600");
  win.document.write("<pre>" + lyrics + "</pre>");
  win.print();
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
      
