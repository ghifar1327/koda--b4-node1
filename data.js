const fs = require('node:fs');
function namaMusik(musics){
    musics.forEach((music)=>{
        const fileName = music + ".mp3";

        fs.writeFile(`./musik/${fileName}`, music, (err)=>{
            if(err){
                console.log(`${fileName}:`,err);
            }else{
                console.log(`${fileName} berahsil`);
                const err = new Error('')
            }
        });
    });
}

module.exports = namaMusik;