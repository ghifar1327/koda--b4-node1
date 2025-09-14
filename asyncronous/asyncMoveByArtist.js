const fs = require("node:fs");
const path = require("node:path");

async function buatFile(music) {
  const folderMusik = path.join("./", "musik");

  try {
    await fs.promises.mkdir(folderMusik, { recursive: true });

    for (const track of music) {
      const [artis, judul] = track.split("-");
      const namaArtis = artis.trim();
      const judulLagu = judul.trim();

      const folderPath = path.join(folderMusik, namaArtis);

      await fs.promises.mkdir(folderPath, { recursive: true });

      const filePath = path.join(folderPath, `${namaArtis}-${judulLagu}.mp3`);
      await fs.promises.writeFile(filePath, track);

      console.log(`${filePath} berhasil dibuat`);
    }
  } catch (err) {
    console.error("Terjadi error:", err);
  }
}

module.exports = buatFile;
