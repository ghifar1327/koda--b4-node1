const fs = require("node:fs");
const path = require("node:path");

function buatFile(music) {

  const folderMusik = path.join('./','musik')
  if(!fs.existsSync(folderMusik)){
    fs.mkdirSync(folderMusik);
  }
  music.forEach((music) => {
    const [artis, judul] = music.split("-");
    const namaArtis = artis;
    const judulLagu = judul;

    const folderPath = path.join(folderMusik, namaArtis); 
    if(!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath );
    }

    const filePath = path.join(folderPath, `${namaArtis}-${judulLagu}.mp3`);
    fs.writeFileSync(filePath, music);
    
  });
}

module.exports = buatFile;