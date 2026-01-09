/* ================= SONG DATA ================= */

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

/* ================= SHOW SONG ================= */

function showSong(n) {
  document.getElementById("lyrics").innerText = songs[n];
}

/* ================= SEARCH ================= */

function searchSongs() {
  const val = document.getElementById("searchBox").value.toLowerCase();
  document.querySelectorAll("#songButtons button").forEach(btn => {
    const text = btn.innerText.toLowerCase() + " " + btn.dataset.search;
    btn.style.display = text.includes(val) ? "block" : "none";
  });
}

/* ================= DOWNLOAD TXT ================= */
function downloadPDF() {
  const lyrics = document.getElementById("lyrics").innerText;

  if (!lyrics || lyrics.includes("పాటను ఎంచుకోండి")) {
    alert("ముందుగా పాటను ఎంచుకోండి");
    return;
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({
    orientation: "p",
    unit: "mm",
    format: "a4"
  });

  doc.setFont("Times", "normal");
  doc.setFontSize(14);

  const lines = doc.splitTextToSize(lyrics, 180);
  doc.text(lines, 15, 20);

  doc.save("shammah-faith-lyrics.pdf");
}



function downloadDOC() {
  const lyrics = document.getElementById("lyrics").innerText;

  if (!lyrics || lyrics.includes("ఎంచుకోండి")) {
    alert("ముందుగా పాటను ఎంచుకోండి");
    return;
  }

  const html = `
<html xmlns:o='urn:schemas-microsoft-com:office:office'
      xmlns:w='urn:schemas-microsoft-com:office:word'
      xmlns='http://www.w3.org/TR/REC-html40'>
<head>
<meta charset="UTF-8">
<title>Shammah Faith Lyrics</title>
<style>
body {
  font-family: 'Noto Sans Telugu', Arial, sans-serif;
  white-space: pre-wrap;
  font-size: 18px;
}
</style>
</head>
<body>
${lyrics}
</body>
</html>
`;

  const blob = new Blob([html], { type: "application/msword;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "shammah-faith-lyrics.doc";
  a.click();
}

/* ✅ DOWNLOAD WORD (.DOCX) – TELUGU SAFE */
function downloadWord() {
  const lyrics = document.getElementById("lyrics").innerText;

  if (!lyrics || lyrics.includes("పాటను ఎంచుకోండి")) {
    alert("ముందుగా పాటను ఎంచుకోండి");
    return;
  }

  const content = `
<html xmlns:o="urn:schemas-microsoft-com:office:office"
      xmlns:w="urn:schemas-microsoft-com:office:word"
      xmlns="http://www.w3.org/TR/REC-html40">
<head>
<meta charset="UTF-8">
<title>Shammah Faith Lyrics</title>
</head>
<body style="font-family:Noto Sans Telugu,Arial; font-size:18px; white-space:pre-wrap;">
${lyrics}
</body>
</html>
`;

  const blob = new Blob([content], {
    type: "application/msword;charset=utf-8;"
  });

  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "shammah-faith-lyrics.doc";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

