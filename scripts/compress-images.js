const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const pub = path.join(__dirname, "..", "public");

const targets = [
  { in: "nyc-1.jpg", out: "nyc-1.webp", width: 1600 },
  { in: "nyc-2.jpg", out: "nyc-2.webp", width: 1600 },
  { in: "nyc-3.jpg", out: "nyc-3.webp", width: 1600 },
  { in: "nyc-letter.jpg", out: "nyc-letter.webp", width: 1200 },
  { in: "nyclogo.jpg", out: "nyclogo.webp", width: 256 },
  { in: "sheryians.jpg", out: "sheryians.webp", width: 128 },
];

(async () => {
  for (const t of targets) {
    const inPath = path.join(pub, t.in);
    const outPath = path.join(pub, t.out);
    if (!fs.existsSync(inPath)) {
      console.log(`SKIP ${t.in} (not found)`);
      continue;
    }
    await sharp(inPath)
      .rotate()
      .resize({ width: t.width, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(outPath);
    const inSize = (fs.statSync(inPath).size / 1024 / 1024).toFixed(1);
    const outSize = (fs.statSync(outPath).size / 1024).toFixed(0);
    console.log(`OK ${t.in} (${inSize}MB) -> ${t.out} (${outSize}KB)`);
  }
})();
