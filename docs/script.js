let currentSongTitle = "";

const songs = {
  1: {
    title: "తార వెలిసింది",
    lyrics: `తార వెలిసింది ఆ నింగిలో ధరణి మురిసింది
దూత వచ్చింది సువార్తను మాకు తెలిపింది (2)

రాజులకు రాజు పుట్టాడని
యూదుల రాజు ఉదయించాడని (2)`
  },

  2: {
    title: "ప్రభువా నీ కృప",
    lyrics: `ప్రభువా నీ కృప అపారం
నీ ప్రేమ శాశ్వతం`
  },

  3: {
    title: "నిన్నే నమ్ముకున్నానయ్య",
    lyrics: `నిన్నే నమ్ముకున్నానయ్య
నీవే నా ఆధారం`
  }
};

function showSong(id) {
  const song = songs[id];
  if (!song) return;

  document.getElementById("lyrics").innerText = song.lyrics;
  currentSongTitle = song.title;
}

function downloadPDF() {
  if (!currentSongTitle) {
    alert("ముందుగా పాటను ఎంచుకోండి");
    return;
  }

  const lyrics = document.getElementById("lyrics").innerText;

  const html = `
<!DOCTYPE html>
<html lang="te">
<head>
<meta charset="UTF-8">
<title>${currentSongTitle}</title>
<style>
body {
  font-family: "Noto Sans Telugu", Arial;
  white-space: pre-wrap;
  font-size: 18px;
  padding: 20px;
}
h1 { text-align: center; }
</style>
</head>
<body>
<h1>${currentSongTitle}</h1>
${lyrics}
</body>
</html>
`;

  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = currentSongTitle + ".html";
  a.click();
}








