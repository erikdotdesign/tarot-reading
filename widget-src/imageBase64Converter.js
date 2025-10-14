const fs = require('fs');
const path = require('path');

const imagesDir = "./images";
const out = {};

for (const file of fs.readdirSync(imagesDir)) {
  const name = path.basename(file, path.extname(file));
  const base64 = fs.readFileSync(path.join(imagesDir, file)).toString("base64");
  out[name] = `data:image/jpeg;base64,${base64}`;
}

fs.writeFileSync("./cardImages.json", JSON.stringify(out, null, 2));