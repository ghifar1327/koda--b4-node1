const fs = require("node:fs");

async function namaMusik(musics) {
  if (!fs.existsSync("./musik")) {
    await fs.promises.mkdir("./musik", { recursive: true });
  }

  for (const music of musics) {
    const fileName = music + ".mp3";
    const filePath = `./musik/${fileName}`;

    try {
      await fs.promises.writeFile(filePath, music);
      console.log(`${fileName} berhasil dibuat`);
    } catch (err) {
      console.log(`${fileName}:`, err);
    }
  }
}

module.exports = namaMusik;
