/* =========================
   SONG DATA (WITH YOUTUBE)
   ========================= */

const songs = {
  1: {
    lyrics: `తార వెలిసింది ఆ నింగిలో ధరణి మురిసింది
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
ఇది క్రిస్మస్ ఆర్భాటమే         ||తార||

బంగారమును సాంబ్రాణియు
బోళంబును తెచ్చాములే
ఆ యింటిలో మా కంటితో
నిను కనులారా గాంచాములే (2)

మా ఇమ్మానుయేలువు నీవేనని
నిను మనసారా కొలిచాములే
మా యూదుల రాజువు నీవేనని
నిను ఘనపరచి పొగిడాములే        ||తార||`,
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },

  2: {
    lyrics: `యేసయ్య నామములో శక్తి ఉంది
యేసయ్య ప్రేమలో రక్షణ ఉంది`,
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },

  3: {
    lyrics: `ప్రభువా నీ కృప అపారం
నీ ప్రేమ శాశ్వతం`,
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }
};

/* =========================
   SHOW SONG
   ========================= */

function showSong(number) {
  const song = songs[number];
  if (!song) return;

  document.getElementById("lyrics").innerText = song.lyrics;

  // Show YouTube button
  const ytBtn = document.getElementById("youtubeBtn");
  if (ytBtn && song.youtube) {
    ytBtn.href = song.youtube;
    ytBtn.style.display = "inline-block";
  }

  history.pushState({ page: "song" }, "", "#song");
  localStorage.setItem("lastSong", number);
}

/* =========================
   SEARCH (TELUGU + ENGLISH)
   ========================= */

function searchSongs() {
  const input = document.getElementById("searchBox").value.toLowerCase();
  const buttons = document.querySelectorAll("#songButtons button");

  buttons.forEach(button => {
    const text =
      button.innerText.toLowerCase() + " " +
      button.getAttribute("data-search").toLowerCase();

    button.style.display = text.includes(input)
      ? "inline-block"
      : "none";
  });
}

/* =========================
   DOWNLOAD TXT
   ========================= */

function downloadLyrics() {
  const lyrics = document.getElementById("lyrics").innerText;

  if (!lyrics || lyrics.includes("పాటను ఎంచుకోండి")) {
    alert("Please select a song first");
    return;
  }

  const blob = new Blob([lyrics], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "church-lyrics.txt";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/* =========================
   DOWNLOAD PDF
   ========================= */

function downloadPDF() {
  const lyrics = document.getElementById("lyrics").innerText;

  if (!lyrics || lyrics.includes("పాటను ఎంచుకోండి")) {
    alert("Please select a song first");
    return;
  }

  const win = window.open("", "", "width=800,height=600");
  win.document.write("<pre style='font-size:16px;font-family:Arial;'>");
  win.document.write(lyrics.replace(/\n/g, "<br>"));
  win.document.write("</pre>");
  win.document.close();
  win.print();
}

/* =========================
   HOME (AUTO BACK)
   ========================= */

function goHomeAuto() {
  document.getElementById("lyrics").innerText = "పాటను ఎంచుకోండి 👆";
  localStorage.removeItem("lastSong");

  const ytBtn = document.getElementById("youtubeBtn");
  if (ytBtn) ytBtn.style.display = "none";

  const buttons = document.querySelectorAll("#songButtons button");
  buttons.forEach(btn => btn.style.display = "inline-block");
}

/* MOBILE / BROWSER BACK */
window.onpopstate = function () {
  goHomeAuto();
};

/* KEYBOARD ESC */
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    goHomeAuto();
    history.pushState(null, "", "#home");
  }
});

/* RESTORE LAST SONG ON REFRESH */
window.onload = function () {
  const lastSongNumber = localStorage.getItem("lastSong");
  if (lastSongNumber && songs[lastSongNumber]) {
    showSong(lastSongNumber);
  }
};function searchSongs() {
  const input = document.getElementById("searchBox").value.toLowerCase();
  const buttons = document.querySelectorAll("#songButtons button");

  buttons.forEach(button => {
    const text =
      button.innerText.toLowerCase() + " " +
      button.getAttribute("data-search").toLowerCase();

    button.style.display = text.includes(input)
      ? "inline-block"
      : "none";
  });
}

/* DOWNLOAD TXT */
function downloadLyrics() {
  const lyrics = document.getElementById("lyrics").innerText;

  if (!lyrics || lyrics.includes("పాటను ఎంచుకోండి")) {
    alert("Please select a song first");
    return;
  }

  const blob = new Blob([lyrics], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "church-lyrics.txt";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/* DOWNLOAD PDF */
function downloadPDF() {
  const lyrics = document.getElementById("lyrics").innerText;

  if (!lyrics || lyrics.includes("పాటను ఎంచుకోండి")) {
    alert("Please select a song first");
    return;
  }

  const win = window.open("", "", "width=800,height=600");
  win.document.write("<pre style='font-size:16px;font-family:Arial;'>");
  win.document.write(lyrics.replace(/\n/g, "<br>"));
  win.document.write("</pre>");
  win.document.close();
  win.print();
}

/* HOME FUNCTION (AUTO) */
function goHomeAuto() {
  document.getElementById("lyrics").innerText = "పాటను ఎంచుకోండి 👆";
  localStorage.removeItem("lastSong");

  const buttons = document.querySelectorAll("#songButtons button");
  buttons.forEach(btn => btn.style.display = "inline-block");
}

/* MOBILE / BROWSER BACK */
window.onpopstate = function () {
  goHomeAuto();
};

/* KEYBOARD ESC */
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    goHomeAuto();
    history.pushState(null, "", "#home");
  }
});

/* RESTORE LAST SONG ON REFRESH */
window.onload = function () {
  const savedLyrics = localStorage.getItem("lastSong");
  if (savedLyrics) {
    document.getElementById("lyrics").innerText = savedLyrics;
  }
};


