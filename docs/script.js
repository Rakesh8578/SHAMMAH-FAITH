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
ఇది క్రిస్మస్ ఆర్భాటమే         ||తార||

బంగారమును సాంబ్రాణియు
బోళంబును తెచ్చాములే
ఆ యింటిలో మా కంటితో
నిను కనులారా గాంచాములే (2)

మా ఇమ్మానుయేలువు నీవేనని
నిను మనసారా కొలిచాములే
మా యూదుల రాజువు నీవేనని
నిను ఘనపరచి పొగిడాములే        ||తార||`,


  2: `ప్రభువా నీ కృప తలంచుచు నే స్తుతింతును 
నా జీవిత కాలమంతా నిన్నే ఘన పరుతును (2) 
దేవా ప్రాణ త్యాగము ధ్యానించుచు 
ప్రకటింతు నాలో ప్రాణం ఉన్నంత వరకు (2)   ||ప్రభు|| 
ం 
తడిపెను నా హృదయ సీమను నీ వాక్యపు జల్లులు 
కురిసెను నీ కృప హెర్మోను మంచు వలే (2) 
విరబూసే నాలో ఫలములు మెండుగా 
హర్షించే నా హ్రుదయం ఆనందగాయమై (2)   ||ప్రభు|| 

నా గిన్నే నిండి పోర్లేను నీ సమృద్ధి దీవెన తో 
ప్రవహించె నీ ఆత్మ జీవ నదివలెను (2) 
మోడైన బ్రతుకు చిగురించె నీలోనే 
నిట్టూర్పు లే నాలో స్తుతి గీతమాయెను (2)   ||ప్రభు|| 

నా హృదయ క్షేత్ర మందు కొలువైన యేసయ్యా 
విరజిమ్మే నాలోన నీ ఆరని కాంతులు (2) 
ఎద నిండె నాలో ఆత్మీయ తలపులలో 
పులకించి నా హృదయం  స్తుతి చేసి పాడెను (2)     ||ప్రభు||`,

  3: `నిన్నే నిన్నే నమ్ముకున్నానయ్య
నన్ను నన్ను వీడిపోబోకయ్యా (2)
నువ్వు లేక నేను బ్రతుకలేనయ్య
నీవుంటే నాకు చాలు యేసయ్య (2)        ||నిన్నే||

కన్నుల్లో కన్నీళ్లు గూడు కట్టినా
కన్నవారే కాదని నన్ను నెట్టినా (2)
కారు చీకటులే నన్ను కమ్మినా
కఠినాత్ములెందరో నన్ను కొట్టినా (2)
కఠినాత్ములెందరో నన్ను కొట్టినా            ||నిన్నే||

చేయని నేరములంటకట్టినా
చేతకాని వాడనని చీదరించినా (2)
చీకు చింతలు నన్ను చుట్టినా
చెలిమే చితికి నన్ను చేర్చినా (2)
చెలిమే చితికి నన్ను చేర్చినా                ||నిన్నే||`,

};

/* ================= SHOW SONG ================= */

function showSong(n) {
  const lyricsBox =
  document.getElementById("lyrics");
  lyricsBox.textContext = songs [n];    // ✅ NOT innerText
  
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

  const html = `
<!DOCTYPE html>
<html lang="te">
<head>
<meta charset="UTF-8">
<title>Shammah Faith Lyrics</title>
<style>
body {
  font-family: "Noto Sans Telugu", Arial, sans-serif;
  white-space: pre-wrap;
  font-size: 18px;
  padding: 20px;
}
h1 {
  text-align: center;
}
</style>
</head>
<body>
<h1>SHAMMAH FAITH</h1>
${lyrics}
</body>
</html>
`;

  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "shammah-faith-lyrics.html";
  document.body.appendChild(a);
  a.click();

  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}


/* ================= DOWNLOAD TXT ================= */
/* BEST POSSIBLE ON ANDROID */

function downloadLyrics() {
  const lyrics = document.getElementById("lyrics").innerText;

  if (!lyrics || lyrics.includes("ఎంచుకోండి")) {
    alert("ముందుగా పాటను ఎంచుకోండి");
    return;
  }

  const encoder = new TextEncoder("utf-16le");
  const blob = new Blob(
    [encoder.encode(lyrics)],
    { type: "text/plain;charset=utf-16le" }
  );

  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "shammah-faith-lyrics.txt";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

/* ================= DOWNLOAD PDF ================= */
/* ACTUALLY HTML – TELUGU SAFE */

function downloadPDF() {
  const lyrics = document.getElementById("lyrics").innerText;

  if (!lyrics || lyrics.includes("ఎంచుకోండి")) {
    alert("ముందుగా పాటను ఎంచుకోండి");
    return;
  }

  const html = `
<!DOCTYPE html>
<html lang="te">
<head>
<meta charset="UTF-8">
<title>Shammah Faith Lyrics</title>
<style>
body {
  font-family: "Noto Sans Telugu", Arial, sans-serif;
  white-space: pre-wrap;
  font-size: 18px;
  padding: 20px;
}
</style>
</head>
<body>
${lyrics}
</body>
</html>
`;

  const blob = new Blob(
    [html],
    { type: "text/html;charset=utf-8" }
  );

  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "shammah-faith-lyrics.html";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
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






