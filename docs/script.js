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
function showSong(n) {
  document.getElementById("lyrics").innerText = songs[n];
}

/* SEARCH */
function searchSongs() {
  const val = document.getElementById("searchBox").value.toLowerCase();
  document.querySelectorAll("#songButtons button").forEach(btn => {
    const text = btn.innerText.toLowerCase() + " " + btn.dataset.search;
    btn.style.display = text.includes(val) ? "block" : "none";
  });
}

/* ✅ DOWNLOAD TXT (FIXED – TELUGU SAFE) */
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
